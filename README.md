<p align="center">
  <img src="./apps/www/public/og/root.png" alt="GentleDuck WWW" width="800"/>
</p>

# @gentleduck/www Monorepo

`@duck-www` is the GentleDuck monorepo for the public website and docs platform.

## Website
- Production: https://gentleduck.org
- GitHub: https://github.com/gentleeduck/duck-www

## What's in the repo
### App
- `apps/www` - Next.js website and docs experience for GentleDuck.

### Tooling
- `tooling/biome` - shared Biome config
- `tooling/tailwind` - shared Tailwind config
- `tooling/typescript` - shared TypeScript config
- `tooling/tsdown` - shared tsdown config
- `tooling/vitest` - shared Vitest config
- `tooling/github` - shared GitHub config package

## Getting Started
```bash
git clone https://github.com/gentleeduck/duck-www.git
cd duck-www
bun install
```

## Run locally
```bash
bun --filter @gentleduck/www dev:docs
bun --filter @gentleduck/www dev
```

## Build and Deploy
```bash
bun --filter @gentleduck/www build
bun --filter @gentleduck/www preview
bun --filter @gentleduck/www deploy
```

## Contributing
Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## License
MIT. See [`LICENSE`](./LICENSE) for details.
