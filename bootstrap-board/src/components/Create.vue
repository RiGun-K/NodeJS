<template>
    <div>
        <h1>글쓰기</h1>
        <b-input v-model="subject" placeholder="제목을 입력해 주세요."></b-input>
        <br>
        <b-form-textarea v-model="context" rows="3" max-rows="6" placeholder="내용을 입력해 주세요."></b-form-textarea>
        <br>
        <!-- upload가 true면 수정, 아니면 업로드(새 글 작성) --> 
        <b-button pill variant="primary" @click="upload ? updateContent() : uploadContent()">저장</b-button>
        <b-button pill variant="primary" @click="cancel">취소</b-button>
    </div>
</template>

<script>
import data from '@/data'

export default {
    name: 'Create',
    data() {
        return {    // 글쓰기에서 게시판에 전달될 데이터(객체) 들 선언
            subject: '',
            context: '',
            userId: 1,  // 로그인 구현이 없으므로 임시로 1 지정
            created_at: '2022-02-04 15:18:03',
            updated_at: null,
            updated_Object: null,
            upload: this.$route.params.contentId > 0 ? true : false   // 수정작성이면 true 아니면 false
        }
    },
    created() {
        if(this.$route.params.contentId > 0) {  // 주소창에 contentId 값이 있다면 ( 수정시 )
            const contentId = Number(this.$route.params.contentId)  // 해당 contentId 값 불러오기
            this.updated_Object = data.Content.filter(item => item.content_id === contentId)[0] // 데이터에서 업데이트 해야될 일치한 값 가져오기
            this.subject = this.updated_Object.title;
            this.context = this.updated_Object.context;
        }
    },
    methods: {
        // 새 글 작성
        uploadContent() {
            let items = data.Content.sort((a,b) => {return b.content_id - a.content_id}) // 내림차순 정렬
            const content_id = items[0].content_id + 1  // 글 작성시 첫번째 글 번호보다 +1 증가된 게시글로 자동생성

            data.Content.push({
                content_id: content_id,
                user_id: this.userId,
                title: this.subject,
                context: this.context,
                created_at: this.created_at,
                updated_at: null
            }),
            this.$router.push({
                path: '/board/free/'
            })
        },
        // 수정 작성
        updateContent() {
            // 기존 작성된 데이터를 수정한 현재 데이터로 변경 
            this.updated_Object.title = this.subject;
            this.updated_Object.context = this.context;
            this.$router.push({
                path: '/board/free'
            })
        },
        // 취소 
        cancel() {
            this.$router.push({
                path: '/board/free/'
            })
        }

    }
}
</script>