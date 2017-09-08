import marked from 'marked';

export default {
	methods: {
		renderMarkdown (input) {
			return marked(input);
		}
	}
}
