<template>
    <li>
        {{ todo.text }}
        <button @click="$emit('remove', todo.id)">삭제</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true  // 입력값이 채워져야 됨을 설정
        }
    }
}
</script>