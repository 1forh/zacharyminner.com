import { distanceInWords } from 'date-fns'

export default {
	methods: {
		formatDate (input) {
			const today = new Date();
			const options = { addSuffix: true };
			return distanceInWords(today, input, options);
		}
	}
}
