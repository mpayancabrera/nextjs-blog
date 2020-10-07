---
title: "The evolution of this blog"
date: "2020-10-07"
author: "Manuel Payán Cabrera"
---

This post describes the different steps to integrate the current example blog with Strapi and the proccess to deploy it on Vercel.

Which is Strapi?. From Strapi documentation:
> Strapi is a flexible, open-source Headless CMS that gives developers the freedom to choose their favorite tools and frameworks while also allowing editors to easily manage and distribute their content. By making the admin panel and API extensible through a plugin system, Strapi enables the world's largest companies to accelerate content delivery while building beautiful digital experiences.
>

### Next.js as SSG (static sites generator)

Next.js is a React framework that supports pre-rendering. Instead of having the browser render everything from scratch, Next.js can serve pre-rendered HTML in two different ways.

With **Server-side Rendering (SSR)**, Next.js pre-renders the page into HTML on the server on every request. TTFB (Time to first byte) is slower, but your data is always up-to-date.

With **Static Generation (SSG)**, Next.js pre-renders the page into HTML on the server ahead of each request, such as at build time. The HTML can be globally cached by a CDN and served instantly.

Static Generation is more performant, but because pre-rendering happens ahead of time, the data could become stale at request time.

To create a new project with next you can run the following command:

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/basics-final"
```

I have made some changes over the default template, I switched to Typescript and added Styled-components for managing styles.

Here, you can follow the steps to convert your blog into typescript: 
[Next.js with Typescript](https://nextjs.org/learn/excel/typescript)

### Strapi as headless CMS

