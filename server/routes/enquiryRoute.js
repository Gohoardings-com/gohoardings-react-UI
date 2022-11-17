const express = require("express")
const router = express.Router();
const {message} = require('../controller/enquiry')

router.route("/message").post(message);

module.exports = router