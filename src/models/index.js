require('dotenv').config()
const POSTGRES_URI = `${process.env.POSTGRES_URI}`
const { Sequelize, DataTypes } = require('sequelize');

const food = require('./food');
const clothes=require('./clothes')

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    food: food(sequelize, DataTypes),
    clothes:clothes(sequelize,DataTypes)
}


