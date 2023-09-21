<script lang="ts">
	import { browser } from '$app/environment';
	import { rssFeeds } from '$lib/stores';
	import { XCircleIcon } from 'svelte-feather-icons';

	export let rss: string;
	export let title: string;

	function removeRss() {
		$rssFeeds = $rssFeeds.filter((feed) => feed.url !== rss);
	}

	if (browser) {
		window.addEventListener('message', (event) => {
			let message = event.data;
			console.log(message.data);
		}, false);
	}
</script>

<div>
	<button on:click={removeRss}><XCircleIcon size="18" /></button>
	<iframe
		src="https://avanderw.co.za/rss-viewer/?rss={encodeURI(rss)}"
		{title}
		frameborder="0"
		width="100%"
		height="100%"
	/>
</div>

<style>
    div {
        width: 375px;
        height: 667px;
    }
	button {
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
