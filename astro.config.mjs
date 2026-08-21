// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';
import { remarkMarkdownLinks } from './src/lib/remark-markdown-links.js';

const base = process.env.ASTRO_BASE || '/Blog';
const markdownLinks = [[remarkMarkdownLinks, { base }]];

// GitHub Pages: https://mmgren.github.io/Blog/
export default defineConfig({
	site: process.env.ASTRO_SITE || 'https://mmgren.github.io',
	base,
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({
			remarkPlugins: markdownLinks,
		}),
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},
});
