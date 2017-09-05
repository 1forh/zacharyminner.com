<template>
	<main id="app" class="main">
		<router-view></router-view>
	</main>
</template>

<script>
export default {
	name: 'app'
};
</script>

<style lang="scss" scope>
@import 'styles/global';

.main {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $text-color;
}
</style>
