const express = require('express');
const { Invertor, City, SearchData, company } = require('../controller/mediaController');


const router = express.Router();

router.route('/inventory').post(Invertor).get(company)
router.route('/searchMedia').post(SearchData)
router.route("/citys").post(City)



module.exports = router;