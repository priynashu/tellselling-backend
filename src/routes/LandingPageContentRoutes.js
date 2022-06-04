const express = require('express');
const router = express.Router();
const multer = require('multer');

const getResources = require('../controllers/LandingPageComponents/GetComponentData');
const getResource = require('../controllers/ResourcesControllers/GetResource');


router.get('/:tenantId/:resourceId' , getResource) ;

router.get('/:tenantId', getResources);

module.exports = router;
 