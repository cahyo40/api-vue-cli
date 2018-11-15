import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'

import daftarpengguna from './komponen/pengguna.vue'
import Tambah from './komponen/Tambah.vue'
import login from './komponen/login.vue'
import home from './komponen/home.vue'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSession);

const router = new VueRouter({
  routes:[
    {path:'/',name:'home',component:home},
    {path :'/pengguna',name :'pengguna',component : daftarpengguna},
    {path :'/add',name : 'Tambah',component : Tambah,},
    {path:'/login',name:'Login',component:login}
  ]
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
