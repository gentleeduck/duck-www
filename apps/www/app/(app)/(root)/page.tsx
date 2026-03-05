import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@gentleduck/docs/client'
import { Button } from '@gentleduck/registry-ui/button'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Announcement } from '~/components/announcement'
import { FeaturesSection } from '~/components/layouts/features'
import { EcosystemSection } from '~/components/layouts/core-packages'
import { PartnersSection } from '~/components/layouts/partners'
import { siteConfig } from '~/config/site'

const title = siteConfig.title
const description = siteConfig.description

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  title,
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <PageHeader className="relative flex flex-col justify-start justify-self-center text-center">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 z-0 h-16 w-16 rounded-full bg-yellow-400/20 blur-2xl md:h-72 md:w-72"></div>
        <div
          aria-hidden="true"
          className="absolute bottom-16 left-0 z-0 h-36 w-36 rounded-full bg-primary/20 blur-3xl"></div>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions className="mx-auto w-full justify-center">
          <Button asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/docs/news">What is new?</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper">
        <div>
          <FeaturesSection />
          <EcosystemSection />
          <PartnersSection />
        </div>
      </div>
    </>
  )
}
