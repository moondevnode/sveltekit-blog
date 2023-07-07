<script lang="ts">
  export let data: {
    slug: string;
    post: string;
  };
</script>

<!-- display the "post" field -->
<h1>{data.post}</h1>
