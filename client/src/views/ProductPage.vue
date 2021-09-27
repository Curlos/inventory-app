<template>
  <div className="productContainer">
    <div className="productDetails">
      <img v-bind:src="productObj.imageURL || 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg'" alt="Apple Logo" />
      <div className="productInfo">
        <div className="productName">{{ productObj.name}}</div>
        <div>${{ productObj.retailPrice}}</div>
        <div>{{ productObj.color}}</div>
        <div>{{ productObj.capacity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductPage',
  props: {
    product: Object,
  },
  data() {
    return {
      productObj: Object,
      API_BASE_URL: 'http://localhost:8888/products'
    }
  },
  methods: {
    async fetchProductByID(id) {
      const res = await axios.get(this.API_BASE_URL + `/product/${id}`)
      console.log(res)
      const data = res.data
      return data
    },
  },
  async created() {
    const id = this.$route.params.id
    const newProduct = await this.fetchProductByID(id)
    console.log(newProduct)
    this.productObj = newProduct
  }
}
</script>

<style scoped>
  .productContainer {

    display: flex;
    justify-content: center;
    height: 100vh;
  }
  .productContainer img {
    height: 450px;
    border-radius: 10px;
  }
  .productDetails {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    font-size: 20px;
  }

  .productName {
    font-size: 23px;
    font-weight: 900;
  }
</style>