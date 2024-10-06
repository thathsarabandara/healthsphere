const { seedGroups }  = require('./groupsSeeder');
const { seedPermissions } =  require('./permissionSeeder');
const { seedGroupPermissions } =  require('./groupPermissionSeeder');

async function seedAll() {
    try {
        console.log('Starting group seeding...');
        await seedGroups();
        console.log('Group seeding completed.');
        
        console.log('Starting permission seeding...');
        await seedPermissions();
        console.log('Permission seeding completed.');

        console.log('Starting Group permission seeding...');
        await seedGroupPermissions();
        console.log('Group Permission seeding completed.');
        
        console.log('All seeds executed successfully.');
    } catch (err) {
        console.error('Error Occurred in Seeds:', err.stack || err);
    }
}

seedAll();