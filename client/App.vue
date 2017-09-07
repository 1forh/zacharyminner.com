<template>
	<div id="app" class="app">
		<navbar></navbar>
		<main class="app-main">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import NavBar from './app/components/NavBar';

export default {
	name: 'app',
	components: {
		navbar: NavBar
	}
};
</script>

<style lang="scss" scope>
@import 'styles/global';
</style>
