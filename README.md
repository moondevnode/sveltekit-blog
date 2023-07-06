# sveltekit-blog
Svelekit Blog

# Installation

```bash
# Create Github Remote Repository
> github -u moondevnode -n sveltekit-blog -d "Svelekit Blog"

# Git Clone(Remote to Local)
> git clone https://github.com/moondevnode/sveltekit-blog.git

> cd sveltekit-blog

# Create Svelte Project
> pnpm create svelte .

◇  Where should we create your project?
│    (hit Enter to use current directory)
│
◇  Directory not empty. Continue?
│  Yes
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting

# npm install
> npm i

# check in browser
> yarn dev --open

Forced re-optimization of dependencies

  VITE v4.4.0  ready in 1578 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Git config

```bash
git config user.name "<__NAME__>"
git config user.email "<__EMAIL__>"
git config url."https://<__TOKEN__>@github.com/moondevnode".insteadOf "https://github.com/moondevnode"
git remote set-url origin https://moondevnode@github.com/moondevnode/sveltekit-blog.git
```

## Install Modules

```sh
# setup base format(lint, prettier, sevelte.config.js, ...)
pnpm run format

# npm install
pnpm i open-props lucide-svelte @fontsource/manrope @fontsource/jetbrains-mono
```

## Edit

### Change Favicon
> [Favicon](https://fav.farm/)

> `/src/app.html`

### Set Config(Blog title/description/url)

> `/src/lib/config.ts`

### Set Layout

> `/src/routes/+layout.svelte`

> `/src/routes/header.svelte`

> `/src/routes/footer.svelte`

> `/src/app.css`


## Set Markdown(mdsvex)

> [mdsvex](https://mdsvex.pngwn.io/docs)

```sh
npm i -D mdsvex
```

> `/svelte.config.js`

> `/src/posts/first-post.md`

> `/src/posts/second-post.md`

> `/src/routes/api/posts/+server.ts`


```sh
# check
localhost:5173/api/posts
```

> `/src/routes/[slug]/+page.svelte`

> `/src/routes/[slug]/+page.ts`

```sh
# check
localhost:5173/first-post

localhost:5173/second-post
```


## Set Code Highlighter(Shiki)

> [shiki](https://github.com/shikijs/shiki)

> [SHIKI-TWOSLASH](https://shikijs.github.io/twoslash/)

### Install shiki

```sh
pnpm i shiki
```

### Edit

> `/svelte.config.js`

> `/src/posts/counter.svelte`

> `/src/posts/second-post.md`