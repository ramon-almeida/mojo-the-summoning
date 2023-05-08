const { db } = require('../db/config.js');
const { DataTypes } = require('sequelize')


const Card = db.define("Card", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      
    },
    mojo: {
      type: DataTypes.INTEGER,
      
    },
    stamina: {
      type: DataTypes.INTEGER,
      
    },
    imgUrl: {
      type: DataTypes.STRING,
      
    }
  });

  module.exports = { Card };