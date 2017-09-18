<template>
	<div id="blog-posts-view" class="blog-posts-view">
		<section class="section">
			<h2 class="section__title">All Blog Posts</h2>

		</section>
	</div>
</template>

<script>
export default {
	name: 'blog-post-view'
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';

.blog-posts-view {

	.section {

		&__title {
			margin-top: 50px;
			text-align: center;
			font-weight: 100;
		}
	}
}
</style>
