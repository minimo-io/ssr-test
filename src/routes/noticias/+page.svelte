<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<ul>
    {#each data.summaries as { slug, title }}
        <li><a href="/noticias/{slug}">{title}</a></li>
    {/each}
</ul>
