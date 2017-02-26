// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import './assets/css/app.css';
import './assets/less/app.less';
// import Mint from 'mint-ui';
//import 'mint-ui/lib/style.css'
// Vue.use(Mint);
// import { Cell } from 'mint-ui';
// Vue.component(Cell.name, Cell);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
