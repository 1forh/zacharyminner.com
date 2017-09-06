const contentful = require('contentful');

const client = contentful.createClient({
	space: 'fszw82q3sv8j',
	accessToken: '6a0eb2a1b859b3eb06113e96a382213db071e3edeb947b639035fca3625be54f'
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
