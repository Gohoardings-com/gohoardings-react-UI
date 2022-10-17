const express = require('express');
const { register, login, verifyToken, getuser,  googleLogin, logout, Profile } = require('../controller/REGISTERlOGIN');
const router = express.Router()
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user').get(verifyToken, getuser).post(Profile);
router.route('/googleSingUp').post(googleLogin);
router.route('/logout').post(verifyToken,logout);

module.exports = router;