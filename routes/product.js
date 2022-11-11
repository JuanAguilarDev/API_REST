const router = require('express').Router();

const {
    createProduct,
    updateProduct, 
    getProduct,
    deleteProduct
} = require('../controllers/product');

router.get('/', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;