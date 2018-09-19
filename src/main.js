import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 };

}

});

new Vue({
  render: h => h(App),
  router:router

}).$mount('#app')
import './assets/css/reset.css'
import './assets/css/global.css'
import './assets/css/hamburger.css'
