# Route Parity Checklist

## Required Routes

- [x] `/`
- [x] `/features`
- [x] `/pricing`
- [x] `/sign-up`
- [x] `/wave`
- [x] `/legal/terms`
- [x] `/legal/privacy`
- [x] `/legal/gdpr`
- [x] `/legal/sla`
- [x] `/blog`
- [x] `/blog/page/[n]`
- [x] `/blog/[slug]`
- [x] `/features/[slug]`
- [x] `/404`

## Validation Notes

- Use this checklist to verify Gatsby and Astro parity before removing legacy files.
- Mark each route after content, metadata, and navigation behavior are confirmed.
- Verified on 2026-02-16 via `npm run preview` with HTTP checks.
- Dynamic parity checks included `/blog/page/2`, `/blog/the-gift-of-giving`, and `/features/attendance-tracking`.
