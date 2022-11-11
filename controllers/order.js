const Order = require('../models/order');


const createOrder = async (req, res) => {
    const body = req.body;
    return await Order.create(body)
        .then(order => {
            res.status(201).json({"created": order});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const getOrder = async (req, res) => {
    return await Order.findAndCountAll()
        .then(order => {
            res.status(200).json(order);    
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    return await Order.update(body, {where: {id}})
        .then(order => {
            res.status(201).json({"Updated order with id": order});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    
    return await Order.destroy({where: {id}})
        .then(order => {
            res.json({"Deleted order with id": order});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

module.exports = {
    createOrder, 
    getOrder,
    updateOrder,
    deleteOrder
}