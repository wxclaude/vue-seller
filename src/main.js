// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import vueResource from 'vue-resource';
Vue.use(vueResource);
router.push('/goods');
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
