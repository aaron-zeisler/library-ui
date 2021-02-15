import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import CheckOut from './components/CheckOut.vue'
import CheckIn from './components/CheckIn.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/check-out', component: CheckOut },
    { path: '/check-in', component: CheckIn },
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
