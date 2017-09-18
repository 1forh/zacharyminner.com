<template>
	<div class="project-preview">
		<div
			class="project-preview__thumbnail"
			v-once
			v-if="project.fields.thumbnail"
			:style="{ 'background-image': 'url(' + project.fields.thumbnail.fields.file.url + ')' }"></div>
		<div class="project-preview__content">
			<header class="project-preview__header">
				<h3 class="project-preview__header-title" v-once>{{ project.fields.title }}</h3>
				<time
					class="project-preview__header-date"
					v-once
					:datetime="project.sys.createdAt">Written {{ formatDate(project.sys.createdAt) }}</time>
			</header>
			<div class="project-preview__summary" v-once v-html="renderMarkdown(project.fields.summary)"></div>
			<div class="project-preview__actions">
				<router-link
					class="project-preview__action"
					title="Read more"
					v-once
					:to="project.fields.slug">
					Read more
				</router-link>
				<a
					class="project-preview__action project-preview__action--secondary"
					title="View on GitHub"
					v-once
					v-if="project.fields.repositoryLink"
					:href="project.fields.repositoryLink"
					target="_blank">
					View on GitHub
				</a>
			</div>
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
		'project'
	]
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.project-preview {
	margin: 100px auto 0;
	width: 60%;
	display: grid;
	grid-template-columns: 35% 65%;

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

	&__actions {
		margin-top: 10px;
		display: flex;
	}

	&__action {
		margin-right: 10px;
		padding: 6px 14px;
		font-weight: 600;
		font-size: 14px;
		border-radius: 4px;
		color: #fff;
		text-align: center;
		background-color: $accent-color;

		&--secondary {
			background-color: transparent;
			color: $accent-color;
		}
	}
}
</style>
