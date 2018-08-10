import Vue from 'vue';
// import VueSocketio from 'vue-socket.io';
import 'normalize.css';
import Icon from 'vue-svg-icon/Icon.vue';
import App from './App.vue';

// 配置socket地址
// Vue.use(VueSocketio, 'http://localhost:3000');
Vue.component('icon', Icon);
Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
