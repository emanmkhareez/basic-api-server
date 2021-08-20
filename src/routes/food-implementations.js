const {  food } = require('../models');



async function createfood(req, res) {
    let foodInfo = req.body;
    let food2 = await food.create(foodInfo);
    res.status(201).json(food2);
}

async function getfood(req, res) {
    const id = parseInt(req.params.id);
    let food2 = await food.findOne({ where: { id: id } });
    res.status(200).json(food2);
}

async function getAllfood(req, res) {
    let all = await food.findAll();
    res.status(200).json(all);
}



async function updatefood(req, res) {
    const id = parseInt(req.params.id);
    let foodInfo = req.body;

    let food2 = await food.findOne({ where: { id } });
    let updatefood = await food2.update(foodInfo);
    res.status(200).json(updatefood);
}

async function deletefood(req, res) {
    const id = parseInt(req.params.id);
    let deletefood = await food.destroy({ where: { id } });
    res.status(204).json(deletefood);
}



module.exports = {
    createfood,
    getfood,
    getAllfood,
    updatefood,
    deletefood,
}