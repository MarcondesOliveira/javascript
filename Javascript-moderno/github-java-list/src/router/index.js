import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PullRequests from '@/components/PullRequests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pull-requests',
      name: 'Pull Requests',
      component: PullRequests
    },
  ]
})
