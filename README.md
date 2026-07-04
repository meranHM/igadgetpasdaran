# iGadget Pasdaran

A localized, server-rendered landing page for آی گجت, built with Next.js App
Router, TypeScript, Tailwind CSS v4, and next-intl.

## Development

```bash
npm install
npm run dev
```

Persian is served at `/` and English at `/en`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content to replace before launch

- Store phone number and social links in `src/shared/config/site.ts`
- Address, hours, contact copy, and customer stories in `messages/fa.json` and
  `messages/en.json`
- `NEXT_PUBLIC_SITE_URL` if the production domain differs from the configured
  fallback

Customer stories, contact information, and the lightweight map panel are
deliberately labeled placeholder content. No map iframe, checkout, cart, or
payment code is included.
