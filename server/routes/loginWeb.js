const express = require('express');
const { register, login, getuser,  googleLogin, logout, Profile, refreshToken, sendPasswordEmail, resetPasswordEmail, changepasswoed, imageupload } = require('../controller/REGISTERlOGIN');
const upload = require('../middelware/ImageUpload');
const { verifyToken } = require('../middelware/token');
const router = express.Router()
router.route('/register').post(register);
router.route('/login').post(login).get(verifyToken ,Profile)
router.route('/user').get(verifyToken, getuser)
router.route('/googleSingUp').post(googleLogin);
router.route('/logout').post(verifyToken,logout).get(verifyToken, refreshToken, getuser)
router.route('/forgetpassword').post(sendPasswordEmail).put(resetPasswordEmail)
router.route('/resetPassword').put(resetPasswordEmail)
router.route('/changePassword').post(verifyToken,changepasswoed)
router.route('/photo').post(upload.single("photo"),imageupload)

module.exports = router;