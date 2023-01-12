const express = require('express')
const productsRouter = require('./routes/productsRouter')
const app = express()
const port = 8080


app.get('/', (req, res) => {
  res.send('Ecommerce API!')
})

app.use('/api/products', productsRouter)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})