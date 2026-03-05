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
        className="pointer-events-none absolute -top-28 -left-16 z-0 h-[10rem] w-[10rem] rounded-full bg-gradient-to-br from-pink-500/10 to-rose-400/6 blur-[80px] md:h-[16rem] md:w-[16rem]"></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-28 z-0 h-[9rem] w-[9rem] rounded-full bg-gradient-to-tl from-orange-400/8 to-amber-400/5 blur-[90px] md:h-[14rem] md:w-[14rem]"></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-1/4 z-0 h-[7rem] w-[7rem] rounded-full bg-gradient-to-b from-fuchsia-400/5 to-purple-400/3 blur-[80px] md:h-[12rem] md:w-[12rem]"></div>

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
