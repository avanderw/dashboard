<script>
	import { base } from '$app/paths';
	import { rssFeeds } from '$lib/stores';
	import { PlusCircleIcon } from 'svelte-feather-icons';

	let url = '';

	function addRss() {
		if (url && url.length > 0)
			if (!$rssFeeds.find((feed) => feed.url === url)) {
				$rssFeeds = [...$rssFeeds, { url: url }];
                url = '';
            }
	}
</script>

<form on:submit={addRss}>
	<input type="text" placeholder="Add RSS URL" bind:value={url} />
	<button type="submit" title="Add RSS"><svg><use href="{base}/feather-sprite.svg#plus-circle" /></svg></button>
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
	svg {
		color: var(--primary-color-light);
	}
</style>
