import { browser } from "$app/environment";
import { writable } from "svelte/store";

const feeds: Feed[] = [];
export const rssFeeds = writable(feeds);

if (browser) {
    const storedFeeds = localStorage.getItem("rssFeeds");
    if (storedFeeds) {
        rssFeeds.set(JSON.parse(storedFeeds));
    }
    rssFeeds.subscribe((value) => {
        localStorage.setItem("rssFeeds", JSON.stringify(value));
    });
}
