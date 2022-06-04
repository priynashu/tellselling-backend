const express = require('express');
const router = express.Router();

const getLandingPage = require('../controllers/LandingPages/GetLandingPage');
const saveLandingPage = require('../controllers/LandingPages/CreateLandingPage');
const getLandingPages = require('../controllers/LandingPages/GetLandingPages');
const updateLandingPage = require('../controllers/LandingPages/UpdateLandingPage');
const getLandingPageCustomDomain = require('../controllers/LandingPages/CustomDomain');

router.get('/:link' , getLandingPage) ;
router.get('/get-landing-pages/:tenantId', getLandingPages);
router.get('/custom-domain/:custom_domain', getLandingPageCustomDomain);
router.post('/create', saveLandingPage);
router.post('/update', updateLandingPage);

module.exports = router;