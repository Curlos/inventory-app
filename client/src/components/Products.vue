<template>
  <div class="productsContainer">
    <div :key="product.id" v-for="product in products">
      <Product :product="product"/>
    </div>
  </div>
</template>

<script>
import Product from './Product'

export default {
  name: 'Products',
  props: {
    products: Array,
  },
  components: {
    Product,
  }
}
</script>

<style scoped>

.productsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>