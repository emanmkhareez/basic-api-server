const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/asac401';
const { Sequelize, DataTypes } = require('sequelize');

const food = require('./food.model');
const clothes=require('./clothes.model')

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    food: food(sequelize, DataTypes),
    clothes:clothes(sequelize,DataTypes)
}