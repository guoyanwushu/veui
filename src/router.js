import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout'
import Test from './views/Test'
import Radio from './views/radio'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
