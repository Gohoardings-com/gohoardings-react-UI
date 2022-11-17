const express = require('express');
const { categorieFilter, locationFilter, mapFilter } = require('../controller/allfilters');
const router = express.Router()

router.route('/categoryfilter').get(categorieFilter).post(locationFilter)
router.route('/mapFilter').post(mapFilter)

module.exports = router;