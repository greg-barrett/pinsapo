import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false



new Vue({
  render: h => h(App)

}).$mount('#app')
import './assets/css/reset.css'
import './assets/css/global.css'
