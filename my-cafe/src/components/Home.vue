<template>
    <div id="app">
        <h1>Welcome {{userId}}</h1>
        <input v-model="newId" type="text"><button @click="saveUserId">Save</button><br>
        <button @click="updateReviews">Update</button>
        <h1>{{reviewCount}}</h1>
        <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{ r.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return {
            newId:''
        }
    },
    computed:{
        // namespaced 가 설정되지 않은 경우
        ...mapState({
            userId:state=>state.user.userId
        }),
        // namespaced 가 설정 된 경우 모듈명을 적는다.
        ...mapState('reviews', {
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods:{
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        saveUserId(){
            this.updateUserId(this.newId)
        },
        updateReviews(){
            this.getReviews()
        }
    }
}
</script>