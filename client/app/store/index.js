import env from '@/env';

const contentful = require('contentful');

const client = contentful.createClient({
	space: env.CONTENTFUL_SPACE_ID,
	accessToken: env.CONTENTFUL_ACCESS_TOKEN
});

const storage = {
	debug: false,
	async getProjects() {
		const options = {
			order: '-sys.createdAt',
			content_type: 'project'
		};

		try {
			const entries = await client.getEntries(options);
			return entries;
		} catch (error) {
			console.error('Error getting projects: ', error);
		}
	},
	async getProject(slug) {
		const options = {
			'fields.slug': `projects/${slug}`,
			content_type: 'project'
		};

		try {
			const entries = await client.getEntries(options);
			return entries.items[0];
		} catch (error) {
			console.error('Error getting project: ', error);
		}
	},
	async getBlogPosts() {
		const options = {
			order: '-sys.createdAt',
			content_type: 'blogPost'
		};

		try {
			const entries = await client.getEntries(options);
			return entries;
		} catch (error) {
			console.error('Error getting project: ', error);
		}
	},
};

export default storage;
