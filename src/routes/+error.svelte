<script lang="ts">
    import { page } from "$app/stores";
    import { error } from "@sveltejs/kit";
</script>

<div class="text-center">
    <h1>{$page.status} {$page.error?.message}</h1>
    <span style="font-size:10em">🫠</span>
</div>

<style>
    .text-center {
        text-align: center;
        display: block;
        margin-inline: auto;
    }
</style>
