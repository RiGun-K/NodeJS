<!-- 셋팅 화면 -->
<template>
  <div id="app">
    <product-page></product-page>
  </div>
</template>

<script>
import ProductPage from './components/ProductPage.vue'

export default {
  name: 'App',
  components: {
    ProductPage
  }
}
</script>

<style>
@import './assets/css/style.css';
</style>
