<script lang="ts">
	import { base } from '$app/paths';
	import { rssFeeds } from '$lib/stores';

	export let rss: string;
	
	let src = "https://avanderw.co.za/rss-viewer/?rss=" + encodeURI(rss);

	function removeRss() {
		$rssFeeds = $rssFeeds.filter((feed) => feed.url !== rss);
	}

	function refreshRss() {
		const random = Math.random().toString(36).substring(7);
		src = "https://avanderw.co.za/rss-viewer/?rss=" + encodeURI(rss) + "&refresh=" + random;
	}
</script>

<div>
	<button><svg><use href="{base}/feather-sprite.svg#arrow-up-circle" /></svg></button>
	<button><svg><use href="{base}/feather-sprite.svg#arrow-down-circle" /></svg></button>
	<button on:click={refreshRss}><svg><use href="{base}/feather-sprite.svg#refresh-cw" /></svg></button>
	<button on:click={removeRss} style="float:right"><svg><use href="{base}/feather-sprite.svg#x-circle" /></svg></button>
	<iframe {src} title="RSS Viewer" />
</div>

<style>
	div {
		width: 375px;
		height: 667px;
		margin: 1rem 0.5rem;
	}
	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
	}
	svg {
		width: 18px;
		height: 18px;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}
</style>
