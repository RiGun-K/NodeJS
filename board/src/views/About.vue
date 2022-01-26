<template>
    <div>
        <h1>Welcome to {{ title }}</h1>
        <input type="text" v-model="text">
        <button type="button" @click="getData">추가</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:"리건",
            text:''
        }
    },
    methods:{
        getData() {
            alert(this.text);
        }
    }
}
</script>