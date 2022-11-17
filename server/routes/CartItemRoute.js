const express = require("express");
const router = express.Router();
const {addOnCart, processdCart, deleteFromCart, getUserData, cartitems, cartiemfromdb, useritems} = require('../controller/cartItems');
const { verifyToken } = require("../controller/REGISTERlOGIN");

router.route("/addonCart").post(addOnCart)       
// router.route("/getuserData").post(getUserData)               
router.route("/deleteFromCart").post(verifyToken,deleteFromCart)
router.route("/processdCart").post(processdCart);

//Real Api's
// router.route("/cartitems").get(verifyToken,cartitems, cartiemfromdb);
// router.route("/useritems").get(verifyToken,useritems);

// Tempory userid
router.route("/cartitems").get(cartitems, cartiemfromdb);
router.route("/useritems").get(useritems);

module.exports = router;