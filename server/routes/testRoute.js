const express = require('express');
const { test001 } = require('../controller/testController');

const router = express.Router();

router.route('/test001').post(test001)

module.exports = router;