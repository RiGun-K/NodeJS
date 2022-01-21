<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- localhost/8081 접속시 첫 화면 -->
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

// 첫 화면에 대한 컴포넌트 설정
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
  font-size: 16px;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #32485F;
}

h1 {
	text-align: center;
}
</style>
