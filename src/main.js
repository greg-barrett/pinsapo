import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueTypedJs)


const router = new VueRouter({
  routes: Routes,
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
});

export const bus= new Vue();

new Vue({
  render: h => h(App),
  router:router

}).$mount('#app')
import './assets/css/reset.css'
import './assets/css/global.css'
import './assets/css/hamburger.css'
import './assets/css/animate.css'
