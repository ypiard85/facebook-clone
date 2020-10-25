import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: App },
]

const router = new VueRouter({
  routes
})

new Vue({
  store, router,
  render: h => h(App)
}).$mount('#app')
