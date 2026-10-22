# iGadget Pasdaran

A localized, server-rendered landing page for آی گجت, built with Next.js App
Router, TypeScript, Tailwind CSS v4, and next-intl.

## Requirements

- Node.js 20.9 or newer
- [Bun](https://bun.com/docs/installation), using the version declared in the
  `packageManager` field in `package.json`

Bun manages dependencies and runs package scripts. Next.js and the existing
command-line tools continue to use Node.js.

## Development

```bash
bun install
bun run dev
```

Persian is served at `/` and English at `/en`.

## Checks

```bash
bun run lint
bun run typecheck
bun run build
```

The typecheck command generates Next.js route types before checking TypeScript.

## Production

```bash
bun run build
bun run start
```

## Dependencies and lockfile

Use `bun add package-name` to add a dependency, `bun add --dev package-name` for a
development dependency, and `bun remove package-name` to remove one. Commit
`package.json` and `bun.lock` together whenever dependencies change.

For CI and reproducible installations, use:

```bash
bun install --frozen-lockfile
```

This installs the locked dependencies and fails if dependency changes require
updating `bun.lock`.

## Content to replace before launch

- Store phone number and social links in `src/shared/config/site.ts`
- Address, hours, contact copy, and customer stories in `messages/fa.json` and
  `messages/en.json`
- `NEXT_PUBLIC_SITE_URL` if the production domain differs from the configured
  fallback

Customer stories, contact information, and the lightweight map panel are
deliberately labeled placeholder content. No map iframe, checkout, cart, or
payment code is included.
