<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <!-- 각 라우터마다 링크 설정 -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/menus">Menus</router-link></li>
      <li><router-link to="/events">Events</router-link></li>
      <li><router-link to="/reviews">Reviews</router-link></li>
    </ul>
    <!-- 라우터 뷰 종료 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
