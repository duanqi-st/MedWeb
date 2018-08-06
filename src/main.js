import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import 'normalize.css';
import App from './App.vue';

// 配置socket地址
Vue.use(VueSocketio, 'http://localhost:3000');

Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
