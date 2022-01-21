<template>
    <div>
        <base-input-text v-model="newTodoText" placeholder="New Todo" @keydown.enter="addTodo"/>
        <ul v-if="todos.length">
            <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
        </ul>
        <p v-else>
            Nothing left in the list. Add a new todo in the input above.
        </p>
    </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1

export default {
    components: {
        BaseInputText, TodoListItem
    },
    data() {
        return {
            // 처음 input 텍스트와 리스트가 비어있음
            newTodoText: '',
            todos: []
        }
    },
    methods: {
        // input 에서 엔터키를 누르면
        addTodo() {
            const trimmedText = this.newTodoText.trim()  // trim() = 좌우 공백제거 
            if(trimmedText) {
                this.todos.push({
                    // 번호와 텍스트 지정 
                    id: nextTodoId++,
                    text: trimmedText
                })
                // 텍스트 출력
                this.newTodoText = ''
            }
        },
        removeTodo(idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove
            })
        }
    }
}
</script>