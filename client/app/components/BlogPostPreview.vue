<template>
	<div class="blog-post-preview">
		<div class="blog-post-preview__content">
			<header class="blog-post-preview__header">
				<h3 class="blog-post-preview__header-title" v-once>{{ post.fields.title }}</h3>
				<time
					class="blog-post-preview__header-date"
					v-once
					:datetime="post.sys.createdAt">Written {{ formatDate(post.sys.createdAt) }}</time>
			</header>
			<div class="blog-post-preview__summary" v-once v-html="renderMarkdown(post.fields.summary)"></div>
			<div class="blog-post-preview__actions">
				<router-link
					class="blog-post-preview__action"
					title="Read more"
					v-once
					:to="post.fields.slug">
					Read more
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/app/store';
import mixins from '@/app/mixins';

export default {
	name: 'blog-post-preview',
	mixins,
	props: [
		'post'
	]
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.blog-post-preview {
	margin: 100px auto 0;
	width: 40%;

	&:first-child {
		margin-top: 60px;
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
