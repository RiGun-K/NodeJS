import Vue from 'vue'
import App from './App.vue'
// router 선언
import router from './router/router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router, // router 추가
  store:store,
  render: h => h(App),
}).$mount('#app')
