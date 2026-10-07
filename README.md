# Duarte's Portfolio

Welcome to my personal developer portfolio! This web page showcases my journey, projects, and the technologies I enjoy working with. It’s built with performance, clarity, and clean design in mind.


### 🚀 Tech Stack

I used my preferred tech stack, which is fast, efficient and familiar:

- Vite 
- React 
- TypeScript 
- Chakra UI – Accessible and responsive component library for sleek interfaces 


### ✍️ Writing a blog post

Posts are Markdown files in `frontend/portfolio/src/content/blog/`. The file name becomes the URL, so `my-post.md` is served at `/blog/my-post`.

```markdown
---
title: My post
date: 2026-10-07
summary: One or two sentences shown in the post list.
tags: [LLMs, Agents]
draft: false
---

The post, in plain Markdown. Headings, lists, links, quotes, tables and code blocks all work.

![A diagram](/images/blog/my-post/diagram.png)
*A caption, written in italics right under the image.*
```

- Put images in `frontend/portfolio/public/images/blog/<post-name>/` and link them from `/images/blog/...`.
- `draft: true` keeps a post visible in `npm run dev` but out of the published site.
- Edit projects, courses, books and the About page in `frontend/portfolio/src/data/site.ts`.

### 🚢 Deploying

Every push to `main` builds the site and publishes it to the `gh-pages` branch (`.github/workflows/deploy.yml`). The base path is taken from the repository name, so renaming the repository moves the site with it.

### 📈 Analytics

Visits are counted with [GoatCounter](https://www.goatcounter.com), which needs no cookies or consent banner. The dashboard is at https://caldasdcardoso.goatcounter.com, and the site code is set in `frontend/portfolio/src/lib/analytics.ts`.
