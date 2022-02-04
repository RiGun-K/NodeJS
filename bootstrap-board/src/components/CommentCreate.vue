<template>
    <div class="comment-create">
        <b-input-group :prepend="name" class="mt-3">
        <b-form-textarea
            id="textarea"
            v-model="context"
            :placeholder="isSubComment ? '덧글에 덧글을 달아주세요~!' : '코멘트를 달아주세요~!'"
            rows="3"
            max-rows="6">
        </b-form-textarea>
        <b-input-group-append>
            <b-button variant="primary" @click="isSubComment ? createSubComment() : createComment()">작성하기</b-button>
        </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import data from "@/data";

export default {
    name: "CommentCreate",
    props: {
        contentId: Number,
        reloadComments: Function,
        reloadSubComments: Function,
        subCommentToggle: Function,
        isSubComment: Boolean,
        commentId: Number,
    },
    data() {
        return {
            name: '김리건',     // 작성자 이름 ( 원래는 사용자마다 변경되어야 함 ! )
            context: "",
        }
    },
    methods: {
        createComment() {
            // data.comment 배열의 객체 가져오기 
            // 이후 data.Comment에 데이터 전달하기 
            data.Comment.push({
                comment_id: data.Comment[data.Comment.length -1].comment_id + 1,
                user_id: 1,
                content_id: this.contentId,
                context: this.context,
                created_at: '2022-02-04 17:11:42',
                updated_at: null
            });
            // push 끝나면 함수호출 및 빈 문자열 출력
            this.reloadComments();
            this.context = "";
        },
        createSubComment() {
            data.SubComment.push({
                subcomment_id: data.SubComment[data.SubComment.length -1].subcomment_id + 1,
                user_id: 1,
                comment_id: this.commentId,
                context: this.context,
                created_at: '2022-02-04 17:11:42',
                updated_at: null
            });
            // 작성 완료시 input 닫기 
            this.subCommentToggle();
            this.reloadSubComments();
            this.context = "";
        }
    }
}
</script>

<style scoped>
.comment-create {
  display: flex;
  margin-bottom: 1em;
}
</style>