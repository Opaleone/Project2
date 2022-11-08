const Character = require('./character');
const Race = require('./race');

Character.blongsTo(Race, {
    foreignKey: 'race_id'
})

Race.hasMany(Character, {
    foreignKey: 'character_id'
})


module.exports = {Character, Race}