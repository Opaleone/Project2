const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        strength_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        dexterity_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        constitution_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        intelligence_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        wisdom_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        charisma_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'race', 
    }
)

module.exports = Race;