const sequelize = require('../config/db');
const { Permission } = require('../models/auth/Permission');

const seedPermissions = async () => {
  try {
    // Sync database (you can use force: true to recreate the table if needed)
    await sequelize.sync({ force: false });

    // Seed data into the permissions table
    await Permission.bulkCreate([
      { name: 'register_patient', description: 'Permission for patients to register' },
      { name: 'register_doctor', description: 'Permission for doctors to register (with admin confirmation)' },
      { name: 'make_appointment', description: 'Permission to schedule appointments with doctors (for patients)' },
      { name: 'manage_appointments', description: 'Permission to manage appointments (for doctors)' },
      { name: 'online_payment', description: 'Permission to make online payments for services' },
      { name: 'view_profile', description: 'Permission to view and update personal profile details' },
      { name: 'view_history', description: 'Permission to view past activities (appointments, payments, prescriptions)' },
      { name: 'search_packages', description: 'Permission to search for available health packages' },
      { name: 'schedule_clinic', description: 'Permission for doctors to request clinic scheduling' },
      { name: 'manage_doctor_registration', description: 'Permission for admins to approve or reject new doctor registrations' },
      { name: 'manage_clinic_scheduling', description: 'Permission for admins to approve or reject clinic scheduling requests' },
      { name: 'manage_user_accounts', description: 'Permission for admins to create, modify, and delete user accounts' },
      { name: 'view_user_activities', description: 'Permission for admins to view past activities of all users' },
      { name: 'view_patient_prescriptions', description: 'Permission for admins to access and view all patient prescriptions' },
      { name: 'view_patient_history', description: 'Permission for doctors to access patients\' medical history and prescriptions' },
      { name: 'view_bookings', description: 'Permission for doctors to view upcoming bookings and appointments' }
    ]);

    console.log('Permission seeding complete!');
    process.exit(0); // Exit the process once seeding is done
  } catch (err) {
    console.error('Permission seeding failed:', err);
    process.exit(1); // Exit with failure code
  }
};
seedPermissions();
module.exports = {
  seedPermissions
};
