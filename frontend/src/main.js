import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import AppHome from './components/AppHome.vue'
import Products from './components/products/Products.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        { path: '/', component: AppHome },
        { path: '/products', component: Products }
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})