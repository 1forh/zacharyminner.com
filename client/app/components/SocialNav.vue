<template>
	<div class="social-nav">
		<a 
			class="social-nav__link"
			:href="link.url" 
			v-for="link in socialLinks"
			:key="link.url"
			target="_blank">
			<img 
				class="social-nav__link-image"
				:src="link.icon"
				:alt="link.name">
		</a>
	</div>
</template>

<script>
export default {
	name: 'social-nav',
	data() {
		return {
			socialLinks: [
				{
					url: 'mailto:1forhlol@gmail.com',
					icon: 'static/email.svg',
					name: 'Email'
				},
				{
					url: 'https://github.com/1forh',
					icon: 'static/github.svg',
					name: 'Github'
				},
				{
					url: 'https://www.linkedin.com/in/zachary-minner-877371118',
					icon: 'static/linkedin.svg',
					name: 'Linkedin'
				},
				{
					url: 'http://codepen.io/1forh',
					icon: 'static/codepen.svg',
					name: 'Codepen'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.social-nav {
	display: flex;

	&__link {
		display: flex;
		align-items: center;
		width: 25px;
		margin-right: 20px;

		&:last-child {
			margin-right: 0;
		}

		&-image {
			max-width: 100%;
			display: block;
		}
	}
}
</style>
