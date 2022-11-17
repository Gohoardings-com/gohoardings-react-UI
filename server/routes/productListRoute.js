const express = require("express")
const router = express.Router();
const {product, Nearproduct} = require('../controller/product')

router.route("/product").post(product);
router.route("/Nearproduct").post(Nearproduct);

module.exports = router