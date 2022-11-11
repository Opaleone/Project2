const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Race = require('./race');
const Class = require('./class');


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
            
        },
        description: {
            type: DataTypes.STRING,
            

        },
        alignment: {
            type: DataTypes.STRING,
            
        },
        strength: {
            type: DataTypes.INTEGER,
            
            defaultValue: 0
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        constitution: {
            type: DataTypes.INTEGER,
            
            defaultValue: 0
        },
        intelligence: {
            type: DataTypes.INTEGER,
            
            defaultValue: 0
        },
        wisdom: {
            type: DataTypes.INTEGER,
            
            defaultValue: 0
        },
        charisma: {
            type: DataTypes.INTEGER,
            
            defaultValue: 0
        },
        // class_id: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 0,
        //     references: {
        //         model: Class,
        //         key: 'id',
        //     },
        // },
        // race_id: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 0,
        //     references: {
        //         model: Race,
        //         key: 'id',
        //     },
        // },

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