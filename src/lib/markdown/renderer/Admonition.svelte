<!-- https://squidfunk.github.io/mkdocs-material/reference/admonitions/ -->
<script>
  export let text;
  const types = [
    'note',
    'abstract',
    'info',
    'tip',
    'success',
    'question',
    'warning',
    'failure',
    'danger',
    'bug',
    'example',
    'quote'
  ];
  // note	pen
  // abstract	clipboard
  // info	circle-info
  // tip	thumbs-up
  // success	check
  // question	seal-question
  // warning	triangle-exclamation
  // failure	xmark
  // danger	bolt
  // bug	bug
  // example	palette
  // quote	quote-left
  const typesObj = {
    note: {
      border: 'border border-blue-900',
      title: 'bg-blue-300 text-blue-950',
      icon: 'fa-solid fa-square-pen text-blue-500 text-xl',
      content: 'bg-blue-50 text-blue-950'
    },
    abstract: {
      border: 'border border-secondary-900',
      title: 'bg-secondary-300 text-secondary-900',
      icon: 'fa-solid fa-clipboard text-xl',
      content: 'bg-secondary-50 text-secondary-900'
    },
    info: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-circle-info text-xl',
      content: ''
    },
    tip: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-thumbs-up text-xl',
      content: ''
    },
    success: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-seal-question text-xl',
      content: ''
    },
    question: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-triangle-exclamation text-xl',
      content: ''
    },
    warning: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-triangle-exclamation text-xl',
      content: ''
    },
    failure: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-xmark text-xl',
      content: ''
    },
    danger: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-bolt text-xl',
      content: ''
    },
    bug: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-tbug text-xl',
      content: ''
    },
    example: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-palette text-xl',
      content: ''
    },
    quote: {
      border: 'border border-secondary-900',
      title: 'bg-primary-500 text-primary-900',
      icon: 'fa-solid fa-quote-left text-xl',
      content: ''
    }
  };
  let texts = text.split(' test ');
  let header = texts[0].replace(/ {2,}/g, ' ');
  let headers = header.split(' ');
  let type = headers[0].toLocaleLowerCase();
  let title = headers.slice(1).join(' ');
  if (!types.includes(type)) {
    type = 'note';
    title = headers.join(' ');
  }
</script>

<div class="p-6">
  <div class="admonition note {typesObj[type].border}">
    <p class="admonition-title {typesObj[type].title} p-2">
      <i class={typesObj[type].icon} />
      {type.toUpperCase()}
      {title}
    </p>
    <p class="admonition-content {typesObj[type].content} p-2">
      {#each texts[1].split('  ') as p}
        {p}<br />
      {/each}
    </p>
  </div>
</div>

<!-- <div class="p-6">
  <div class="admonition note border border-secondary-900">
    <p class="admonition-title bg-primary-500 text-primary-900 p-2">
      <i class="fa-solid fa-triangle-exclamation text-xl" />
      {type.toUpperCase()}
      {title}
    </p>
    <p class="admonition-content bg-primary-100 text-primary-900 p-2">
      {#each texts[1].split('  ') as p}
        {p}<br />
      {/each}
    </p>
  </div>
</div> -->

<style>
  .admonition {
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
  }

  .admonition-title {
    border-radius: 10px 10px 0px 0px / 10px 10px 0px 0px;
  }

  .admonition-content {
    /* background-color: rgb(0, 255, 255); */
    border-radius: 0px 0px 10px 10px / 0px 0px 10px 10px;
  }
</style>
