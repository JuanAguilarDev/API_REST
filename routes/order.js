const router = require('express').Router();
const permission = require('../middlewares/permission');

const {
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/order');


router.get('/', permission('admin', 'client'), getOrder);
router.post('/', permission('admin'), createOrder);
router.put('/:id', permission('admin'), updateOrder);
router.delete('/:id', permission('admin'), deleteOrder);

module.exports = router;