# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** website for MBNECOM LLC, built with TypeScript and Tailwind CSS v4.

### Key commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Start prod | `npm run start` |

### Non-obvious notes

- **Next.js 16** removed the built-in `next lint` command. Linting uses ESLint 9 flat config directly (`eslint .`).
- Tailwind CSS v4 uses `@import "tailwindcss"` and `@theme` blocks in `globals.css` instead of the older `tailwind.config.js` approach.
- PostCSS config uses `@tailwindcss/postcss` plugin (not the legacy `tailwindcss` plugin).
- The contact form is client-side only (no backend API). To add real form handling, implement a server action or API route.
- The site links to the company LinkedIn at `https://www.linkedin.com/company/mbn-llc`.
