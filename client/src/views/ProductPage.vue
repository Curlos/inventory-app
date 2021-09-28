<template>
  <div className="productContainer">
    <div className="productDetails">
      <div>
        <img v-bind:src="product && product.imageURL || productObj.imageURL || 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg'" alt="Apple Logo" />
      </div>
      <div className="productInfo">
        <div v-if="product && product.name && product.name !== 'Object' || productObj.name !== 'Object' && productObj.name" className="productName">{{ product && product.name || productObj.name}}</div>
        <div v-if="product && product.retailPrice || productObj.retailPrice"><span class="productInfoTitle">Price:</span> ${{ product && product.retailPrice || productObj.retailPrice }}</div>
        <div v-if="product && product.color || productObj.color"><span class="productInfoTitle">Color:</span> {{ product && product.color || productObj.color }}</div>
        <div v-if="product && product.capacity && product.capacity !== 'Select capacity (if applicable)' && product.capacity !== 'selectCapacity' || productObj.capacity"><span class="productInfoTitle">Capacity:</span> {{ product && product.capacity || productObj.capacity }}</div>

        <div v-if="product && product.releaseYear || productObj.releaseYear"><span class="productInfoTitle">Release Year:</span> {{ product && product.releaseYear || productObj.releaseYear }}</div>

        <div v-if="product && product.description || productObj.description">{{ product && product.description || productObj.description }}</div>

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
      API_BASE_URL: 'https://inventory-app-server-1232131.herokuapp.com/products'
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
  .productDetails {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
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

  @media (max-width: 450px) {
    .productContainer img {
      max-width: 350px;
      height: auto;
    }
  }
</style>