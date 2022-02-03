<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <!-- fields 속성 넣기 (보여주고싶은 부분만 보이게) -->
  </div>
</template>

<script>
import data from '@/data'   // import로 데이터 불러오기 

export default {
  name: 'Board',
  data() {
    return {
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
      ],
      items: data.Content
    }
  }
}
</script>