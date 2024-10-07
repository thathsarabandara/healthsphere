const {User} = require('./auth/User');
const {Group} = require('./auth/Group');
const {UserGroup} = require('./auth/UserGroup');
const {Permission} = require('./auth/Permission');
const {GroupPermission} = require('./auth/GroupPermission');
const {Token} = require('./auth/Token');
const {Patient} = require('./healthcare/Patient');
const { Doctor } = require('./healthcare/Doctor');
const { Specialization } = require('./healthcare/Specialization');
const { ScheduleCancel } = require('./healthcare/ScheduleCancel');
const { Payment } = require('./transactions/Payment');
const { Reservation } = require('./healthcare/Reservation');
const { Schedule } = require('./healthcare/Schedule');
const { Refund } = require('./transactions/Refund');
const { Clinic } = require('./healthcare/Clinic');
const { Prescription } = require('./healthcare/Prescription');
const { Review } = require('./content/Review');
const { Cart } = require('./ecommerce/Cart');
const { CartItem } = require('./ecommerce/CartItem');
const { Notification } = require('./content/Notification');
const { Admin } = require('./auth/Admin');
const { AuditLog } = require('./security/AuditLog');
const { FailedLoginAttempt } = require('./security/FailedLoginAttempt');
const { PasswordResetRequest } = require('./security/PasswordResetRequest');
const { TwoFactorAuth } = require('./security/TwoFactorAuth');
const { Session } = require('./security/Session');
const { SecurityQuestion } = require('./security/SecurityQuestion');

// Define auth relationships
User.belongsToMany(Group, { through: UserGroup, foreignKey: 'user_id' });
Group.belongsToMany(User, { through: UserGroup, foreignKey: 'group_id' });
Group.belongsToMany(Permission, { through: GroupPermission, foreignKey: 'group_id' });
Permission.belongsToMany(Group, { through: GroupPermission, foreignKey: 'permission_id' });
User.hasMany(Token, { foreignKey: 'user_id' });

// Define healthcare relationships
Patient.belongsTo(User, { foreignKey: 'User_id' });
Doctor.belongsTo(User, { foreignKey: 'user_id' });
Doctor.belongsTo(Specialization, { foreignKey: 'specialization_id' });
Admin.belongsTo(User, { foreignKey: 'User_id' });
Schedule.belongsTo(Doctor, { foreignKey: 'doctor_id' });
ScheduleCancel.belongsTo(Schedule, { foreignKey: 'schedule_id' });
Reservation.belongsTo(Clinic, { foreignKey: 'clinic_id' });
Reservation.belongsTo(Patient, { foreignKey: 'patient_id' });
Reservation.belongsTo(Payment, { foreignKey: 'payment_id' });
Refund.belongsTo(Payment, { foreignKey: 'payment_id' });
Clinic.belongsTo(Schedule, { foreignKey: 'schedule_id' });
Clinic.belongsTo(Doctor, { foreignKey: 'doctor_id' });
Prescription.belongsTo(Patient, { foreignKey: 'patient_id' });
Prescription.belongsTo(Reservation, { foreignKey: 'reservation_id' });
Review.belongsTo(Patient, { foreignKey: 'patient_id' });
Review.belongsTo(Doctor, { foreignKey: 'doctor_id' });
Cart.belongsTo(Patient, { foreignKey: 'patient_id' });
Cart.belongsTo(CartItem, { foreignKey: 'cart_item_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

// Define security relationships 
AuditLog.belongsTo(User, { foreignKey: 'user_id' });
FailedLoginAttempt.belongsTo(User, { foreignKey: 'user_id' });
PasswordResetRequest.belongsTo(User, { foreignKey: 'user_id' });
TwoFactorAuth.belongsTo(User, { foreignKey: 'user_id' });
Session.belongsTo(User, { foreignKey: 'user_id' });
SecurityQuestion.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { 
  User,
  Group,
  Permission,
  Patient,
  Doctor,
  Admin
 }
