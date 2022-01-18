<!-- 상품 정보 페이지 -->
<template>
    <div class="product">
        <div class="product-image">
            <img :src="image" />
        </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
                <li v-for="(detail, i) in details" :key="i">{{ detail }}</li>
            </ul>
            <div class="color-box"
                v-for="(variant, index) in variants"
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)"
                >
            </div>
            <button v-on:click="addToCart"
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }">
            Add to cart
            </button>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            product: '양말 팝니다',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: require('@/assets/images/socks_green.jpg'),
                    variantQuantity: 10
                },
                {
                    variantId: 2233,
                    variantColor: 'blue',
                    variantImage: require('@/assets/images/socks_blue.jpg'),
                    variantQuantity: 10
                }
            ],
        }
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if(this.premium) {
                return "Free"
            }
                return 2.99
            }
    }
};
</script>
