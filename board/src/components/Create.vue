<template>
    <div>
        <input v-model="writer" placeholder="글쓴이">
        <input v-model="title" placeholder="글쓴이">
        <textarea v-model="content" placeholder="내용"/>
    </div>
</template>

<script>
import data from '@/data'

export default {
    name: 'Create',
    data() {
        return {
            data: data,
            writer: "",
            title: "",
            content: ""
        }
    }
}
</script>