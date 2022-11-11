const sequelize = require('../config/connection');
const Race = require('../models/Race');
const RaceData = require('./race-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Race.bulkCreate(RaceData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };


seedDatabase();