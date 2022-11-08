const Character = require('./character');
const Race = require('./race');
const Class = require('./class');
const User = require('./user');


Character.blongsTo(Race, {
    foreignKey: 'race_id'
})

Race.hasMany(Character, {
    foreignKey: 'character_id'
})

Character.hasOne(Class, {
    foreignKey: 'character_id'
})

User.hasMany(Character, {
    foreignKey: 'character_id'
})

module.exports = {Character, Race}