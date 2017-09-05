<template>
	<div id="home" class="home">
		<h1>Yo</h1>

		<div v-for="project in shared.state.projects.items">
			<h2>{{ project.fields.title }}</h2>
			<div v-html="marked(project.fields.summary)"></div>
		</div>
	</div>
</template>

<script>
import store from '../store';

export default {
	name: 'home',
	data () {
		return {
			shared: store
		}
	},
	created() {
		store.getProjects();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {

}
</style>
