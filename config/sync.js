const sequelize = require('./db');
require('../models/User');
require('../models/Group')
require('../models/UserGroup');
require('../models/Permission');
require('../models/GroupPermission');
require('../models/Token');
require('../models/associations');

const syncDatabase = async () => {
    try {
      await sequelize.sync({ force: false }); // Set to true for development only to drop tables
      console.log('Database synced successfully');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  };

syncDatabase();


