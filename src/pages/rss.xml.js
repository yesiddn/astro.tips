import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("tips");
	return rss({
		title: "Astro.tips",
		description: "My fist Astro blog",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	});
}
