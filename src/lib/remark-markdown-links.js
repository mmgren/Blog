import path from 'node:path';

/**
 * Rewrite relative Markdown links so the same file works on GitHub and on the site.
 * `./how-to-write.md` stays clickable on GitHub, and becomes `/Blog/posts/how-to-write/` at build time.
 */
export function remarkMarkdownLinks({ base = '/' } = {}) {
	const baseUrl = base.endsWith('/') ? base : `${base}/`;

	return (tree, file) => {
		const filename = String(file.history?.[0] || file.path || '');
		const dir = path.posix.dirname(filename.replace(/\\/g, '/'));

		const walk = (node) => {
			if (node.type === 'link' && typeof node.url === 'string') {
				const url = node.url;
				if (/^(https?:|mailto:|#)/i.test(url)) {
					return;
				}

				const [urlPath, hash] = url.split('#');
				if (!/\.(md|mdx)$/i.test(urlPath)) {
					return;
				}

				const absolute = path.posix.normalize(path.posix.join(dir, urlPath));
				const marker = '/posts/';
				const markerAt = absolute.lastIndexOf(marker);
				const fromPosts =
					markerAt >= 0
						? absolute.slice(markerAt + marker.length)
						: path.posix.basename(urlPath);
				const slug = fromPosts.replace(/\.(md|mdx)$/i, '');
				node.url = `${baseUrl}posts/${slug}/${hash ? `#${hash}` : ''}`;
			}

			if (Array.isArray(node.children)) {
				for (const child of node.children) walk(child);
			}
		};

		walk(tree);
	};
}
