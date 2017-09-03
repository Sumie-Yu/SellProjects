import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';

Vue.use(VueRouter);
// Vue.config.productionTip = false;

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  // components: {App}
  render: h => h(App)
}); */

let app = Vue.extend(App);

let router = new VueRouter();

router.map({
/* '/goods': {
    component: goods
  } */
  path: '/goods',
    components: goods
});

router.start(app, '#app');
