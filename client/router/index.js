import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Impress from '../views/Impress'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/impress',
      component: Impress
    }
  ]
})
