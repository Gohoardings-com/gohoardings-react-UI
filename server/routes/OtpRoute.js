const express = require('express');
const { findEmail, sendOTP, checkOTP, otpchangePassword } = require('../controller/otp');
const router = express.Router()

router.route('/mobileOtp').post(findEmail, sendOTP)
router.route('/check').put(checkOTP)
// router.route('/otpchangePassword').post(otpchangePassword)
module.exports = router;