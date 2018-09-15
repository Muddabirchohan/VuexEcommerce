
import Vue from 'vue'
import App from './App'
import store from './Store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
