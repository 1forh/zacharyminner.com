<template>
	<div id="projects-view" class="projects-view">
		<section class="section" v-if="projects">
			<h2 class="section__title">All Projects</h2>
			<project-preview
				v-for="project in projects.items"
				:key="project.sys.id"
				:project="project"></project-preview>
		</section>
	</div>
</template>

<script>
import store from '@/app/store';
import ProjectPreview from '@/app/components/ProjectPreview';

export default {
	name: 'projects-view',
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
@import '../../styles/utilities/variables';

.projects-view {

	.section {

		&__title {
			margin-top: 50px;
			text-align: center;
			font-weight: 100;
		}
	}
}
</style>
