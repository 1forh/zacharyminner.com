<template>
	<div class="hero">
		<header class="hero__header">
			<h1 class="hero__header-title" v-once>{{ title }}</h1>
			<h2 class="hero__header-subtitle" v-once>
				<slot></slot>
			</h2>
		</header>
	</div>
</template>

<script>
export default {
	name: 'logo',
	props: [
		'title'
	]
}
</script>

<style lang="scss" scoped>
@import '../styles/utilities/variables';

.hero {
	padding: 125px 0;
	background-color: $gray-lighter;

	&__header {
		text-align: center;

		&-title {
			max-width: $container-width;
			margin: 0 auto 30px;
			font-size: 60px;
			font-weight: 100;
		}

		&-subtitle {
			max-width: 45%;
			margin: 0 auto;
			font-size: 32px;
			font-weight: 400;
		}
	}
}
</style>
