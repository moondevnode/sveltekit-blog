<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import { marked } from 'marked';
  import Custom from '$lib/markdown/renderer/Custom.svelte';
  import { customTokenizer } from '$lib/markdown/tokenizer/custom';
  import Admonition from '$lib/markdown/renderer/Admonition.svelte';
  import { admonitionTokenizer } from '$lib/markdown/tokenizer/admonition';

  export let data: {
    slug: string;
    post: string;
  };

  const source = data.post;
  marked.use({ extensions: [customTokenizer, admonitionTokenizer] });
  const options = marked.defaults;
</script>

<SvelteMarkdown
  {options}
  {source}
  renderers={{
    custom: Custom,
    admonition: Admonition
  }}
/>
