import axios from 'axios'

export default{
    namespaced:true,
    state:()=>({
        reviews:[]
    }),
    mutations:{
        updateReviews(state, reviews){
            state.reviews = reviews
        }
    },
    getters:{
        reviewCount(state /*, getters, rootState */){
            return state.reviews.length
        }
    },
    actions:{
        getReviews({commit}){
            axios.get('/api/comments')
            .then(response=>{
                commit('updateReviews', response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}