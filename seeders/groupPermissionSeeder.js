const sequelize = require('../config/db');
const { GroupPermission } = require('../models/GroupPermission');

const seedGroupPermissions = async () => {
  try {
    // Sync database (you can use force: true to recreate the table if needed)
    await sequelize.sync({ force: false });

    // Seed data into the permissions table
    await GroupPermission.bulkCreate([
        { group_id: 1, permission_id: 1 }, 
        { group_id: 1, permission_id: 3 }, 
        { group_id: 1, permission_id: 5 }, 
        { group_id: 1, permission_id: 6 }, 
        { group_id: 1, permission_id: 7 }, 
        { group_id: 1, permission_id: 8 }, 
        { group_id: 2, permission_id: 2 }, 
        { group_id: 2, permission_id: 4 }, 
        { group_id: 2, permission_id: 9 }, 
        { group_id: 2, permission_id: 15 }, 
        { group_id: 2, permission_id: 16 }, 
        { group_id: 3, permission_id: 10 }, 
        { group_id: 3, permission_id: 11 }, 
        { group_id: 3, permission_id: 12 }, 
        { group_id: 3, permission_id: 13 }, 
        { group_id: 3, permission_id: 14 },
      ]);

    console.log('GroupPermission seeding complete!');
    process.exit(0); // Exit the process once seeding is done
  } catch (err) {
    console.error('GroupPermission seeding failed:', err);
    process.exit(1); // Exit with failure code
  }
};
seedGroupPermissions();
module.exports = {
  seedGroupPermissions
};
