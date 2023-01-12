var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController.js")

/* GET users listing. */
router.get('/', productsController.getAll);  
router.get('/:pid', productsController.getById);  

/* router.post('/', productsController.create);
router.post('/empty', productsController.empty); 

router.put('/edit/:id', productsController.edit);

router.delete('/:id', productsController.delete);
 */

module.exports = router;