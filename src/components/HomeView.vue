<template>
	<div id="home" class="home">
		<hr>
		<section class="section" v-if="projects">
			<h2 class="section__title">Recent Projects</h2>
			<project-preview
				v-for="project in projects.items"
				:key="project.sys.id"
				:project-title="project.fields.title"
				:project-thumbnail="project.fields.thumbnail"
				:project-date="project.sys.createdAt"
				:project-slug="project.fields.slug"
				:project-summary="project.fields.summary"></project-preview>
		</section>
	</div>
</template>

<script>
import store from '../store';
import ProjectPreview from './ProjectPreview';

export default {
	name: 'home',
	components: {
		projectPreview: ProjectPreview
	},
	data () {
		return {
			projects: null
		}
	},
	async created () {
		this.$data.projects = await this.getProjects();
	},
	methods: {
		getProjects () {
			return store.getProjects();
		}
	},
	watch: {
		'$route' : 'getProjects'
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/utilities/variables';

.home {

	.section {

		&__title {
			margin-top: 50px;
			text-align: center;
			font-weight: 100;
		}
	}
}
</style>
