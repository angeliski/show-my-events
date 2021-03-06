import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import '@fortawesome/fontawesome-free/css/all.css';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue2-animate/dist/vue2-animate.min.css';
// import 'animate.css/animate.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
