# Kevin Marks — Personal Website

Source for [kevin-portfolio-delta-eight.vercel.app](https://kevin-portfolio-delta-eight.vercel.app/): my projects, experience, and résumé.

Built with Next.js 15 (pages router), TypeScript, Material UI 6, and Framer Motion. Deployed on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

| Path | What |
| --- | --- |
| `data/` | Site content: projects, case studies, experience, skills, links |
| `src/theme.ts` | MUI theme (colors, type scale, component overrides) |
| `components/ui/` | Shared building blocks (`Section`, `SurfaceCard`, `Reveal`, `PageHead`, `TagList`) |
| `components/layout/` | Navbar and footer |
| `src/pages/` | Routes: `/`, `/projects`, `/projects/[id]`, `/experience` |
| `resume/resume.html` | Résumé source, rendered to `public/Kevin-Marks-Resume.pdf` |

## Updating the résumé

Edit `resume/resume.html` (keep `data/experience.ts` in sync), then regenerate the PDF from PowerShell in the repo root:

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$PWD\public\Kevin-Marks-Resume.pdf" "file:///$PWD\resume\resume.html"
```
