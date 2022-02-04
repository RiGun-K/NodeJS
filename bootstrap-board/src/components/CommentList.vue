<template>
    <div>
        <!-- comments에 있는 배열에서 comment_id값을 가져오기 -->
        <div :key="item.comment_id" v-for="item in comments">
            <!-- comment_id(작성글)에 해당하는 context(댓글) 가져오기 -->
            <!-- <div>{{ item.context }}</div> -->
            
            <!-- CommentListItem.vue 불러오기 -->
            <CommentListItem :commentObj="item"/>
        </div>
        <CommentCreate :contentId="contentId" :reloadComments="reloadComments"/>
    </div>
</template>

<script>
import data from '@/data'
import CommentListItem from './CommentListItem';
import CommentCreate from  './CommentCreate';

export default {
    name: "CommentList",
    // CommentListItem 가져오기 
    components: {
        CommentListItem,
        CommentCreate
    },
    // props : 부모가 자식에게 정보를 전달할때 사용 
    props: {
        // ContentDetail.vue 에서 contentId 가져오기
        contentId: Number,
    },
    data() {
        return {
            // data에 있는 댓글 데이터 가져오기 ( contentId가 같은 경우 )
            comments: data.Comment.filter(item => item.content_id === this.contentId)
        }
    },
    methods: {
        reloadComments() {
            this.comments = data.Comment.filter(item => item.content_id === this.contentId)
        }
    }
}
</script>