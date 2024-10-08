const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin List');
});

router.get('/admin',);
router.get('/admin/dashboard',);
router.get('/admin/managedoctors',);
router.get('/admin/managepatient',);
router.get('/admin/refund',);

module.exports = router;
