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

require('../models/healthcare/Clinic');
require('../models/healthcare/Doctor');
require('../models/healthcare/Patient');
require('../models/healthcare/Prescription');
require('../models/healthcare/Reservation');
require('../models/healthcare/Schedule');
require('../models/healthcare/ScheduleCancel');
require('../models/healthcare/Specialization');

require('../models/security/AuditLog');
require('../models/security/FailedLoginAttempt');
require('../models/security/PasswordResetRequest');
require('../models/security/RateLimiting');
require('../models/security/SecurityIncidentResponse');
require('../models/security/SecurityPolicies');
require('../models/security/SecurityQuestion');
require('../models/security/Session');
require('../models/security/TwoFactorAuth');
require('../models/security/WhitelistedInputs');
require('../models/security/cspConfigurations');
require('../models/security/validationRules');

require('../models/transactions/Payment');
require('../models/transactions/Refund');

const syncDatabase = async () => {
    try {
      await sequelize.sync({ force: false }); // Set to true for development only to drop tables
      console.log('Database synced successfully');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  };

syncDatabase();


