import { news } from "$lib/news";

export function load() {
    return {
        summaries: news.map((post) => ({
            slug: post.slug,
            title: post.title,
        })),
    };
}
