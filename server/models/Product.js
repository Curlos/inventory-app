const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    retailPrice: {type: Number, required: true},
    releaseYear: {type: Number},
    capacity: {type: String},
    color: {type: String},
    imageURL: {type: String},
    description: {type: String},
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;