const express = require('express');
const { categorieFilter } = require('../controller/allfilters');
const router = express.Router()

router.route('/categoryfilter').get(categorieFilter)

module.exports = router;