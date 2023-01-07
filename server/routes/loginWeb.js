const express = require('express');
const {sendPasswordEmail} = require('../controller/otp');
const {
    register,
    login,
    getuser,
    googleLogin,
    logout,
    Profile,
    refreshToken,
    resetPasswordEmail,
    changepasswoed,
    imageupload,
    updateProfile,
    linkdinLogin
} = require('../controller/REGISTERlOGIN');
const upload = require('../middelware/ImageUpload');
const {verifyToken} = require('../middelware/token');
const router = express.Router()
router.route('/register').post(register);
router.route('/login').post(login).get(verifyToken, Profile);
router.route('/user').get(verifyToken, getuser).post(linkdinLogin)
router.route('/googleSingUp').post(googleLogin);
router.route('/logout').post(verifyToken, logout).get(verifyToken, refreshToken, getuser);
router.route('/forgetpassword').put(verifyToken, changepasswoed).post(sendPasswordEmail);
router.route('/resetPassword').patch(resetPasswordEmail);
router.route('/updateProfile').post(verifyToken, upload.single("photo"), updateProfile);
module.exports = router;
