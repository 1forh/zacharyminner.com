import env from './env';

const contentful = require('contentful');

const client = contentful.createClient({
	space: env.CONTENTFUL_SPACE_ID,
	accessToken: env.CONTENTFUL_ACCESS_TOKEN
});

const storage = {
	debug: false,
	state: {
		projects: {},
		project: {}
	},
	async getProjects() {
		const options = {
			order: 'sys.createdAt',
			content_type: 'project'
		};

		storage.state.projects = await client.getEntries(options);
	},
	async getProject(id) {
		const options = {
			'sys.id': id
		};

		// getEntries is used instead of getEntry to benefit from link resolution
		storage.state.project = await client.getEntries(options)[0];
	}
};

export default storage;
