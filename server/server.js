const express = require('express')
const dotenv = require('dotenv')
const axios = require('axios')
const app = express()
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 8888
const productsRouter = require('./routers/productsRouter')
const database = require('./database/connection')

app.use(cors())
app.use(express.json())
app.use('/products', productsRouter)

app.listen(PORT, () => {
  database.connectToServer((err) => {
    if (err) {
      console.error(err)
    }
  })
  console.log(`Server is listening on port ${PORT}`)
})