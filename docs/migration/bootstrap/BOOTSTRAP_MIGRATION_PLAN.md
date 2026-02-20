# Bootstrap v4 to v5.3.8 Upgrade Plan for `ucarehq.com`

## Summary

- Goal: upgrade from Bootstrap `4.6.2` to latest (`5.3.8`) with no UX regressions.
- Approach: phased migration (dependency update, mechanical class renames, form markup refactor, responsive QA).
- Highest-risk areas in this repo: v4 form patterns, directional utility classes, and large-screen layout changes.

## Current-State Findings (Repo-Specific)

- Bootstrap import and theme override are in `src/pages/index.scss:21` and `src/pages/index.scss:28`.
- v4-only form patterns:
  - `form-row` in `src/components/sign-up/sign-up-form.tsx:116`
  - `custom-control*` in `src/components/sign-up/agree-field.tsx:16` and `src/components/pricing/terms-select.tsx:17`
  - `input-group-prepend/append` and `sr-only` in `src/components/sign-up/tenant-field.tsx:27`
  - Matching selectors in `src/common/_form.scss:63`
- v4 utility classes in templates:
  - `ml-*` and `mr-*` (example `src/components/header-links.tsx:33`)
  - `text-left` (example `src/components/faq.tsx:26`)
  - `pl-xl-5` (example `src/components/wave/features.tsx:49`)
- Component classes that change behavior in v5:
  - `badge badge-*` in `src/components/badge.tsx:6`
  - `rounded-lg` in `src/components/wave/features.tsx:51`
  - `embed-responsive` helper usage in `src/components/wave/wave-video.tsx:14` and `src/pages/index.scss:95`
- No evidence in `src` of Bootstrap JS plugin data attributes (`data-toggle`, `data-target`) or direct jQuery imports.

## Main Issues to Consider

- Breakpoints and containers:
  - `xxl` breakpoint is added at `1400px`, and `.container` widens there.
  - Existing `sm` to `xl` breakpoints remain, but large desktop visuals can shift.
- Gutters and grid:
  - Grid gutter system uses `rem` values; `form-row` is removed.
  - Form spacing may change unless replaced with explicit `row` + `g-*`.
- Utility renames (RTL-aware):
  - `ml-*` to `ms-*`, `mr-*` to `me-*`, `pl-*` to `ps-*`, `pr-*` to `pe-*`
  - `text-left/right` to `text-start/end`
- Forms:
  - `custom-control*` removed, replaced by `form-check*`
  - `sr-only` replaced by `visually-hidden`
- Input groups:
  - `input-group-prepend/append` removed; `input-group-text` should be direct children of `.input-group`
- Component helpers:
  - Badge variants move from `badge-*` usage to `text-bg-*` style
  - `rounded-lg` no longer exists
  - `embed-responsive` is replaced by `ratio`

## Implementation Plan (Decision-Complete)

### 1) Dependency update and baseline

- Change Bootstrap dependency in `package.json` to `^5.3.8`.
- Refresh lockfile and remove stale v4 transitive dependencies if present.
- Keep existing SCSS import in `src/pages/index.scss` initially to reduce blast radius.
- Capture baseline screenshots for key routes: `/`, `/features`, `/pricing`, `/sign-up`, `/wave`, `/blog`, `/legal/*`.

### 2) Mechanical class migration

- Replace utility classes across JSX/Astro:
  - `ml-` to `ms-`
  - `mr-` to `me-`
  - `pl-` to `ps-`
  - `pr-` to `pe-`
  - `text-left` to `text-start`
  - `sr-only` to `visually-hidden`
- Replace `rounded-lg` with `rounded-3` (default).

### 3) Form and input markup migration (highest risk)

- In `src/components/sign-up/sign-up-form.tsx`, replace `form-row` with `row g-2` (or `g-3` after visual check).
- In `src/components/sign-up/agree-field.tsx`, migrate checkbox markup to `form-check`.
- In `src/components/pricing/terms-select.tsx`, migrate radios to `form-check form-check-inline`.
- In `src/components/sign-up/tenant-field.tsx`, remove prepend/append wrappers and keep `input-group-text` as direct siblings.
- Update selectors in `src/common/_form.scss` to match new input-group structure.

### 4) Component conformance

- Update `src/components/badge.tsx` from `badge badge-${type}` to `badge text-bg-${type}`.
- Migrate wave video wrapper to `ratio ratio-16x9` and remove now-redundant custom embed helpers in `src/pages/index.scss`.
- Remove obsolete decorative class usage like `btn-default` in `src/components/blogs/posts.tsx:70` if it has no styling purpose.

### 5) Breakpoint and spacing stabilization

- Validate at widths: `375`, `576`, `768`, `992`, `1200`, `1400`, `1600`.
- Focus checks on sign-up, pricing controls, wave feature rows, and blog pagination components.
- If wider `xxl` container is undesirable, override `$container-max-widths` to preserve prior desktop density.

### 6) Verification and rollout

- Run build and preview route smoke tests in CI/Netlify.
- Run manual QA for sign-up form states, pricing term toggles, and keyboard/focus behavior.
- Merge only after responsive and visual diff sign-off on critical routes.

## Public API / Interface / Type Changes

- No backend API changes expected.
- Internal UI interface changes:
  - `Badge` output class contract changes in `src/components/badge.tsx`.
  - Checkbox/radio/input-group markup contract changes in sign-up and pricing components.
  - Template utility class vocabulary changes from left/right to start/end classes.

## Test Cases and Acceptance Criteria

- Build succeeds with Bootstrap `5.3.8`.
- No broken styling in:
  - Sign-up form controls and validation states
  - Pricing term radio controls
  - Badge display in pricing components
- Responsive checks pass at `375`, `576`, `768`, `992`, `1200`, `1400`, and `1600`.
- `visually-hidden` replacements preserve screen-reader text behavior.
- No layout overflow/regression on `/`, `/features`, `/pricing`, `/sign-up`, `/wave`, `/blog`, and one blog detail page.

## Assumptions and Defaults

- Target version is Bootstrap `5.3.8` (latest as of 2026-02-20).
- Upgrade is in-place and incremental (no dual-run v4/v5).
- No Bootstrap JS plugins are currently used in `src`.
- `rounded-lg` replacement default is `rounded-3`.

## References

- <https://registry.npmjs.org/bootstrap>
- <https://getbootstrap.com/docs/5.3/migration/>
- <https://getbootstrap.com/docs/5.3/layout/breakpoints/>
- <https://getbootstrap.com/docs/5.3/helpers/ratio/>
