import Vue from 'vue'
import Router from 'vue-router'

import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create/:contentId?',        // ?를 넣어서 파라미터를 받는다. (/create 보여짐)
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    }
  ]
})
