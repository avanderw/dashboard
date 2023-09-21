<script>
	import AddRss from './AddRss.svelte';
	import Bookmarks from './Bookmarks.svelte';
	import RssViewer from './RssViewer.svelte';

	import { rssFeeds } from '$lib/stores';
</script>

<AddRss />
<div class="dashboard">
	<Bookmarks />
	{#each $rssFeeds as rssFeed}
		<RssViewer rss={rssFeed.url} title={rssFeed.title} />
	{/each}
	<RssViewer rss="https://news.ycombinator.com/rss" title="Hacker News" />
	<RssViewer rss="https://puzzling.stackexchange.com/feeds/hot" title="Puzzling Stack Exchange" />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
	}
	.dashboard {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: stretch;
		align-content: stretch;
		width: 100%;
		height: 100%;
	}
</style>
