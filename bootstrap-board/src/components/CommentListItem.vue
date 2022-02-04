<template>
    <div>
        <div class="comment-list-item">
            <div class="comment-list-item-name">
                <div>{{name}}</div>
                <div>{{commentObj.created_at}}</div>
            </div>
            <div class="comment-list-item-context">{{commentObj.context}}</div>
            <div class="comment-list-item-button">
                <b-button pill variant="primary">수정</b-button>
                <b-button pill variant="primary">삭제</b-button>
                <b-button pill variant="primary" @click="subCommentToggle">댓글 달기</b-button>
            </div>
        </div> 
        <!-- 대댓글 작성시에만 Vue 출력 , SubComment 면 실행 아니면 그냥 Comment임 대댓글 함수들 실행하기 -->
        <template v-if="subCommentCreateToggle">
            <CommentCreate :isSubComment="true" :commentId="commentObj.comment_id" :reloadSubComments="reloadSubComments" :subCommentToggle="subCommentToggle"/>
        </template>
        <!-- 대댓글이 있다면 -->
        <template v-if="subCommentList.length > 0">
            <div class="comment-list-item-subcomment-list"
            :key="item.subcomment_id"
            v-for="item in subCommentList"
            >
            <div class="comment-list-item-name">
                <div>{{item.user_name}}</div>
                <div>{{item.created_at}}</div>
            </div>
            <div class="comment-list-item-context">{{item.context}}</div>
            <div class="comment-list-item-button">
                <b-button pill variant="primary">수정</b-button>
                <b-button pill variant="primary">삭제</b-button>
            </div>
            </div>
        </template> 
    </div>
</template>

<script>
import data from '@/data'; 
import CommentCreate from './CommentCreate'

export default {
    name: 'CommentListItem',
    props: {
        commentObj: Object, 
    },
    components: {
        CommentCreate,
    },
    data() {
        return {
            name: data.User.filter(
                item => item.user_id === this.commentObj.user_id)[0].name,
            // 한 댓글에 달린 대댓글 목록 가져오기 
            subCommentList: data.SubComment.filter(
                item => item.comment_id === this.commentObj.comment_id
            // 가져온 객체에 map 함수를 활용하여 username 속성 추가     
            ).map(subCommentItem => ({
                ...subCommentItem,
                user_name: data.User.filter(
                item => item.user_id === subCommentItem.user_id)[0].name
            })
            ),
            // 대댓글 작성 박스 ( 안 누르면 안보이게 )
            subCommentCreateToggle: false
        }
    },
    methods: {
        subCommentToggle() {
            this.subCommentCreateToggle = !this.subCommentCreateToggle;
        },
        reloadSubComments() {
            this.subCommentList = data.SubComment.filter(item => item.comment_id === this.commentObj.comment_id
            ).map(subCommentItem => ({
                ...subCommentItem,
                user_name: data.User.filter(
                    item => item.user_id === subCommentItem.user_id
                )[0].name
            }));
        }
    }
}
</script>

<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 10em;
}
</style>