const productManager = require('../productManager')
const products = new productManager('./productos.json')

module.exports = {
    getAll: async function (req, res, next) {
        try {
            let data = products.getProducts()
            let limit = req.query.limit
            data = limit ? data.slice(0, limit) : data
            res.json(data)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    getById: async function (req, res, next) {
        let pid = req.params.pid
        try {
            let product = products.getProductById(Number(pid))
            res.json(product)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },


}