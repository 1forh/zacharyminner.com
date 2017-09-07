import marked from 'marked';

export default {
	methods: {
		marked (input) {
			return marked(input);
		}
	}
}
