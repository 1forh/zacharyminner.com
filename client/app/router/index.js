import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/app/views/HomeView';
import BlogPostsView from '@/app/views/BlogPostsView';
import ProjectView from '@/app/views/ProjectView';
import ProjectsView from '@/app/views/ProjectsView';
import AboutView from '@/app/views/AboutView';

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
		component: BlogPostsView
	},
	{
		path: '/projects',
		name: 'Projects',
		component: ProjectsView
	},
	{
		path: '/projects/:slug',
		name: 'Project',
		component: ProjectView
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView
	}
];

const router = new Router({
	routes,
	mode: 'history'
});

export default router;
