<template>
    <div id="app">
        <h1>Menus</h1>
        <h1>{{ menu_name }}</h1>
        <h1>{{ searched_menu }}</h1>
    </div>
</template>

<script>
export default {
    name:'Menus',
    computed:{
        menu_name(){
            const id = this.$route.params.menu_id   // menus/:menu_id 값을 가져옴
            if(id=='1')
                return '아이스 아메리카노'
            else if(id=='2')
                return '카페라떼'
            else
                return ''
        },
        searched_menu(){
            const id = this.$route.query.menu_id    // query 로 받음
            if(id=='1')                             // menus?menu_id=1 
                return '아이스 아메리카노'
            else if(id=='2')
                return '카페라떼'
            else
                return ''
        }
    }
};
</script>