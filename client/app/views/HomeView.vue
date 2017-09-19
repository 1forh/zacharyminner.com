<template>
	<div id="home" class="home">
		<section class="section">
			<h2 class="section__title">Recent Blog Posts</h2>
			<blog-post-preview
				v-for="post in blogPosts.items"
				:key="post.sys.id"
				:post="post"></blog-post-preview>
		</section>
		<hr>
		<section class="section" v-if="projects">
			<h2 class="section__title">Recent Projects</h2>
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
import BlogPostPreview from '@/app/components/BlogPostPreview';

export default {
	name: 'home-view',
	components: {
		projectPreview: ProjectPreview,
		blogPostPreview: BlogPostPreview
	},
	data () {
		return {
			projects: null,
			blogPosts: null
		}
	},
	async created () {
		this.$data.projects = await this.getProjects();
		this.$data.blogPosts = await this.getBlogPosts();
	},
	methods: {
		getProjects () {
			return store.getProjects();
		},
		getBlogPosts () {
			return store.getBlogPosts();
		}
	},
	watch: {
		'$route' : [
			'getProjects',
			'getBlogPosts'
		]
	}
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';

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
