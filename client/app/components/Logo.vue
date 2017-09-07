<template>
	<div id="logo" class="logo">
		<svg width="167" height="20" viewBox="0 0 167 20" xmlns="http://www.w3.org/2000/svg">
			<g fill-rule="evenodd">
				<text transform="translate(-1 -7)">
					<tspan x="73" y="26">minner</tspan>
				</text>
				<text transform="translate(-1 -7)">
					<tspan x="65" y="26">-</tspan>
				</text>
				<text transform="translate(-1 -7)">
					<tspan x="14" y="26">zach</tspan>
				</text>
				<text transform="translate(-1 -7)">
					<tspan x="155.139" y="26">&gt;</tspan>
				</text>
				<text transform="translate(-1 -7)">
					<tspan x=".139" y="26">&lt;</tspan>
				</text>
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'logo'
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';

.logo {

	g {
		font-size: 24px;
		fill: $text-color;
		font-family: 'Open Sans';
	}
}
</style>
