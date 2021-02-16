import Vue from 'vue'
import './plugins/axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import CheckOut from './components/CheckOut.vue'
import CheckIn from './components/CheckIn.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.prototype.$libraryAPIBaseUrl = 'https://vjg52bx06f.execute-api.us-west-1.amazonaws.com/Prod'
//Vue.prototype.$libraryAPIBaseUrl = 'http://localhost:3000'

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
