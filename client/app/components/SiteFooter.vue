<template>
	<div id="site-footer" class="site-footer">
		footer
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
}
</style>
