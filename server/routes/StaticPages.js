const express = require('express');
const { companyStaff, goh_quick_links, goh_faqs, goh_media_and_news, goh_testimonials } = require('../controller/staticPageControl');
const router = express.Router()
router.route('/gohordingStaff').get(companyStaff)
router.route('/goh_quick_links').get(goh_quick_links)
router.route('/goh_faqs').get(goh_faqs)
router.route('/goh_media_and_news').get(goh_media_and_news)
router.route('/goh_testimonials').get(goh_testimonials)
module.exports = router;