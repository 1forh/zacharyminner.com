<template>
	<div id="app" class="app">
		<site-header></site-header>
		<main class="app-main">
			<router-view></router-view>
		</main>
		<site-footer></site-footer>
	</div>
</template>

<script>
import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';

export default {
	name: 'app',
	components: {
		siteHeader: SiteHeader,
		siteFooter: SiteFooter
	}
};
</script>

<style lang="scss" scope>
@import 'styles/global';

.app {
	height: 100vh;
	display: grid;
	grid-template-rows: $site-header-height auto $site-footer-height;

	.app-main {
		padding-bottom: 50px;
	}
}
</style>
