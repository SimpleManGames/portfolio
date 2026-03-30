# Riley Smith — Portfolio

A personal portfolio site showcasing professional experience in software engineering and game development, including detailed project pages with image galleries.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org) 5
- [Tailwind CSS](https://tailwindcss.com) 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/            # Pages and layouts (App Router)
    experience/   # Detail pages for each role
  components/     # Reusable UI components
  data/           # Experience, project, and social link data
  type/           # TypeScript type definitions
public/
  experience/     # Images for experience detail pages
  projects/       # Images for project cards
```

## Features

- Dark theme with dot grid background
- Responsive layout with sidebar navigation on desktop
- Experience detail pages with image carousels and lightbox
- Project cards linking to external sites
- Social links with tooltips (GitHub, LinkedIn, Email, Resume)
