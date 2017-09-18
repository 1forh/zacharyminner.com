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
			<router-link to="/blog" class="site-header__nav-link">Blog</router-link>
			<router-link to="/projects" class="site-header__nav-link">Projects</router-link>
			<router-link to="/about" class="site-header__nav-link">About</router-link>
		</nav>
		<social-nav></social-nav>
	</header>
</template>

<script>
import Logo from '@/app/components/Logo';
import SocialNav from '@/app/components/SocialNav';

export default {
	name: 'site-header',
	components: {
		logo: Logo,
		socialNav: SocialNav
	}
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.site-header {
	@include make-container();
	display: grid;
	grid-template-columns: 50% 25% 25%;

	&__column {
		display: flex;
		align-items: center;
	}

	&__nav {
		justify-content: flex-end;
		margin-right: 50px;

		&-link {
			margin-left: 50px;
			color: $text-color;
		}
	}
}
</style>
