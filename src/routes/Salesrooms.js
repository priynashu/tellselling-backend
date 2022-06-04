const express = require('express');
const router = express.Router();

const createDigitalSalesRoomData = require('../controllers/DigitalSalesRoomControllers/CreateSalesroom') ;
const saveDigitalSalesRoomData = require('../controllers/DigitalSalesRoomControllers/SaveSalesroom') ;
const getAllSalesrooms = require('../controllers/DigitalSalesRoomControllers/GetSalesRooms.js');
const getSingleSalesroom = require('../controllers/DigitalSalesRoomControllers/GetSingleDigitalSalesroom')
const getSingleSalesroomData = require('../controllers/DigitalSalesRoomControllers/GetDIgitalSalesRoomData')
const publishSalesroom = require("../controllers/publishSalesroom")
const deleteSalesroom= require("../controllers/DigitalSalesRoomControllers/deleteSalesroom")
router.post(`/create` , createDigitalSalesRoomData);
router.post(`/update` , saveDigitalSalesRoomData);
router.get('/salesroom/:tenantId', getAllSalesrooms);
router.get('/:tenantId/:link', getSingleSalesroom);
router.get('/:link', getSingleSalesroomData);
router.post('/publish/:link',publishSalesroom)
router.post('/delete',deleteSalesroom)
module.exports = router ;   