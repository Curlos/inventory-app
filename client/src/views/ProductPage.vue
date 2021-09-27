<template>
  <div className="productContainer">
    <div className="productDetails">
      <img v-bind:src="productObj.imageURL || product && product.imageURL || 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg'" alt="Apple Logo" />
      <div className="productInfo">
        <div className="productName">{{ product && product.name || productObj.name}}</div>
        <div><span class="productInfoTitle">Price:</span> ${{ productObj.retailPrice || product && product.retailPrice}}</div>
        <div><span class="productInfoTitle">Color:</span> {{ productObj.color || product && product.color}}</div>
        <div><span class="productInfoTitle">Capacity:</span> {{ productObj.capacity || product && product.capacity}}</div>
        <div><span class="productInfoTitle">Release Year:</span> {{ productObj.releaseYear || product && product.releaseYear}}</div>
        <div>{{ productObj.description || product && product.description}}</div>
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
    async deleteProduct(id) {
      const res = await axios.delete(this.API_BASE_URL + `/product/${id}`)
      console.log(res)
      const data = res.data
      return data
    }
  },
  async created() {
    if(this.$route.params.id) {
      const id = this.$route.params.id
      const newProduct = await this.fetchProductByID(id)
      console.log(newProduct)
      this.productObj = newProduct
    }
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
    max-width: 300px;
    text-align: center;
  }

  .productInfoTitle {
    font-weight: 600;
  }

  .productName {
    font-size: 30px;
    font-weight: 900;
  }
</style>