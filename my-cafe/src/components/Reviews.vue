<template>
    <div id="app">
        <h1>Reviews</h1>
        <ul>
            <li v-for="c in comments" :key="c.id">
                <p> {{ c.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Reviews',
    data(){
        return {
            comments:[]
        }
    },
    mounted(){
        axios.get('/api/comments')
        .then(response=>{
            console.log(response)
            this.comments=response.data
        })
        .catch(err=>{
            console.log(err)
        })
    }
};
</script>