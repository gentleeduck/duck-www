import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '~/components/layouts/features'

type Partner = {
  avatar: string
  href: string
  name: string
}

const partners: Partner[] = [
  {
    avatar: 'https://aibrush.co/sparkles.svg',
    href: 'https://aibrush.co',
    name: 'AIBrush',
  },
  {
    avatar: 'https://github.com/wildduck2.png',
    href: 'https://github.com/wildduck2',
    name: 'wildduck2',
  },
]

function PartnerCell({ partner }: { partner: Partner }) {
  return (
    <Link
      className="group flex items-center justify-center gap-3 border-r border-b border-border/60 px-8 py-6 transition-colors last:border-r-0 hover:bg-muted/40"
      href={partner.href}
      rel="noreferrer"
      target="_blank">
      <Image
        alt={partner.name}
        className="size-8 shrink-0 rounded-full object-cover"
        height={32}
        src={partner.avatar}
        unoptimized
        width={32}
      />
      <span className="font-semibold text-foreground text-lg tracking-tight">{partner.name}</span>
    </Link>
  )
}

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-heading" className="relative" id="partners">
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/3 z-0 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl"></div>
      <div
        aria-hidden="true"
        className="absolute right-1/4 bottom-1/4 z-0 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl"></div>

      <div className="container relative mx-auto py-24 sm:py-32">
        <SectionTitle subtitle="The people and organizations that support GentleDuck." title="Partners" />

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border border-border/60">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {partners.map((partner) => (
              <PartnerCell key={partner.name} partner={partner} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-5 py-2.5 text-muted-foreground text-sm transition-colors hover:border-primary/30 hover:text-foreground"
            href={process.env.NEXT_PUBLIC_SPONSOR_URL ?? 'https://opencollective.com/gentelduck'}
            rel="noreferrer"
            target="_blank">
            <Heart aria-hidden="true" className="size-4" />
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  )
}
