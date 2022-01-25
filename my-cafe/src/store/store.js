import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userId:'user',
        reviews:[]
    },
    mutations:{
        updateUserId(state, newId){
            state.userId = newId;
        },
        updateReviews(state, reviews){
            state.reviews = reviews
        }
    },
    actions:{
        getReviews({commit}) {
            axios.get('/api/comments')
            .then(respose=>{
                commit('updateReviews', response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    getters:{
        reviewCount(state /*, getters */){
            return state.reviews.length
        }
    }
});