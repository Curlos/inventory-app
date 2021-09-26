const express = require('express')
const mongosoe = require('mongoose')
const Product = require('../models/Product')

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await Product.find({})
  console.log(response)
  const data = response.json()
  res.json(data)
})

router.get('/product/:id', async (req, res) => {
  const id = req.params.id
  const response = await Product.findById(id)
  const data = response.json()
  res.json(data)
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
module.exports = router;