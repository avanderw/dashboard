<script lang="ts">
    export let rss:string;
    export let title:string;
</script>
<iframe src="https://avanderw.co.za/rss-viewer/?rss={encodeURI(rss)}" title="{title}" frameborder=0></iframe>
<style>
    iframe {
        width: 100%;
        height: 100%;
    }
</style>