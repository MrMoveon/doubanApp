// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/loading'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/less/app.less'
Vue.use(VueAxios, axios)
Vue.use(Loading);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
