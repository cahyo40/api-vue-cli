import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'

import daftarpengguna from './komponen/pengguna.vue'
import Tambah from './komponen/Tambah.vue'
import login from './komponen/login.vue'
import home from './komponen/home.vue'
import produk from './komponen/produk.vue'
import regis from './komponen/registrasi.vue'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSession);

const router = new VueRouter({
  routes:[
    {path :'/',name:'home',component:login},
    {path :'/pengguna',name :'pengguna',component : daftarpengguna},
    {path :'/add',name : 'Tambah',component : Tambah,},
    {path :'/login',name:'Login',component:login},
    {path :'/pengguna/produk',name:'produk',component:produk},
    {path :'/registrasi',name:regis,component:regis}
  ]
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
