const express = require('express');


const { Invertor, Company, City, SearchData } = require('../controller/mediaController');

const router = express.Router();

router.route('/inventory').post(Invertor).get(Company)
router.route('/searchMedia').get(City).post(SearchData)


module.exports = router