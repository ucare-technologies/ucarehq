# Gatsby Baseline Notes

## Baseline Snapshot

- Date captured: 2026-02-16
- Framework baseline: Gatsby 5 (`gatsby`, page queries, template createPages)
- Existing output directories observed: `public/`, `dist/`
- Existing redirects file: `static/_redirects` (mirrored in `public/_redirects`)
- Existing static assets: `static/`, `content/assets/`

## Environment Variables Required

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_HOST` (`preview.contentful.com` for preview, `cdn.contentful.com` for production)

## Build Verification Constraints

- Node.js tooling is now available in this environment (`node v24.13.1`, `npm 11.8.0`).
- Astro verification was executed on 2026-02-16:
  - `npm run build` completed successfully.
  - `npm run preview` route/status checks passed for required routes, including expected 404 behavior.
