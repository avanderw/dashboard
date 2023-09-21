<script>
	import { rssFeeds } from '$lib/stores';
	import { PlusCircleIcon } from 'svelte-feather-icons';

	let url = '';
	let title = '';

	function addRss() {
		if (url && url.length > 0 && title && title.length > 0)
			if (!$rssFeeds.find((feed) => feed.url === url)) {
				$rssFeeds = [...$rssFeeds, { url: url, title: title }];
                url = '';
                title = '';
            }
	}
</script>

<form on:submit={addRss}>
	<input type="text" placeholder="RSS URL" bind:value={url} />
	<input type="text" placeholder="RSS Title" bind:value={title} />
	<button type="submit" title="Add RSS"><PlusCircleIcon size="18" /></button>
</form>

<style>
	form {
		display: flex;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
