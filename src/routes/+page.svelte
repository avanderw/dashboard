<script>
	import Bookmarks from './Bookmarks.svelte';
	import RssViewer from './RssViewer.svelte';
</script>

<div class="dashboard">
	<div style="width:50%"><Bookmarks /></div>
	<div style="width:50%; height: 100vh;">
		<div style="height: 50%"><RssViewer rss="https://news.ycombinator.com/rss" title="Hacker News" /></div>
		<div style="height: 50%">
			<RssViewer
				rss="https://puzzling.stackexchange.com/feeds/hot"
				title="Puzzling Stack Exchange"
			/>
		</div>
	</div>
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
