const sequelize = require('./db');
require('../models/auth/Admin');
require('../models/auth/Group');
require('../models/auth/GroupPermission');
require('../models/auth/Permission');
require('../models/auth/Token');
require('../models/auth/User');
require('../models/auth/UserGroup');

require('../models/content/Notification');
require('../models/content/Review');

require('../models/ecommerce/Cart');
require('../models/ecommerce/CartItem');

require('../models/healthcare');

const syncDatabase = async () => {
    try {
      await sequelize.sync({ force: false }); // Set to true for development only to drop tables
      console.log('Database synced successfully');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  };

syncDatabase();


