import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  mode: 'history',
  hashbang: false,
  history: true,
  routes: [
    {

      path: '/home', component: require('../components/Home.vue')

    },

    {

      path: '/about', component: require('../components/About.vue')

    },

    {
      path:'*',redirect:'/home'

    }


  ]
})
