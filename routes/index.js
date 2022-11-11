const express = require('express');
const router = express.Router();

// Authentication
const authenticate = require('../middlewares/authentication');

// Routes
const products = require('./product');
const orders = require('./order');
const reviews = require('./review');
const users = require('./user');
const auth = require('./auth');

// Root
router.get('/', (req, res) => {
    res.json({msg: "Welcome to my API. "});
});

router.use('/products', authenticate, products);
router.use('/orders', authenticate, orders);
router.use('/reviews', authenticate, reviews);
router.use('/users', authenticate, users);
router.use('/auth', auth);

module.exports = router;