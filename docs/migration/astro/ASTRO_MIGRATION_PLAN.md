# Gatsby to Astro Migration Plan (Codex-Executable)

## Goal

Migrate `ucarehq.com` from Gatsby 5 to Astro while preserving route behavior, Contentful-driven content, SEO/meta output, redirects, and interactive UX.

## Source Files to Replace

- `gatsby-config.ts`
- `gatsby-node.ts`
- `gatsby-browser.js`
- `src/pages/**/*.tsx` (Gatsby page-query pages)
- `src/templates/post.tsx`
- `src/templates/posts.tsx`
- `src/templates/feature.tsx`
- `src/gatsby/create-pages/create-blog.ts`
- `src/gatsby/create-pages/create-features.ts`
- `src/gatsby-types.d.ts`

## Route Parity Requirements

- `/`
- `/features`
- `/pricing`
- `/sign-up`
- `/wave`
- `/legal/terms`
- `/legal/privacy`
- `/legal/gdpr`
- `/legal/sla`
- `/blog`
- `/blog/page/[n]`
- `/blog/[slug]`
- `/features/[slug]`
- `/404`

## Execution Rules for Codex

1. Work in small PR-sized commits, one phase at a time.
2. Keep build green at every phase.
3. Do not remove Gatsby until Astro parity is verified.
4. Keep React components unless conversion is required.
5. Preserve existing SCSS module behavior.

## Phase 0: Baseline and Safety Net

- [x] Create `docs/migration/route-parity-checklist.md` with all required routes.
- [x] Capture current Gatsby build artifacts and note baseline behavior.
- [x] Confirm environment variables needed by Contentful and signup APIs.

### Done when

- Route checklist exists and baseline build works.

## Phase 1: Astro Scaffold

- [x] Install Astro and integrations for React + Sass.
- [x] Add `astro.config.mjs` with `site: "https://ucarehq.com"`.
- [x] Add Astro scripts in `package.json` (`dev`, `build`, `preview`).
- [x] Keep Gatsby scripts temporarily under `gatsby:*` aliases (removed in Phase 8 cleanup).

### Done when

- `npm run dev` boots Astro shell successfully.

## Phase 2: Shared Layout, Head, and Global Styles

- [x] Create Astro base layout (replacement for `src/html.tsx` + `HeadTags` usage).
- [x] Move global style loading from `gatsby-browser.js` into Astro layout.
- [x] Port shared metadata logic from `src/components/head-tags.tsx`.
- [x] Ensure `index.scss` and shared SCSS imports still compile.

### Done when

- Astro page renders with correct title/description and global styles.

## Phase 3: Contentful Data Layer

- [x] Create `src/lib/contentful/client.ts` and query modules.
- [x] Port GraphQL queries from Gatsby pages/templates to reusable fetchers.
- [x] Add markdown-to-HTML transform handling for fields currently using `childMarkdownRemark.html`.

### Done when

- Astro can fetch page data for `/`, `/pricing`, `/features`, `/sign-up`, `/wave`, legal pages, and blog data.

## Phase 4: Static Page Migration

- [x] Create Astro routes for static pages:
  - `src/pages/index.astro`
  - `src/pages/features.astro`
  - `src/pages/pricing.astro`
  - `src/pages/sign-up.astro`
  - `src/pages/wave/index.astro`
  - `src/pages/legal/terms.astro`
  - `src/pages/legal/privacy.astro`
  - `src/pages/legal/gdpr.astro`
  - `src/pages/legal/sla.astro`
  - `src/pages/404.astro`
- [x] Reuse existing React components via Astro islands where needed.

### Done when

- All static routes render Contentful content correctly.

## Phase 5: Dynamic Routes and Pagination

- [x] Implement `src/pages/blog/[slug].astro`.
- [x] Implement `src/pages/blog/index.astro`.
- [x] Implement `src/pages/blog/page/[page].astro`.
- [x] Implement `src/pages/features/[slug].astro`.
- [x] Recreate logic from:
  - `src/gatsby/create-pages/create-blog.ts`
  - `src/gatsby/create-pages/create-features.ts`

### Done when

- Dynamic routes and pagination match Gatsby behavior.

## Phase 6: Gatsby API Replacements

- [x] Replace `Link` imports from `gatsby` with standard links or shared wrapper.
- [x] Replace `navigate` usage in `src/utils/handleLinkClick.tsx`.
- [x] Replace `gatsby-plugin-image` usage with Astro-compatible approach.
- [x] Keep hydration only for interactive components:
  - `src/components/layout.tsx`
  - `src/components/sign-up/sign-up-form.tsx`
  - `src/components/pricing/edition-select.tsx`
  - `src/components/fade-in.tsx`
  - `src/components/wave/wave-video.tsx`

### Done when

- No runtime dependency on `gatsby` or `gatsby-plugin-image` remains in migrated routes.

## Phase 7: Redirects, Static Assets, and Hosting

- [x] Preserve redirects from `static/_redirects`.
- [x] Preserve robots and static assets from `static/` and `content/assets/`.
- [x] Replace manifest behavior previously from `gatsby-plugin-manifest`.
- [x] Validate hosting config currently tied to `static.json`.

### Done when

- Redirects and static assets work in Astro build output.

## Phase 8: Cleanup

- [x] Remove Gatsby-only files/config.
- [x] Remove Gatsby packages from `package.json`.
- [x] Remove generated Gatsby type file `src/gatsby-types.d.ts`.
- [x] Update `tsconfig.json` includes for Astro.

## Verification Constraint

- Verification now runs in this environment with Node.js `v24.13.1` and npm `11.8.0`.
- `npm run build` passes on Astro and generates all expected static routes.
- `npm run preview` route checks confirm required 200/404 behavior.

### Done when

- Project builds and runs only on Astro toolchain.

## Validation Checklist

- [x] All required routes return 200/404 as expected.
- [x] SEO tags (title/description/OG/twitter) match prior behavior.
- [ ] Signup flow works (`src/components/sign-up/api.ts`) - API wiring and endpoint reachability verified; full browser submit flow still requires manual QA.
- [ ] Embedded widgets still work (`use-ucare-embed` script usage) - script loaders and bundles verified; runtime widget behavior still requires manual browser QA.
- [x] No broken internal navigation.
- [x] Build passes without Gatsby dependencies.

## Final Acceptance Criteria

- Astro is the only site framework in the repo.
- Contentful content parity is confirmed on all route types.
- Redirects and metadata parity are confirmed.
- Interactive components are hydrated intentionally and perform well.
