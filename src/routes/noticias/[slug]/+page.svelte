<script lang="ts">
    import type { PageServerData } from "./$types";
    import { page } from "$app/stores";
    export let data: PageServerData;
</script>

{$page.url.pathname}
<h1>{data.post.title}</h1>
<p>{@html data.post.content}</p>
