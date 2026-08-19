# Trimi — Portfolio Website

Personal portfolio for Trimi, a full-stack developer and app maker. Dark, glow-accented, single-page site built with React, TypeScript, Tailwind CSS, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Structure

- `src/components/` — one component per section (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Services`, `GithubSection`, `Contact`, `Footer`), plus `Reveal` (scroll-in animation wrapper) and `icons/BrandIcons` (GitHub/LinkedIn marks — not shipped in the installed `lucide-react` version).
- `src/data/` — content as data: `projects.ts`, `skills.ts`, `services.ts`. Edit these to add/change projects or skills rather than touching the components.
- `src/hooks/` — `useInView` (drives `Reveal`) and `useActiveSection` (nav-link highlighting via `IntersectionObserver`).
- `public/images/covers/` — hand-built SVG cover art for each project card, matching each project's real brand colors/logo.
- `public/images/profile.png` — hero profile photo.

## Content notes

- Project entries (`src/data/projects.ts`) link to the real GitHub repos at `github.com/lvrl3e`; only one (`featured: true`) is shown large.
- Skills (`src/data/skills.ts`) are limited to technologies actually used across those projects.
