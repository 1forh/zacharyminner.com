<template>
	<div class="project-preview">
		<div
			class="project-preview__thumbnail"
			:style="{ 'background-image': 'url(' + projectThumbnail.fields.file.url + ')' }"></div>
		<div class="project-preview__content">
			<header class="project-preview__header">
				<h3 class="project-preview__header-title">{{ projectTitle }}</h3>
				<time class="project-preview__header-date" :datetime="projectDate">Written {{ projectDate }}</time>
			</header>
			<div class="project-preview__summary" v-html="marked(projectSummary)"></div>
			<a
				class="project-preview__slug"
				:href="projectSlug"
				title="Read more">Read more</a>
		</div>
	</div>
</template>

<script>
import store from '../store';

export default {
	name: 'project-preview',
	props: [
		'projectTitle',
		'projectThumbnail',
		'projectDate',
		'projectSlug',
		'projectSummary'
	]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/utilities/variables';

.project-preview {
	margin: 100px auto 0;
	width: 40%;
	display: grid;
	grid-template-columns: 40% 60%;

	&:first-child {
		margin-top: 60px;
	}

	&__thumbnail {
		height: 225px;
		margin-right: 20px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	&__header {

		&-title {
			font-size: 24px;
		}

		&-date {
			color: $gray-light;
			font-size: 14px;
		}
	}

	&__summary {

		/* `/deep/` is needed because these styles are scoped and v-html is used in the template */
		/* Notes at bottom of page: https://vue-loader.vuejs.org/en/features/scoped-css.html */
		/deep/ p {
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}

	&__slug {
		font-weight: 600;
	}
}
</style>
