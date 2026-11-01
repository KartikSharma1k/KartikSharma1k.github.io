# Kartik Sharma: Portfolio

Single-page, static-exported portfolio in a dark "space" theme. Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · React Three Fiber (star field) · Framer Motion · lucide-react**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npx serve out      # preview the production build
```

## Deploy to GitHub Pages (kartiksharma1k.github.io)

1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow file `.github/workflows/deploy.yml` is not committed yet (the push token lacked the `workflow` scope). Run `gh auth refresh -h github.com -s workflow`, then `git add .github/workflows/deploy.yml` and push. Alternatively run `npm run build` and publish `out/` yourself.

## Where to edit content

| What | File |
| --- | --- |
| Contact info, nav, SEO text | `data/site.ts` |
| Skills (professional vs learning) | `data/skills.ts` |
| Experience, education, achievements, metrics | `data/profile.ts` |
| Projects and case studies (each becomes `/projects/<slug>/`) | `data/projects.ts` |
| Tech icons and colours on tiles | `components/ui/Tile.tsx` |
| Resume download | `public/resume/Kartik_Sharma_Resume.pdf` |
| Social preview image | `public/og.png` (1200×630) |

Project GitHub links that are `null` render as "Repository link coming soon". Project covers are generated from each stack; add screenshots under `public/projects/<slug>/` and reference them in `data/projects.ts`.

## Structure

```
app/         layout, home page, projects/[slug] case studies
sections/    Hero, About, Skills, EdgeAI, Experience, Projects, Contact
components/  Nav, Footer, Stars/StarField, BackToTop, UI kit and Tile
data/        all portfolio content
hooks/       useGfx (WebGL / reduced-motion / low-end detection)
```

The star field is skipped on low-end devices, without WebGL, or with `prefers-reduced-motion`.
