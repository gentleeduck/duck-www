import { DashboardTableOfContents, DocsPagerBottom, DocsPagerTop, Mdx } from '@gentleduck/docs/client'
import { cn } from '@gentleduck/libs/cn'
import { badgeVariants } from '@gentleduck/registry-ui/badge'
import { ExternalLinkIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { SLUG_METADATA } from '~/config/metadata'
import { docs } from '../../../../.velite'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

function getDocFromSlug(slug?: string[]) {
  const path = slug && slug.length > 0 ? slug.join('/') : 'index'
  const normalizedPath = path.replace(/^\/+|\/+$/g, '')
  const candidates = normalizedPath === 'index' ? ['index'] : [normalizedPath, `${normalizedPath}/index`]

  return docs.find((doc) => candidates.includes(doc.permalink)) ?? null
}

export async function generateStaticParams() {
  const unique = new Map<string, string[]>()

  for (const doc of docs) {
    const permalink = doc.permalink.replace(/^\/+|\/+$/g, '')

    if (permalink === 'index') {
      unique.set('', [])
      continue
    }

    const cleanPath = permalink.endsWith('/index') ? permalink.slice(0, -'/index'.length) : permalink
    unique.set(cleanPath, cleanPath.split('/'))
  }

  return Array.from(unique.values()).map((slug) => ({ slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<Metadata> {
  const params = await props.params
  const doc = getDocFromSlug(params.slug)

  if (!doc) {
    return {}
  }
  return SLUG_METADATA(doc)
}

const PostLayout = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const _params = await params
  const doc = getDocFromSlug(_params.slug)

  if (!doc) {
    notFound()
  }

  return (
    <main className="relative py-2 md:py-4 xl:grid xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-8">
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <div className="mb-4 flex items-center justify-end">
          <DocsPagerTop doc={doc} />
        </div>
        <div className="space-y-3 border-border border-b pb-6">
          <h1 className={cn('scroll-m-20 font-bold text-3xl tracking-tight md:text-4xl')}>
            {doc.title.split('-').join(' ')}
          </h1>
          {doc.description && <p className="text-base text-muted-foreground">{doc.description}</p>}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
                href={doc.links.doc}
                rel="noreferrer"
                target="_blank">
                Docs
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
                href={doc.links.api}
                rel="noreferrer"
                target="_blank">
                API Reference
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pt-8 pb-12">
          <Mdx code={doc.body} />
        </div>
        <DocsPagerBottom doc={doc} />
      </div>
      {doc.toc && (
        <aside className="hidden text-sm xl:block">
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <div className="show-scroll-hover py-2">
              <DashboardTableOfContents toc={doc.toc} />
            </div>
          </div>
        </aside>
      )}
    </main>
  )
}

export default PostLayout
