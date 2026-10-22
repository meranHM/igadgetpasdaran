<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project guide

## Scope and stack

- This repository is a localized, server-rendered landing page for iGadget
  Pasdaran.
- The application uses Next.js 16 App Router, React 19, strict TypeScript,
  `next-intl`, and Tailwind CSS v4.
- Use the Bun version declared in the `packageManager` field in `package.json`.
  Commit `bun.lock` whenever dependencies change.
- Keep Node.js installed for Next.js and the existing command-line tools.
- Persian is the default locale at `/`; English is served at `/en`.
- This is an informational site. Do not introduce checkout, cart, payment, or
  other transactional flows unless the task explicitly requires them.

## Commands

```bash
bun install
bun run dev
bun run lint
bun run typecheck
bun run build
bun run start
```

- Use `bun install --frozen-lockfile` for CI and reproducible installations.
- `bun run typecheck` runs `next typegen` before `tsc --noEmit`.
- There is currently no automated test runner. For code changes, run lint and
  typecheck at minimum. Run a production build for routing, configuration,
  dependency, or release-sensitive changes.
- For UI changes, inspect both `/` and `/en` at desktop and mobile widths. Check
  Persian RTL and English LTR behavior rather than treating one locale as
  sufficient coverage.

## Next.js and rendering

- Use the App Router under `src/app`; do not add a Pages Router.
- Route `params` are promises in this version. Await them before reading values.
- Next.js 16 uses `src/proxy.ts`; do not create `middleware.ts`.
- Keep components as Server Components by default. Add `"use client"` only at
  the smallest boundary that needs state, effects, event handlers, browser APIs,
  or client-only hooks.
- Prefer server-side `next-intl/server` translation calls. When a small client
  component needs localized copy, translate in its server wrapper and pass
  serializable strings, following `RobotCompanion`.
- Preserve static locale generation and `setRequestLocale` usage in the locale
  layout and page unless the rendering strategy is intentionally changed.
- Continue using Next.js metadata APIs and the escaped JSON-LD serializer in
  `src/shared/lib/json-ld.ts`; do not interpolate unescaped JSON into a script.

## Project structure

Application code follows a Feature-Sliced Design-style dependency direction:

```text
app -> pages -> widgets -> features -> entities -> shared
```

- Import from lower layers or within the same slice. Do not import between
  slices on the same layer. The `app` and `shared` layers have no slices and
  their segments may import each other.
- `src/app` owns Next.js routing adapters, layouts, global CSS, and metadata.
  Route adapters await and validate params, set the request locale, and render
  a page through its public API.
- The Pages layer lives in `src/_pages` to avoid Next.js Pages Router discovery,
  following the current FSD Next.js guide. Each page has its own slice, such as
  `home` or `about`, with an `index.ts` public API and a `ui` segment containing
  its widget composition and page-specific styles. Pages must not import from
  `app` or from another page slice.
- `widgets` contains complete page sections.
- `features` contains reusable user behavior and interaction logic.
- `entities` contains domain models and their UI.
- `shared` contains generic UI, configuration, and utilities with no business
  layer dependencies.
- The Processes layer is deprecated in current FSD; keep routing and global
  orchestration in `app`, and reusable interactions in `features`.
- Use the aliases in `tsconfig.json` (`@app`, `@pages`, `@widgets`, `@features`,
  `@entities`, `@shared`, and `@i18n`) instead of long relative imports.
- Use a slice's existing `index.ts` public entry point from outside that slice.
  Direct relative imports are appropriate for files within the same component
  folder.
- Follow the existing kebab-case filenames, named component exports, and
  colocated `*-styles.ts` convention.

Architecture references: [FSD layers](https://fsd.how/docs/reference/layers/),
[Next.js integration](https://fsd.how/docs/guides/tech/with-nextjs/), and
[public APIs](https://fsd.how/docs/reference/public-api/).

## Localization and content

- Routing configuration lives in `src/i18n/routing.ts`; request loading lives in
  `src/i18n/request.ts`; locale-aware navigation helpers live in
  `src/i18n/navigation.ts`.
- Put user-visible copy in both `messages/fa.json` and `messages/en.json`, and
  keep their key structures identical. Do not hardcode visible Persian or
  English copy in components.
- Use locale-aware navigation helpers for internal localized routes. Plain
  anchors are appropriate for same-page fragments, `tel:` links, and external
  URLs.
- Preserve `lang` and `dir` handling in the locale layout. Use CSS logical
  directions such as `start`, `end`, and `border-s` so layouts work in both
  directions.
- Store shared business links and contact endpoints in
  `src/shared/config/site.ts`. `NEXT_PUBLIC_SITE_URL` overrides its production
  fallback.
- Phone numbers, social links, address, hours, testimonials, and the map panel
  are explicitly placeholder content pending launch. Do not invent real
  business details or silently remove placeholder labels.

## Styling and UI

- Tailwind v4 is configured in `src/app/globals.css` with `@import
  "tailwindcss"`, `@theme`, and the custom `en` variant. Do not add a legacy
  Tailwind configuration file without a concrete need.
- Compose utility strings in colocated style objects and use
  `src/shared/lib/cn.ts` for conditional composition. Reuse shared classes from
  `src/shared/ui/styles.ts` before duplicating button or section patterns.
- Add reusable design tokens to the `@theme` block. Keep global CSS limited to
  resets, tokens, truly global behavior, keyframes, and selectors that cannot be
  expressed cleanly as utilities.
- Preserve semantic landmarks, heading order, keyboard focus visibility, the
  skip link, accessible names, and decorative SVG handling.
- Respect reduced-motion preferences for new animation. Keep client-side
  interaction progressive; the core page content and contact actions must
  remain useful without JavaScript.
- Robot companion states are coupled through `RobotPose` and
  `data-robot-pose-zone`. Update the type, labels, pose styling, and section
  markers together when adding or changing a pose.
