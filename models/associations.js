const {User} = require('./User');
const Group = require('./Group');
const UserGroup = require('./UserGroup');
const Permission = require('./Permission');
const GroupPermission = require('./GroupPermission');
const {Token} = require('./Token');
const {Patient} = require('./Patient');
const { Doctor } = require('./Doctor');
const { Admin } = require('./Admin');

// Define relationships
User.belongsToMany(Group, { through: UserGroup, foreignKey: 'user_id' });
Group.belongsToMany(User, { through: UserGroup, foreignKey: 'group_id' });
  
Group.belongsToMany(Permission, { through: GroupPermission, foreignKey: 'group_id' });
Permission.belongsToMany(Group, { through: GroupPermission, foreignKey: 'permission_id' });
  
User.hasMany(Token, { foreignKey: 'user_id' });

Patient.belongsTo(User, { foreignKey: 'User_id' });
Doctor.belongsTo(User, { foreignKey: 'User_id' });
Admin.belongsTo(User, { foreignKey: 'User_id' });

module.exports = { 
  User,
  Group,
  Permission,
  Patient,
  Doctor,
  Admin
 }
