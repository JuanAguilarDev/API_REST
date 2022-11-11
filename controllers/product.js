const Product = require('../models/product');

const createProduct = async (req, res) => {
    const body = req.body;
    return await Product.create(body)
        .then(product => {
            res.status(201).json({"created": product});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const getProduct = async (req, res) => {
    return await Product.findAndCountAll()
        .then(product => {
            res.status(200).json(product);    
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    return await Product.update(body, {where: {id}})
        .then(product => {
            res.status(201).json({"Updated product with id": product});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    
    return await Product.destroy({where: {id}})
        .then(product => {
            res.json({"Deleted product with id": product});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

module.exports = {
    createProduct, 
    getProduct,
    updateProduct,
    deleteProduct
}