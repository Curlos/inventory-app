<template>
  <form className="productFormContainer" @submit="handleFormSubmit">
    <span class="formTitle">Add a new product</span>
    <input type="text" placeholder="Name*" name="name" v-model="newProduct.name" @change="handleFormChange"/>
    <select name="category" selected="newProduct.category" @change="handleFormChange">
      <option value="selectCategory">Select category type</option>
      <option value="Mac">Mac</option>
      <option value="iPad">iPad</option>
      <option value="iPhone">iPhone</option>
      <option value="Watch">Watch</option>
      <option value="TV">TV</option>
      <option value="Music">Music</option>
    </select>
    <input type="text" placeholder="Price*" name="retailPrice" v-model="newProduct.retailPrice" @change="handleFormChange"/>
    <input type="text" placeholder="Color" name="color" @change="handleFormChange"/>
    <select name="capacity" selected="newProduct.capacity" @change="handleFormChange">
      <option value="selectCapacity">Select capacity (if applicable)</option>
      <option value="8GB">8GB</option>
      <option value="16GB">16GB</option>
      <option value="32GB">32GB</option>
      <option value="64GB">64GB</option>
      <option value="128GB">128GB</option>
      <option value="256GB">256GB</option>
      <option value="512GB">512GB</option>
      <option value="1TB">1TB</option>
      <option value="2TB">2TB</option>
    </select>
    <textarea placeholder="Product description" name="description" v-model="newProduct.description" @change="handleFormChange"></textarea>
    <button type="submit" class="submitButton">Add new product</button>
  </form>
</template> 

<script>
import axios from 'axios'

export default {
  name: 'ProductForm',
  props: {
    product: Object,
  },
  data() {
    return {
      productObj: Object,
      API_BASE_URL: 'http://localhost:8888/products',
      newProduct: {
        name: '',
        category: 'Select category type',
        retailPrice: '',
        color: '',
        capacity: 'Select capacity (if applicable)',
        description: ''
      },
    }
  },
  methods: {
    async handleFormSubmit(e) {
      e.preventDefault()
      console.log('submitted')
      const data = await this.addProduct()

      console.log(data)
      this.newProduct = {
        name: '',
        category: 'Select category type',
        retailPrice: '',
        color: '',
        capacity: 'Select capacity (if applicable)',
        description: ''
      }
    },
    handleFormChange(e) {
      const productKey = e.target.name
      const productValue = e.target.value
      this.newProduct[productKey] = productValue
      console.log(this.newProduct)
    },
    async fetchProductByID(id) {
      const res = await axios.get(this.API_BASE_URL + `/product/${id}`)
      console.log(res)
      const data = res.data
      return data
    },
    async addProduct() {
      const body = {...this.newProduct}
      const res = await axios.post(this.API_BASE_URL + `/add`, body)
      const data = res.data
      return data
    }
  },

}
</script>

<style scoped>
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
  form input[type="text"], select, textarea {
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

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>