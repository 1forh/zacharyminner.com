<template>
	<div class="project-view" v-if="project">
		<header class="project-view__header">
			<h1 class="project-view__header-title" v-once>{{ project.fields.title }}</h1>
			<time
				class="project-view__header-date"
				v-once
				:datetime="project.sys.createdAt">Written {{ project.sys.createdAt }}</time>
		</header>
		<hr>
		<div class="project-view__body" v-once v-html="marked(project.fields.body)"></div>
	</div>
</template>

<script>
import store from '../store';

export default {
	name: 'project-view',
	data () {
		return {
			project: null
		}
	},
	async created () {
		this.$data.project = await this.getProject();
	},
	methods: {
		getProject () {
			return store.getProject(this.$route.params.slug);
		}
	},
	watch: {
		'$route' : 'getProject'
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/utilities/variables';

.project-view {
	margin: 100px auto;
	width: 65%;

	&__header {
		text-align: center;
		margin-bottom: 50px;

		&-title {
			margin-bottom: 5px;
			font-weight: 100;
		}
	}

	&__body {

		/deep/ img {
			display: block;
			max-width: 80%;
			margin: 50px auto;
		}

		/deep/ h2 {
			margin-top: 50px;
			font-size: 24px;
		}
	}
}
</style>
