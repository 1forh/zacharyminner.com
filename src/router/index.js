import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}
];

const router = new Router({
	routes,
	mode: 'history'
});

export default router;
