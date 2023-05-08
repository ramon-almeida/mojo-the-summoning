const { db } = require('../db/config.js');
const { DataTypes } = require('sequelize')


const Deck = db.define("Deck", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      
    },
    xp: {
      type: DataTypes.INTEGER,
      
    }
  });
  
  module.exports = { Deck };