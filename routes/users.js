const express = require('express');
const router = express.Router();
const userController =  require('../controllers/userController');
const otpController = require('../controllers/otpController')
const authMiddleware = require('../middleware/auth/authenticateJWT')
  

router.get('/', authMiddleware , (req, res) => {
    res.send('User List');
});

router.get('/',);
router.get('/home',);
router.get('/finddoctor',);
router.get('/finddoctor/:category',);
router.get('/finddoctor/:category/reservation',);
router.get('/finddoctor/:category/:doctor',);
router.get('/package',);
router.get('/pharamacy',);
router.get('/labratory',);
router.get('/aboutus',);
router.get('/404_error',);
router.get('/403_error',);
router.get('/userprofile',);
router.get('/user_prescription',);
router.get('/user_payments',);
router.get('/checkout',);
router.get('/refund',);
router.get('/refund/request',);
router.post('/verifyuser', otpController.verifyOTP );
router.post('/register',userController.register);
router.post('/login',userController.login);

module.exports = router;
