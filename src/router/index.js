import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/components/HomeView';
import ProjectView from '@/components/ProjectView';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView
	},
	{
		path: '/blog',
		name: 'Blog',
		component: HomeView
	},
	{
		path: '/projects',
		name: 'Projects',
		component: HomeView
	},
	{
		path: '/projects/:slug',
		name: 'Project',
		component: ProjectView
	},
	{
		path: '/about',
		name: 'About',
		component: HomeView
	}
];

const router = new Router({
	routes,
	mode: 'history'
});

export default router;
