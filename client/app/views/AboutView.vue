<template>
	<div id="about" class="about">
		<h1>About</h1>
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

.about {
	@include make-container();
}
</style>
