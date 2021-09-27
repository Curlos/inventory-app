const express = require('express')
const mongosoe = require('mongoose')
const Product = require('../models/Product')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (err) {
    res.json(err)
  }
})

router.get('/product/:id', async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    res.json(product)
  } catch (err) {
    res.json(err)
  }
})

router.post('/add', async (req, res) => {
  console.log(req.body)
  const newProduct = Product({...req.body})
  await newProduct.save((err, result) => {
    if (err) {
      res.json({ err })
    }

    res.json(result)
    
  })
})

router.put('/product/:id', async (req, res) => {

  console.log('updating product')
  console.log(req.body)
  const id = req.params.id
  try {
    const updatedProductData = req.body
    const product = await Product.findByIdAndUpdate({_id: id}, {...updatedProductData}, { new: true})
    console.log(product)
    res.json(product)
  } catch (err) {
    res.json(err)
  }
})

router.delete('/product/:id', async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findByIdAndDelete(id)
    res.json(product)
  } catch (err) {
    res.json(err)
  }
})
module.exports = router;