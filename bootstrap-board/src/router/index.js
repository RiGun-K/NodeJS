import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import ContentDetail from '@/components/ContentDetail';
import Create from '@/components/Create';
import CommentList from '@/components/CommentList';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?', // 필수가 아니라 선택이므로 '?' 추가
      name: 'Create',
      component: Create
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'CommentList',
      component: CommentList
    }
  ]
})
