<template>
	<div id="site-footer" class="site-footer">
		Thanks for checking everything out! ✌️️
	</div>
</template>

<script>
export default {
	name: 'site-footer'
}
</script>

<style lang="scss" scoped>
@import '../../styles/utilities/variables';
@import '../../styles/utilities/mixins';

.site-footer {
	@include make-container();
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
