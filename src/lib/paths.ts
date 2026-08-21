/** BASE_URL always has a trailing slash, e.g. `/Blog/`. */
export function withBase(path = ''): string {
	const base = import.meta.env.BASE_URL;
	const trimmed = path.replace(/^\/+/, '');
	return trimmed ? `${base}${trimmed}` : base;
}

export function githubSourceUrl(postId: string, filePath?: string): string {
	let relative = filePath?.replace(/\\/g, '/') ?? `posts/${postId}.md`;
	const marker = '/posts/';
	const at = relative.lastIndexOf(marker);
	if (at >= 0) {
		relative = relative.slice(at + 1);
	} else {
		relative = relative.replace(/^\.\//, '');
	}
	return `https://github.com/mmgren/Blog/blob/master/${relative}`;
}
