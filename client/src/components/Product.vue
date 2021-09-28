<template>
  <div class="productContainer">
    <router-link :to="'/product/' + product._id" exact>
      <img v-bind:src="product.imageURL || 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg'" alt="Apple Logo" />
      <div class="productName">{{ product.name }}</div>
      <div>${{ product.retailPrice }}</div>
      <div>{{ product.color }}</div>
      <div>{{ product.capacity }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
}
</script>

<style scoped>

  .productContainer {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    height: 300px;
    box-shadow: 0 8px 8px -4px gray;
  }

  .productContainer img {
    height: 200px;
  }

  .productName {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>