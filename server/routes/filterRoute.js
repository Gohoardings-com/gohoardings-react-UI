const express = require('express');
const { categorieFilter, locationFilter, filterData, iconFilter } = require('../controller/allfilters');
const router = express.Router()

router.route('/categoryfilter').get(categorieFilter).post(locationFilter)
router.route('/mapFilter').post(iconFilter)

module.exports = router;