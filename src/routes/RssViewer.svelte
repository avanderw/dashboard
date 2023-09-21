<script lang="ts">
	import { rssFeeds } from '$lib/stores';
	import { XCircleIcon } from 'svelte-feather-icons';

	export let rss: string;
	export let title: string;

    function removeRss() {
        $rssFeeds = $rssFeeds.filter((feed) => feed.url !== rss);
    }
</script>

<button on:click={removeRss}><XCircleIcon size="18" /></button>
<iframe src="https://avanderw.co.za/rss-viewer/?rss={encodeURI(rss)}" {title} frameborder="0" />

<style>
	iframe {
		width: 100%;
		height: 100%;
	}
    button {
        border: none;
        background: none;
        cursor: pointer;
    }
</style>
