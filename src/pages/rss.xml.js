import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `${import.meta.env.BASE_URL}/${post.id}/`,
    })),
  });
}
