# duck-www

The main website and monorepo for the gentleduck organization — UI components, docs, and related tooling.

## Documentation
- Docs app: `apps/www`
- GitHub: https://github.com/gentleeduck/duck-www

## Workspace Matrix

### Apps

| Path | Package | Role | Status |
| --- | --- | --- | --- |
| `apps/www` | `@gentleduck/docs` | Public docs site | Active |

### Packages

| Path | Package | Role | Status |
| --- | --- | --- | --- |
| `packages/ui` | `@gentleduck/ui` | UI component library | Active |

### Tooling Packages

| Path | Package | Role | Status |
| --- | --- | --- | --- |
| `tooling/biome` | `@gentleduck/biome-config` | Shared Biome config | Internal |
| `tooling/github` | `@gentleduck/github` | GitHub/project automation support | Internal |
| `tooling/tailwind` | `@gentleduck/tailwind-config` | Shared Tailwind config | Internal |
| `tooling/tsdown` | `@gentleduck/tsdown-config` | Shared `tsdown` config | Internal |
| `tooling/typescript` | `@gentleduck/typescript-config` | Shared TypeScript config | Internal |
| `tooling/vitest` | `@gentleduck/vitest-config` | Shared Vitest config | Internal |
| `tooling/bash` | `bash` | Shell utilities and misc scripts | Internal |

## Getting Started
```bash
git clone https://github.com/gentleeduck/duck-www.git
cd duck-www
bun install
```

## Run a Single App
```bash
bun --filter @gentleduck/docs dev
```

## Common Workspace Commands
```bash
bun run dev          # run all workspace dev tasks
bun run build        # build all packages/apps
bun run test         # run tests across workspaces
bun run check        # biome checks
bun run check-types  # TypeScript type checks
```

## Contributing
We welcome contributions. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## License
MIT. See [`LICENSE`](./LICENSE) for more information.
