<template>
	<header id="site-header" class="site-header">
		<div class="site-header__column">
			<router-link
				to="/"
				title="Home"
				class="site-header__brand">
				<logo></logo>
			</router-link>
		</div>

		<nav class="site-header__nav site-header__column">
			<router-link to="/projects" class="site-header__nav-link">Projects</router-link>
			<router-link to="/about" class="site-header__nav-link">About</router-link>
		</nav>
	</header>
</template>

<script>
import Logo from '@/app/components/Logo';

export default {
	name: 'site-header',
	components: {
		logo: Logo
	}
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.site-header {
	@include make-container();
	display: grid;
	grid-template-columns: 50% 50%;

	&__column {
		display: flex;
		align-items: center;
	}

	&__nav {
		justify-content: flex-end;

		&-link {
			margin-left: 40px;
			color: $text-color;
		}
	}
}
</style>
