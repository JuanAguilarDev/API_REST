const Review = require('../models/review');


const createReview = async (req, res) => {
    const body = req.body;
    return await Review.create(body)
        .then(review => {
            res.status(201).json({"created": review});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const getReview = async (req, res) => {
    return await Review.findAndCountAll()
        .then(review => {
            res.status(200).json(review);    
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const updateReview = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    return await Review.update(body, {where: {id}})
        .then(review => {
            res.status(201).json({"Updated review with id": review});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const deleteReview = async (req, res) => {
    const id = req.params.id;
    
    return await Review.destroy({where: {id}})
        .then(review => {
            res.json({"Deleted review with id": review});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

module.exports = {
    createReview, 
    getReview, 
    updateReview, 
    deleteReview
}