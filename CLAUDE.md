# duck-www

Monorepo for the Gentleduck website, UI components, and developer tooling.

## React Grab

React Grab is loaded as a dev-only script in `apps/www/app/layout.tsx`. It is injected via an unpkg CDN `<script>` tag inside `<head>`, gated behind `process.env.NODE_ENV === 'development'`. It is never included in production builds.

## Structure

- `apps/www` -- Next.js documentation site (gentleduck.org)
- `packages/ui` -- shared UI component library (`@gentleduck/ui`)
- `tooling/` -- shared configs: biome, tailwind, typescript, tsdown, vitest, github, bash

## Build & Dev

```sh
bun install          # install dependencies
bun run dev          # start all apps in dev mode (turbo)
bun run build        # production build (turbo)
bun run check        # biome check
bun run lint         # biome lint
bun run format       # biome format --write
bun run fix          # biome check --write (lint + format)
bun run test         # run tests (turbo)
bun run check-types  # typecheck all packages (turbo)
bun run clean        # remove dist, caches, node_modules, .next, .velite
```

## Conventions

- Package manager: **Bun** (`bun@1.3.5`).
- Linter/formatter: **Biome** (not ESLint/Prettier).
- Build orchestration: **Turborepo**.
- Changesets for versioning and publishing (`bun run changeset`).
- React 19, Next.js 16, TypeScript 5.9, Tailwind CSS 4.
- Font presets are applied via an inline blocking script in `layout.tsx` to prevent FOUC.
