import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from "vue2-google-maps";
import {routes} from './router';
import vueRouter from 'vue-router';
import store from './store/store';
import VeeValidate from 'vee-validate';

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBVMnNkL4PexSqtRdJ8cN0qxbmeI6yroKI",
    libraries: "places" // necessary for places input
  }
});

Vue.use(VeeValidate, {
  classes: true,
  delay: 0,
  events: 'input|blur',
});

Vue.use(vueRouter);
Vue.config.productionTip = false;

const router = new vueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
