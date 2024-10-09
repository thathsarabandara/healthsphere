const sequelize = require('../config/db');
const {Group} = require('../models/auth/Group');

const seedGroups = async () => {
  try {
    // Sync the models with the database (create tables if not exist)
    await sequelize.sync({ force: false });

    // Insert seed data into the User table
    await Group.bulkCreate([
      { name: 'user', description: 'Users Only'},
      { name: 'doctor', description: 'Doctors Only'},
      { name: 'admin', description: 'Admins Only'},
    ]);

    console.log('Group Seeding completed!');
    process.exit(0); // Exit the process after seeding
  } catch (error) {
    console.error('Group Seeding failed:', error);
    process.exit(1);
  }
};

// Execute the seed function
module.exports = {
    seedGroups
};
