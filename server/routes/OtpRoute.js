const express = require('express');
const { findEmail, sendOTP, checkOTP, changePassword } = require('../controller/otp');
const router = express.Router()

router.route('/mobileOtp').post(findEmail, sendOTP)
router.route('/check').put(checkOTP).post(changePassword)
module.exports = router;