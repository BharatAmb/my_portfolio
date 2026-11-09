# Bharat Jatav Portfolio

A ready-to-run portfolio built with Next.js App Router, JSX, Tailwind CSS v4, Motion for React and React Icons.

## Run locally

Requirements: Node.js 20.9+

```bash
npm install
npm run dev
```

Open: `http://localhost:4004`

Production:

```bash
npm run build
npm start
```

`npm start` also runs on port **4004**.

## Main routes

- `/` — portfolio home
- `/projects` — searchable, filterable project library
- `/aboutproject/[slug]` — reusable project detail page

## Add a new project later

Open `data/projects.js` and add one more object to the `projects` array.

Minimum recommended fields:

```js
{
  slug: "new-project",
  title: "New Project",
  shortTitle: "New Project",
  category: "Company Production",
  company: "Company Name",
  period: "2026",
  featured: false,
  privateProject: true,
  image: "/projects/new-project.svg",
  summary: "Short card description",
  description: "Full project explanation",
  role: "Frontend Developer",
  tech: ["React.js", "Next.js"],
  highlights: ["What you built", "What you improved"],
  challenge: "The main problem",
  solution: "How you solved it",
  impact: "Business or technical outcome",
  screenshots: ["/projects/new-project.svg"],
  liveUrl: null,
}
```

The project will automatically appear on `/projects` and its detail page will be available at:

`/aboutproject/new-project`

Set `featured: true` if you also want it on the home page.

## Replace placeholder screenshots

Put your images inside `public/projects/`, then update `image` and `screenshots` paths in `data/projects.js`.

For private company projects, do **not** add credentials or internal secrets. Screenshots should hide sensitive customer/company data.

## Replace profile image

Replace `public/profile-placeholder.svg` and keep the same filename, or update the path in `components/Hero.jsx`.

## Resume

The supplied resume is included at:

`public/resume/Bharat_Frontend_Developer.docx`

The navbar Download Resume button points to that file.

## Content data

- Personal/contact details: `data/profile.js`
- All project content: `data/projects.js`

## Performance choices

- Next.js App Router
- Next Image for image sizing/optimization
- Local placeholder assets (no runtime image service dependency)
- Motion used only on interaction/reveal components
- CSS hover transitions for simple effects
- Route loading skeletons and image skeletons
- No heavy UI framework
# my_portfolio
