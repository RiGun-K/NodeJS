import Vue from 'vue'
import App from './App.vue'
// router 선언
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  router, // router 추가
  render: h => h(App),
}).$mount('#app')
