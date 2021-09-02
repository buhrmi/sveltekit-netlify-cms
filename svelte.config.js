import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-netlify'

const config = {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			pages: ['*'],
		},
	},
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)]
};

export default config;