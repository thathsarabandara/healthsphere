const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin List');
});

module.exports = router;
