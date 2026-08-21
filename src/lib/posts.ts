import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts(): Promise<Post[]> {
	const posts = await getCollection('posts', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function uniqueTags(posts: Post[]): string[] {
	return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
		a.localeCompare(b, 'zh-CN'),
	);
}

export function postsByTag(posts: Post[], tag: string): Post[] {
	return posts.filter((post) => post.data.tags.includes(tag));
}
