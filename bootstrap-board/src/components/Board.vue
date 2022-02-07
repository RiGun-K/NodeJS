<template>
  <div>
    <b-table striped hover :items="items" :per-page="perPage" :current-page="currentPage" :fields="fields" @row-clicked="rowClick"></b-table>
    <!-- fields 속성 넣기 (보여주고싶은 부분만 보이게) , rowClick 속성 넣기 ( 열 클릭시 이벤트 처리 ) -->
    <b-pagination :per-page="perPage" v-model="currentPage" align="center" :total-rows="rows"></b-pagination>
    <b-button pill variant="primary" @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import data from '@/data'   // import로 데이터 불러오기 

export default {
  name: 'Board',
  data() {
    let items = data.Content.sort((a,b) => {return b.content_id - a.content_id}) // 내림차순 정렬
    items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name }})

    return {
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '등록일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        }
      ],
      items: items
    }
  },
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/free/detail/${item.content_id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/board/free/create'
      })
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>