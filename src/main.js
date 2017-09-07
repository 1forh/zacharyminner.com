// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import marked from './directives/marked';
import formatDate from './directives/format-date';

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.mixin({
	methods: {
		marked,
		formatDate
	}
});

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
});
