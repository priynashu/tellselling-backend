const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer();

const getResources = require('../controllers/ResourcesControllers/GetResources');
const uploadResources = require('../controllers/ResourcesControllers/UploadResources');
const deleteResources = require('../controllers/ResourcesControllers/DeleteResources');
const getResource = require('../controllers/ResourcesControllers/GetResource');
const updateResource = require('../controllers/ResourcesControllers/UpdateResources');
const FilterController = require('../controllers/ResourcesControllers/FilterControllers')
const ContentForSalesroom = require('../controllers/ResourcesControllers/FetchSalesroomResources')


router.get('/:tenantId/:resourceId' , getResource) ;

router.get('/:tenantId', getResources);
router.put("/:tenantId")
router.post(
  '/upload',
  uploadResources,
);
router.post(
  '/salesroom_content',
  ContentForSalesroom,
);

//old stuffs

router.post('/filters',FilterController);

const CategoriesController = require('../controllers/ResourcesControllers/CategoriesController');
router.get('/categories/:tenantId', CategoriesController.getCategories);
router.post('/categories', CategoriesController.addCategory);

const TagsController = require('../controllers/ResourcesControllers/TagsController');
router.get('/tags/:tenantId', TagsController.getTags);
router.post('/tags', TagsController.addTags);

//Edit endpoints
router.post('/update/:resourceId/', 
upload.fields([
  { name: 'file', maxCount: 1 },
  { name: 'thumb', maxCount: 1 },
]),
updateResource)

//Delete Endpoint
router.post('/delete', deleteResources.deleteResources);

module.exports = router;
