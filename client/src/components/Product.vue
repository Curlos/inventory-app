<template>
  <div class="productContainer">
    <img src="getImageSrc" alt="Apple Logo" />
    {{ product.name }}
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
  computed: {
    getImageSrc() {
      return this.product.img ? this.product.img : 'https://commons.wikimedia.org/wiki/File:Apple_Computer_Logo_rainbow.svg'
    }
  }
}
</script>

<style scoped>

  .productContainer {
    display: flex;
  }
</style>