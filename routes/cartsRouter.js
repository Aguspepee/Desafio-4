var express = require('express');
var router = express.Router();

const cartsController = require("../controllers/cartsController.js")

/* GET users listing. */
router.get('/', cartsController.getAll);  

/* router.post('/', cartsController.create);
router.post('/empty', cartsController.empty); 

router.put('/edit/:id', cartsController.edit);

router.delete('/:id', cartsController.delete);
 */

module.exports = router;