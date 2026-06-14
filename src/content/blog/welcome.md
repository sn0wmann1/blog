---
title: Hello World
description: First post — setting up this Astro blog
pubDate: 2026-06-14
tags: ["meta"]
---

This blog is built with [Astro](https://astro.build), deployed via GitHub Pages.

## Why Astro?

- Zero JavaScript by default — fast
- Markdown-native — write in Obsidian, publish from CLI
- Free hosting on GitHub Pages

## Workflow

1. Write posts in Obsidian (`~/Notes/Blog/src/content/blog/`)
2. Preview with `npm run dev`
3. Push to GitHub → auto-deploys via Actions

Posts are plain markdown with frontmatter. Set `title`, `description`, `pubDate`, and optional `tags`.

```markdown
---
title: My Post
description: What it's about
pubDate: 2026-06-14
tags: ["linux", "config"]
---

Content here.
```

Check back for Linux configs, keyboard modding, and project notes.
