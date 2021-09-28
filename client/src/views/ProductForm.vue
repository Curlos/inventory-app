<template>
  <div className="pageContainer">
    <form className="productFormContainer">
      <span class="formTitle" v-if="!this.$route.params.id">Add a new product</span>
      <span class="formTitle" v-if="this.$route.params.id">Edit product</span>
      <input type="text" placeholder="Name*" name="name" v-model="newProduct.name" @change="handleFormChange"/>
      <select name="category" v-model="newProduct.category" @change="handleFormChange">
        <option value="selectCapacity">Select category type</option>
        <option :key="categoryValue" :value="categoryValue" v-for="categoryValue in categoryValues">
          {{categoryValue}}
        </option>
      </select>
      <input type="number" placeholder="Price*" name="retailPrice" v-model="newProduct.retailPrice" @change="handleFormChange"/>
      <input type="text" placeholder="Color" name="color" v-model="newProduct.color" @change="handleFormChange"/>
      <select name="capacity" v-model="newProduct.capacity" @change="handleFormChange">
        <option value="selectCapacity">Select capacity (if applicable)</option>
        <option :key="capacityValue" :value="capacityValue" v-for="capacityValue in capacityValues">
          {{capacityValue}}
        </option>
      </select>
      <input type="text" placeholder="Release Year" name="releaseYear" v-model="newProduct.releaseYear" @change="handleFormChange"/>
      <textarea placeholder="Product description" name="description" v-model="newProduct.description" @change="handleFormChange"></textarea>
      <input type="text" placeholder="Image URL" name="imageURL" v-model="newProduct.imageURL" @change="handleFormChange"/>

      <button @click="handleAddProduct" class="submitButton" v-if="!this.$route.params.id">Add new product</button>
      <button @click="handleEditProduct" class="submitButton" v-if="this.$route.params.id">Edit product</button>
    </form>

    <ProductPage :product="newProduct"/>
  </div>
</template> 

<script>
import axios from 'axios'
import ProductPage from './ProductPage'

export default {
  name: 'ProductForm',
  props: {
    product: Object,
  },
  components: {
    ProductPage,
  },
  data() {
    return {
      productObj: Object,
      categoryValues: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music'],
      capacityValues: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB', '2TB'],
      API_BASE_URL: 'https://inventory-app-server-1232131.herokuapp.com/products',
      newProduct: {
        name: '',
        category: 'Select category type',
        retailPrice: '',
        releaseYear: '',
        color: '',
        capacity: 'Select capacity (if applicable)',
        description: '',
        imageURL: '',
      },
    }
  },
  methods: {
    clearFormData(data) {
      if (data) {
        console.log(data)
        this.newProduct = {
          name: '',
          category: 'Select category type',
          retailPrice: '',
          releaseYear: '',
          color: '',
          capacity: 'Select capacity (if applicable)',
          description: '',
          imageURL: '',

        }

        this.$router.push('/')
      } else {
        console.log('something went wrong')
      }
    },
    async handleAddProduct(e) {
      e.preventDefault()
      console.log('submitted')
      const data = await this.addProduct()
      this.clearFormData(data)
    },
    async handleEditProduct(e) {
      e.preventDefault()
      const id = this.$route.params.id
      const data = await this.editProduct(id)
      console.log(data)
      this.clearFormData(data)
    },
    handleFormChange(e) {
      const productKey = e.target.name
      const productValue = e.target.value
      this.newProduct[productKey] = productValue
      console.log(this.newProduct)
    },
    async addProduct() {
      if (this.newProduct.capacity === 'Select capacity (if applicable)' || this.newProduct.capacity === 'selectCapacity') {
        this.newProduct = {...this.newProduct, capacity: ''}

      } 
      if (this.newProduct.category === 'Select category type' || this.newProduct.category === 'selectCategory') {
         return false
      }
      if (this.newProduct.name === '' || this.newProduct.retailPrice === '') {
        return false
      }
      const body = {...this.newProduct}
      const res = await axios.post(this.API_BASE_URL + `/add`, body)
      const data = res.data
      return data
    },
    async fetchProductByID(id) {
      const res = await axios.get(this.API_BASE_URL + `/product/${id}`)
      console.log(res)
      const data = res.data
      return data
    },
    async editProduct(id) {
      const body = {...this.newProduct}
      console.log(this.API_BASE_URL + `/product/${id}`)
      const res = await axios.put(this.API_BASE_URL + `/product/${id}`, body)
      const data = res.data
      return data
    }
  },
  async created() {
    if (this.$route.params.id) {
      const id = this.$route.params.id
      const currProduct = await this.fetchProductByID(id)
      console.log(currProduct)
      this.newProduct = currProduct
    }
  }

}
</script>

<style scoped>
  .pageContainer {
    display: flex;
    justify-content: space-around;
  }
  .formTitle {
    font-size: 30px;
  }
  form {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 40px;
    box-sizing: border-box;
  }
  input, select, textarea {
    font-size: 20px;
    border: 2px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    margin: 15px 0px 15px 0px;
    width: 360px;
    outline: none;
  }
  select {
    width: 384px;
  }
  textarea {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    resize: vertical;
  }
  form input[type="text"]:focus, select:focus, textarea:focus {
    box-shadow: 0 0 6px #0063c5;
  }

  .submitButton {
    font-size: 18px;
    color: white;
    background-color: #0074e7;
    border: none;
    border-radius: 15px;
    padding: 15px;
    width: 384px;
    cursor: pointer;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>