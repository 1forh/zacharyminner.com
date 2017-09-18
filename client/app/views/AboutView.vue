<template>
	<div id="about-view" class="about-view">
		<header class="about-view__header">
			<h1 class="about-view__header-title">About</h1>
		</header>
		<p>I spend my days writing JavaScript and PHP to build websites and web applications for the awesome, award-winning SKYCATCHFIRE.</p>
		<p>In my free time, I like to contribute to open-source projects, browse CSS Tricks, rewatch Mr. Robot episodes, and teach myself even more about the web and programming.</p>
		<p>You can get in touch with me via email or check out GitHub, LinkedIn, or CodePen to learn more about me.</p>
	</div>
</template>

<script>
export default {
	name: 'about-view'
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.about-view {
	width: 50%;
	margin: 0 auto;

	&__header {
		text-align: center;
		margin: 50px 0;

		&-title {
			margin-bottom: 5px;
			font-weight: 100;
		}
	}
}
</style>
