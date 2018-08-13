import Vue from 'vue';
import VueBus from 'vue-bus';

// import VueSocketio from 'vue-socket.io';
import 'normalize.css';
import App from './App.vue';
import './plugins/element.js';
import { Scrollbar, Upload, Select, Option } from 'element-ui';
import './style.less';

Vue.use(VueBus);
Vue.use(Scrollbar);
Vue.use(Upload);
Vue.use(Select);
Vue.use(Option);
// 配置socket地址
// Vue.use(VueSocketio, 'http://localhost:3000');
Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
