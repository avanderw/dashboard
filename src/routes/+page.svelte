<script>
	import AddRss from './AddRss.svelte';
	import Bookmarks from './Bookmarks.svelte';
	import RssViewer from './RssViewer.svelte';

	import { rssFeeds } from '$lib/stores';
</script>

<div class="toolbar"><AddRss /></div>
<div class="dashboard">
	<Bookmarks />
	{#each $rssFeeds as rssFeed}
		<RssViewer rss={rssFeed.url} />
	{/each}
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
	}
	.toolbar, .dashboard {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.toolbar {
		padding: 0.5rem;
		background-color: var(--primary-color-dark);
		color: var(--primary-color-light);
	}
</style>
