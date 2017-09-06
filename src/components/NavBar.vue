<template>
	<header id="navbar" class="navbar">
		<div class="navbar__column">
			<a href="/" title="Home" class="navbar__brand">
				<logo></logo>
			</a>
		</div>

		<nav class="navbar__nav navbar__column">
			<a href="#!" class="navbar__nav-link">Blog</a>
			<a href="#!" class="navbar__nav-link">Projects</a>
			<a href="#!" class="navbar__nav-link">About</a>
		</nav>
	</header>
</template>

<script>
import Logo from './Logo';

export default {
	name: 'navbar',
	components: {
		logo: Logo
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/utilities/variables';

.navbar {
	margin: 20px auto;
	width: $container-width;
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
