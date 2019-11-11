import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import FlamelinkPlugin from './plugins/flamelink';

import '@/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(FlamelinkPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
