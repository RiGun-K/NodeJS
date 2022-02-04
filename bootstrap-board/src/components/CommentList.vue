<template>
    <div>
        {{ contentId }}
    </div>
</template>

<script>
export default {
    name: 'CommentList',
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
    }
}
</script>