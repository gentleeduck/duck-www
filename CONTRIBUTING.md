# Contributing to @duck-www

Thank you for contributing to GentleDuck.

## Code of Conduct

By participating in this project, you agree to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Getting Started

### 1. Fork and clone

```bash
git clone https://github.com/gentleeduck/duck-ui.git
cd duck-ui
```

### 2. Install dependencies

```bash
bun install
```

### 3. Run local development

```bash
bun --filter @gentleduck/www dev:docs
bun --filter @gentleduck/www dev
```

### 4. Build locally

```bash
bun --filter @gentleduck/www build
```

## Repository Structure

- `apps/www`: website and docs app
- `tooling/*`: shared configs for linting, typing, testing, and build tooling

## Workflow

1. Create a branch from `main`:

```bash
git checkout -b feat/your-change
```

2. Follow project standards:
- TypeScript first
- Keep changes focused and testable
- Run lint and checks before pushing

3. Use clear commit messages (Conventional Commits preferred):

```text
feat: add homepage section
fix: correct sitemap domain
docs: update setup guide
```

4. Run checks:

```bash
bun run lint
bun run check-types
bun --filter @gentleduck/www build
```

## Pull Requests

1. Push your branch:

```bash
git push origin feat/your-change
```

2. Open a PR to `main` with:
- a clear summary
- related issue links (if any)
- screenshots for UI changes

## Reporting Issues

Open issues here: https://github.com/gentleeduck/duck-ui/issues

Please include:
- reproduction steps
- expected behavior
- actual behavior
- logs or screenshots

## License

By contributing, you agree that contributions are licensed under the [MIT License](./LICENSE).
