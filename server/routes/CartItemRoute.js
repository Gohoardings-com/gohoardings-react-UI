const express = require("express")
const router = express.Router();
const {addOnCart, processdCart, deleteFromCart, getUserData, cartitems, cartiemfromdb, useritems} = require('../controller/cartItems')

router.route("/addonCart").post(addOnCart)       
// router.route("/getuserData").post(getUserData)               
router.route("/deleteFromCart").post(deleteFromCart)
router.route("/processdCart").post(processdCart);
router.route("/cartitems").get(cartitems, cartiemfromdb);
router.route("/useritems").post(useritems);

module.exports = router;