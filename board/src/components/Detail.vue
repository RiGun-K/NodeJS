<template>
    <div>
        <h1>Detail Page</h1>
        <br>
        <div>{{ data.writer }}</div>
        <div>{{ data.title }}</div>
        <div>{{ data.content }}</div>  
        <br>
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="primary" @click="deleteData">삭제</b-button>
    </div>
</template>

<script>
import data from '@/data'       // 1) data 불러오기

export default {
    name: 'Detail',
    data() {
        const index = this.$route.params.contentId      // 2) 넘어온 index 정의 (contentId)
        return {
            data: data[index],                           // 3) data 배열에 index 넣어주기
            index: index
        }
    },
    methods: {
        deleteData() {
            data.splice(this.index, 1)                  // index 삭제하기 ( 글 삭제 )
            this.$router.push({
                path: '/'
            })
        },
        updateData() {
            this.$router.push({
                name: "Create",
                params: {
                    contentId: this.index               // index => this.index 로 수정  
                }
            })
        }
    }
}
</script>