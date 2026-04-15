# Yale Healthcare Consulting Collective

Website for the Yale Healthcare Consulting Collective (YHCC) — a student-led consulting organization and Dwight Hall at Yale member group.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **react-router v7** (Data Router mode)
- **motion/react** (animations)
- **lucide-react** (icons)
- **react-slick** (hero carousel)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Deployed on Vercel with SPA rewrites configured in `vercel.json`.

## Structure

```
src/
  components/
    animations/   FadeIn, StaggerContainer, StaggerItem
    layout/       Header, Footer
  pages/          Home, About, Services, Team, Contact
  routes.tsx      react-router createBrowserRouter config
  Root.tsx        Layout shell with Header + Footer + Outlet
  main.tsx        Entry point
  index.css       Tailwind base styles
```

## Contact

[yhcc@dwighthall.org](mailto:yhcc@dwighthall.org) · [LinkedIn](https://www.linkedin.com/company/yale-healthcare-consulting-collective)
