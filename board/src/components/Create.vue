<template>
    <div>
        <h1>게시판 글쓰기</h1>
        <b-form-input v-model="writer" placeholder="글쓴이"></b-form-input>
        <br>
        <b-form-input v-model="title" placeholder="제목"></b-form-input>
        <br>
        <b-form-textarea v-model="content" placeholder="내용"></b-form-textarea>
        <br>
        <b-button variant="primary" @click="index !== undefined ? update() : write()">{{index !== undefined ? "수정" : "작성"}}</b-button>
    </div>
</template>

<!-- $route  : 현재 url , 
     $router : 라우팅 관련 조작 객체
--> 

<script>
import data from '@/data/board'

export default {
    name: 'Create',
    data() {
        const index = this.$route.params.contentId;       // $router 가 아님
        return {
            data: data,
            index: index,
            writer: index !== undefined ? data[index].writer : "",  // index가 빈 값아니면 불러오기 
            title: index !== undefined ? data[index].title : "",
            content: index !== undefined ? data[index].content : ""
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
        },
        update() {
            data[this.index].writer = this.writer
            data[this.index].title = this.title
            data[this.index].content = this.content
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>