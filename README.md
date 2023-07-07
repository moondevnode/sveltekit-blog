## Post

> [Sveltekit: Setting up a markdown-based blog](https://zhifez-lee.medium.com/sveltekit-setting-up-a-markdown-based-blog-9b3fe266bf76)

> [Github](https://github.com/zhifez/sveltekit-markdown-blog)


## Github

```sh
# goto base commit(setup sveltekit)
git checkout 6fd3f23d2d684ba7127ae822947323b6ddae4fb6

# create branch
git branch marked
```

## Edit

> `src/routes/[slug]/+page.ts`

> `src/routes/[slug]/+page.svelte`

```sh
# watch
> yarn dev --open

yarn run v1.22.19
warning ..\package.json: No license field
$ vite dev --open

Forced re-optimization of dependencies

  VITE v4.4.0  ready in 1833 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help


# check
http://localhost:5173/custom-blog-post-slug
```