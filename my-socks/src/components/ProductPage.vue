<!-- 상품 정보 페이지와 카트를 포함하는 페이지 -->
<template>
    <div id="app">
        <div class="nav-bar"></div>
        <div class="cart">
            <p>담기({{ cart.length }})</p>
        </div>
        <Product @add-to-cart="addToCart"></Product>
    </div>
</template>

<script>
import Product from './Product.vue';
// 같은 폴더에 있으므로 ./ , 또는 @/ 도 가능

export default {
    name:'ProductPage',
    components:{
        Product
    },
    data() {
        return {cart:[]}
    },
    methods:{
        addToCart(variantId){
            this.cart.push(variantId)
        }
    }
}
</script>