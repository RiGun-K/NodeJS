import Vue from "vue";
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Menus from '@/components/Menus.vue'
import Events from '@/components/Events.vue'
import Reviews from '@/components/Reviews.vue'

// Router 설정
Vue.use(VueRouter)

// 각 Component에 따른 PATH 설정
export default new VueRouter({
    mode:'history',
    routes:[
        { path:'/', component:Home },
        { path:'/menus', component:Menus },
        { path:'/menus/:menu_id', component:Menus },    // $route.params 방식
        { path:'/events', component:Events },
        { path:'/events/:event_id', component:Events, props:true},  // props 방식
        { path:'/reviews', component:Reviews },
    ]
});