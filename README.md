# Michael Y Portfolio

A clean personal portfolio for research projects, apps, chess analysis, and useful experiments.

## Deploy

Deploy the folder as a static Vercel project. `vercel.json` routes `/projects/:slug` back to `index.html`, so project detail URLs work on any connected Vercel domain.

## Customize

Project cards and detail routes are defined in `index.html` and `script.js`. External project links are wired only when there is a verified public destination, and outbound links open in a new tab with `rel="noreferrer"`.
