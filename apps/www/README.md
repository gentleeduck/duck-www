<p align="center">
  <img src="./public/og/root.png" alt="GentleDuck WWW" width="800"/>
</p>

# @gentleduck/www

Next.js website and documentation experience for GentleDuck.

## Stack
- Next.js App Router
- `@gentleduck/docs` (shared docs kit)
- Velite (MDX pipeline)
- Registry tooling for component previews

## Quick Start
```bash
bun --filter @gentleduck/www dev:docs
bun --filter @gentleduck/www dev
```

## Scripts
- `bun --filter @gentleduck/www dev` – run the dev server
- `bun --filter @gentleduck/www build` – production build
- `bun --filter @gentleduck/www start` – serve the build
- `bun --filter @gentleduck/www preview` – create a Vercel preview deployment
- `bun --filter @gentleduck/www deploy` – deploy to Vercel production
- `bun --filter @gentleduck/www dev:docs` – watch/generate MDX content
- `bun --filter @gentleduck/www build:docs` – one-time MDX build
- `bun --filter @gentleduck/www build:reg` – rebuild the UI registry and format output
- `bun --filter @gentleduck/www lint` – lint

## Environment
- `.env` is optional; see `.env.example` for defaults.
