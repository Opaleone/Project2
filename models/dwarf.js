const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dwarf extends Model {}

Dwarf.init({
  description: "",
  modifiers: [
    {
      str: {
        type: DataTypes.INTEGER
      }
    },
    {
      int: {
        type: DataTypes.INTEGER
      }
    },
  ]
})