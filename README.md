# blog

Astro blog deployed to [sn0wmann1.github.io/blog/](https://sn0wmann1.github.io/blog/)

## structure

```
src/
├── content.config.ts    # content collections config (v6 loader API)
├── content/blog/        # markdown posts
├── layouts/             # page layouts
├── pages/
│   ├── index.astro      # blog listing
│   ├── [...slug].astro  # individual posts (rest param)
│   └── rss.xml.js       # RSS feed
└── styles/              # global CSS
```

## post format

frontmatter:
- `title` (req) — post title
- `description` (req) — short summary
- `pubDate` (req) — ISO date
- `updatedDate` (opt) — revision date
- `tags` (opt) — string array

```markdown
---
title: My Post
description: What it's about
pubDate: 2026-06-14
tags: ["linux", "config"]
---

content here.
```

## publishing

```
~/scripts/publish-blog.sh "post: title"
```

or manually:

```
cd ~/Notes/Blog
git add -A && git commit -m "post: title"
git push origin main
```

GH Actions auto-deploys to Pages.

## dev

```
npm run dev      # local preview at localhost:4321
npm run build    # static build to dist/
npm run preview  # preview built site
```

## config

- `astro.config.mjs` — site URL, base path (`/blog`), integrations
- `src/content.config.ts` — collection schemas + loaders (v6 `glob` API)
- `.github/workflows/deploy.yml` — Pages deploy

## notes

- Astro v6: content collections use `post.id` (not `post.slug`), `render()` import from `astro:content`
- Base path `/blog` means all routes prefixed: `src/pages/index.astro` serves at `/blog/`
- Build output in `dist/` — uploaded by Actions to Pages
