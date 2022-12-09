const express = require('express');
const { register, login, verifyToken, getuser,  googleLogin, logout, Profile, refreshToken, sendPasswordEmail, resetPasswordEmail, changepasswoed } = require('../controller/REGISTERlOGIN');
const router = express.Router()
router.route('/register').post(register);
router.route('/login').post(login).get(verifyToken, Profile)
router.route('/user').get(verifyToken, getuser)
router.route('/googleSingUp').post(googleLogin);
router.route('/logout').post(verifyToken,logout).get(verifyToken, refreshToken, getuser)
router.route('/forgetpassword').post(sendPasswordEmail).put(resetPasswordEmail)
router.route('/resetPassword').put(resetPasswordEmail)
router.route('/changePassword').post(verifyToken,changepasswoed)

module.exports = router;