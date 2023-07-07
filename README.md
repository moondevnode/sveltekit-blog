# sveltekit-blog
Svelekit Blog


## Post

> [Svelte Components Using Custom Markdown Renderers - Weekly Svelte](https://www.youtube.com/watch?v=ZiEROAqobwM)
- [Custom Renderer with interactivity](https://stackblitz.com/edit/sveltejs-kit-template-default-jwtb9f)
- [Custom Renderer & Tokenizer Example](https://stackblitz.com/edit/sveltejs-kit-template-default-jz5nyu)


## Github

```sh
# goto base commit(setup sveltekit)
git checkout 6fd3f23d2d684ba7127ae822947323b6ddae4fb6

# create branch
git branch svelte-markdown

# checkout
git checkout svelte-markdown
```


## Edit

> `package.json`


## Installation

```sh
# npm install
npm i
```


## Edit

> `src/routes/[slug]/+page.svelte`

> `src/routes/[slug]/+page.ts`

> `static/test-markdown.md`

> `src/lib/markdown/renderer/Admonition.svelte`

> `src/lib/markdown/renderer/Custom.svelte`

> `src/lib/markdown/tokenizer/admonition.ts`

> `src/lib/markdown/tokenizer/custom.ts`