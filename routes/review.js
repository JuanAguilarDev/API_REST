const router = require('express').Router();

const {
    createReview,
    getReview,
    updateReview,
    deleteReview
} = require('../controllers/review');


router.get('/', getReview);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
