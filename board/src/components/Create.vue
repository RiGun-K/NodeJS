<template>
    <div>
        <h1>게시판 글쓰기</h1>
        <b-form-input v-model="writer" placeholder="글쓴이"></b-form-input>
        <br>
        <b-form-input v-model="title" placeholder="제목"></b-form-input>
        <br>
        <b-form-textarea v-model="content" placeholder="내용"></b-form-textarea>
        <br>
        <b-button variant="primary" @click="write">작성</b-button>
    </div>
</template>

<script>
import data from '@/data'

export default {
    name: 'Create',
    data() {
        return {
            data: data,
            writer: "",
            title: "",
            content: ""
        }
    },
    methods: {
        write() {
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content
            })
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>