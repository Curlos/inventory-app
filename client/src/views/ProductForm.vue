<template>
  <form className="productFormContainer" @submit="handleFormSubmit">
    <span class="formTitle">Add a new product</span>
    <input type="text" placeholder="Name*"/>
    <select name="categories">
      <option value="selectCategory">Select category type</option>
      <option value="Mac">Mac</option>
      <option value="iPad">iPad</option>
      <option value="iPhone">iPhone</option>
      <option value="Watch">Watch</option>
      <option value="TV">TV</option>
      <option value="Music">Music</option>
    </select>
    <input type="text" placeholder="Price*"/>
    <input type="text" placeholder="Color"/>
    <select name="capacitySizes">
      <option value="selectCategory">Select capacity (if applicable)</option>
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
    <textarea placeholder="Product description"></textarea>
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
      API_BASE_URL: 'http://localhost:8888/products'
    }
  },
  methods: {
    handleFormSubmit(e) {
      e.preventDefault()
      console.log('submitted')
    },
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
  }
</style>