<template>
   <div>
       <h1>게시판</h1>
       <table>
        <tr>
            <td>글쓴이</td>
            <td>제목</td>
            <td>내용</td>
        </tr>
        <tr :key="index" v-for="(value,index) in data" @click="detail(index)">    
            <td>{{ value.writer }}</td>
            <td>{{ value.title }}</td>
            <td>{{ value.content }}</td>
        </tr>
       </table>
       <b-button variant="primary" @click="write">글쓰기</b-button>
   </div> 
</template>

<script>
import data from '@/data/board'   // data의 index.js의 배열을 불러오기 위해서 먼저 선언

export default {
    name: 'Read',           // 이름 선언
    data() {            
        return {
            data: data      // 리턴할 데이터 선언
        }
    },
    methods: {
        write() {
            this.$router.push({     // URL 이동
                path: 'create'
            })
        },
        detail(index) {
            this.$router.push({     
                name: 'Detail',     // params로 넘겨줄때는 name으로 작성해야함 
                params: {
                    contentId: index    // 0번부터 차례대로 
                }
            })
        }
    }
}
</script>