import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminHome from "../components/AdminHome";
import Login from "../components/Login";
import Register from "../components/Register";
import GuestPersonal from "../components/GuestPersonal";
import AdminPersonal from "../components/AdminPersonal";
import BusinessPersonal from "../components/BusinessPersonal";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/adminHome',
      name:'AdminHome',
      component: AdminHome
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/GuestPersonal',
      name: 'GuestPersonal',
      component: GuestPersonal
    },
    {
      path:'/AdminPersonal',
      name:'AdminPersonal',
      component: AdminPersonal
    },
    {
      path:'/BusinessPersonal',
      name:'BusinessPersonal',
      component: BusinessPersonal
    }
  ]
})
