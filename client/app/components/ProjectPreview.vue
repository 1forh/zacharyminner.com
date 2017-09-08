<template>
	<div class="project-preview">
		<div
			class="project-preview__thumbnail"
			v-once
			:style="{ 'background-image': 'url(' + projectThumbnail.fields.file.url + ')' }"></div>
		<div class="project-preview__content">
			<header class="project-preview__header">
				<h3 class="project-preview__header-title" v-once>{{ projectTitle }}</h3>
				<time
					class="project-preview__header-date"
					v-once
					:datetime="projectDate">Written {{ formatDate(projectDate) }}</time>
			</header>
			<div class="project-preview__summary" v-once v-html="marked(projectSummary)"></div>
			<router-link
				class="project-preview__slug"
				title="Read more"
				v-once
				:to="projectSlug">Read more</router-link>
		</div>
	</div>
</template>

<script>
import store from '@/app/store';
import mixins from '@/app/mixins';

export default {
	name: 'project-preview',
	mixins,
	props: [
		'projectTitle',
		'projectThumbnail',
		'projectDate',
		'projectSlug',
		'projectSummary'
	]
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.project-preview {
	margin: 100px auto 0;
	width: 50%;
	display: grid;
	grid-template-columns: 30% 70%;

	&:first-child {
		margin-top: 60px;
	}

	&__thumbnail {
		height: 190px;
		margin-right: 20px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 2px;
	}

	&__header {

		&-title {
			font-size: 24px;
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
