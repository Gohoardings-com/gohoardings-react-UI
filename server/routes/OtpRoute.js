const express = require('express');
const { sendOTP, checkOTP, changePassword } = require('../controller/otp');
const router = express.Router()

router.route('/mobileOtp').post(sendOTP)
router.route('/check').put(checkOTP).post(changePassword)
module.exports = router;