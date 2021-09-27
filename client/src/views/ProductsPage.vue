<template>
  <div>
    <div class="searchAndAdd">
      <div>
        <input type="text"/>
        <i class="fas fa-search"></i>
      </div>
      <router-link to="/add-product">
        <button>Add a product</button>
      </router-link>
    </div>
    <Products :products="products"/>
    
  </div>
</template>

<script>
import Products from '../components/Products'
import axios from 'axios'

export default {
  name: 'ProductsPage',
  components: {
    Products,
  },
  data() {
    return {
      products: [],
      API_BASE_URL: 'http://localhost:8888/products'
    }
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get(this.API_BASE_URL)
      console.log(res)
      console.log(res.data)
      const data = res.data
      return data
    },
    async fetchProductByID(id) {
      const res = await axios.get(this.API_BASE_URL + `/product/${id}`)
      console.log(res)
      const data = res.data
      return data
    }
  },
  async created() {
    this.products = await this.fetchProducts()
  },
}
</script>

<style scoped>

.searchAndAdd {
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }

  .searchAndAdd input[type="text"] {
    padding: 10px;
    border: 2px solid lightgray;
    border-right: none;
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    outline: none;
    width: 300px;
  }

  .searchAndAdd button {
    color: white;
    background-color: #0077ED;
    border: none;
    border-radius: 20px;
    padding: 10px;
  }
  .searchAndAdd button:hover {
    background-color: #969ea7;
    cursor: pointer;
  }

  i {
    color: black;
    padding: 8px 10px 11px 10px;
    border: 2px solid lightgray;
    border-left: none;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
</style>