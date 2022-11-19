const express = require('express');
const { categorieFilter, locationFilter, mapFilter, filterData } = require('../controller/allfilters');
const router = express.Router()

router.route('/categoryfilter').get(categorieFilter).post(locationFilter)
router.route('/mapFilter').post(mapFilter)
router.route('/filterData').post(filterData)

module.exports = router;