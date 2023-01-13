const express = require('express')
const cookieParser = require('cookie-parser');
const productsRouter = require('./routes/productsRouter')
const cartsRouter = require('./routes/cartsRouter')
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Ecommerce API!')
})

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
