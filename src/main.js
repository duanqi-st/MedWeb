import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import 'normalize.css';
import App from './App.vue';

Vue.use(VueSocketio, 'http://localhost:3000');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
