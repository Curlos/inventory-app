<template>
  <div>
    <div class="searchAndAdd">
      <div>
        <input type="text" v-model="searchText" @change="handleSearchChange"/>
        <i class="fas fa-search" @click="handleSearchChange"></i>
      </div>
      <router-link to="/add-product" exact>
        <button>Add a product</button>
      </router-link>
    </div>
    <Products :products="this.filteredProducts"/>
    
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
      filteredProducts: [],
      searchText: '',
      API_BASE_URL: 'http://localhost:8888/products'
    }
  },
  methods: {
    handleSearchChange() {
      const newFilteredProducts = this.products.filter((product) => {
        for (let key of Object.keys(product)) {
          console.log(product[key])
          if (typeof product[key] === 'number') {
            if (product[key] === (Number(this.searchText))) {
              return true
            }
          } else if (typeof product[key] === 'string') {
            if (product[key].toLowerCase().includes(this.searchText.toLowerCase())) {
              return true
            }
          }
        }

        return false
      })

      this.filteredProducts = newFilteredProducts

      console.log(newFilteredProducts)
      
    },
    filterByCategory() {
      if (this.$route.params.category) {
        const categoryType = this.$route.params.category
        const newFilteredProducts = this.products.filter((product) => product.category.toLowerCase() === categoryType.toLowerCase())
        this.filteredProducts = newFilteredProducts
      } else {
        this.filteredProducts = this.products
      }
    },
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
  watch: {
    $route() {
      console.log(this.$route.params)
      this.filterByCategory()
    }
  },
  async created() {
    const newProducts = await this.fetchProducts()
    this.products = newProducts

    if (this.$route.params.category) {
      this.filterByCategory()
    } else {
      this.filteredProducts = [...this.products]
    }
  },
}
</script>

<style scoped>

.searchAndAdd {
    display: flex;
    justify-content: center;
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
    margin-left: 20px;
  }
  .searchAndAdd button:hover {
    background-color: #0059b3;
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

  @media (max-width: 450px) {
    .searchAndAdd input[type="text"] {
      max-width: 150px;
    }
  }
</style>