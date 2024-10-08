const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Doctor List');
});
router.get('/doctor',);
router.get('/doctor/home',);
router.get('/doctor/aboutus',);
router.get('/doctor/dashboard',);
router.get('/doctor/schedule',);
router.get('/doctor/videoconsultation',);
router.get('/doctor/clinic',);
router.get('/doctor/clinic/patientprofile',);
router.get('/doctor/clinic/prescription',);
router.get('/doctor/login',);
router.get('/doctor/register',);
router.get('/doctor/fullregister',);


module.exports = router;
