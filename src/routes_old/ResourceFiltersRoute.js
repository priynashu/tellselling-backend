const express = require('express') ;
const router = express.Router() ;

const getResourceFilters = require('../controllers/ResourceFiltersControllers/GetResourceFilters') ;
const uploadResourceFilters = require('../controllers/ResourceFiltersControllers/UploadResourceFilters') ;
const updateResourceFilters = require('../controllers/ResourceFiltersControllers/UpdateResourceFilters') ;
const deleteResoureFilter = require('../controllers/ResourceFiltersControllers/DeleteResourceFilter') ;


router.get('/:tenantId' , getResourceFilters) ;

router.post('/:tenantId/:filterId' , updateResourceFilters) ; 

router.post('/:tenantId' , uploadResourceFilters) ;

router.post('/delete/:tenantId/:filterId' , deleteResoureFilter) ;

module.exports = router ;
