<template>
  <div id="app">
    <Header />  <!-- Header 파일을 불러다 씀 -->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- components에 Header를 찾아서 Header를 import해서 Header.vue를 띄운다 -->

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
</style>
