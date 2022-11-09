const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
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
        alignment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'class',
                key: 'id',
            },
        },
        race_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'race',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character', 
    }
)

module.exports = Character;