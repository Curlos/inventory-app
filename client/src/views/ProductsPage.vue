<template>
  <div>
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
    }
  },
  async created() {
    this.products = await this.fetchProducts()
  },
}
</script>

<style scoped>
</style>