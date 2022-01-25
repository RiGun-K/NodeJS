import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import reviews from './modules/reviews'

Vue.user(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        reviews
    }
})