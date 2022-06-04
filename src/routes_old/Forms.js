const express = require('express');
const router = express.Router();

const createForm = require('../controllers/FormControllers/CreateUpdateForm') ;
const getForms = require('../controllers/FormControllers/GetForms') ;
const getForm = require('../controllers/FormControllers/GetForm') ;
router.post(`/create` , createForm) ;
router.get('/:tenantId', getForms);
router.get('/:tenantId/:link', getForm);
module.exports = router ;  