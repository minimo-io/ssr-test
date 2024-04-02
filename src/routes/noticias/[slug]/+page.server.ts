import { error } from "@sveltejs/kit";
import { news } from "$lib/news.js";

export function load({ params }) {
    const post = news.find((post) => post.slug == params.slug);
    if (!post) throw error(404);
    return {
        post,
    };
}
