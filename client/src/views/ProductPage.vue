<template>
  <div className="productContainer">
    <div className="productDetails">
      <img v-bind:src="product && product.imageURL || productObj.imageURL || 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg'" alt="Apple Logo" />
      <div className="productInfo">
        <div className="productName">{{ product && product.name || productObj.name}}</div>
        <div><span class="productInfoTitle">Price:</span> ${{ product && product.retailPrice || productObj.retailPrice }}</div>
        <div><span class="productInfoTitle">Color:</span> {{ product && product.color || productObj.color }}</div>
        <div><span class="productInfoTitle">Capacity:</span> {{ product && product.capacity || productObj.capacity }}</div>
        <div><span class="productInfoTitle">Release Year:</span> {{ product && product.releaseYear || productObj.releaseYear }}</div>
        <div>{{ product && product.description || productObj.description }}</div>

        <div v-if="!product">
          <router-link :to="'/edit-product/' + productObj._id || product._id" exact>
            <button>Update info</button>
          </router-link>
          
          <button class="deleteButton" @click="handleDelete">Remove product</button>
        </div>
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
    async handleDelete() {
      const id = this.productObj._id
      const data = await this.deleteProduct(id)
      console.log(data)
      this.$router.push('/')
      return data
    },
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
  button {
    font-size: 14px;
    font-weight: bold;
    color: white;
    background-color: #0072e4;
    border: none;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    cursor: pointer;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .deleteButton {
    background-color: #e40f00;
  }
</style>