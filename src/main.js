import Vue from 'vue';
import VueBus from 'vue-bus';

// import VueSocketio from 'vue-socket.io';
import 'normalize.css';
import App from './App.vue';
import './plugins/element.js';

import './style.less';

Vue.use(VueBus);

// 配置socket地址
// Vue.use(VueSocketio, 'http://localhost:3000');
Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
