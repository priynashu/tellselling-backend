const express = require('express');
const router = express.Router();

const createDigitalSalesRoomData = require('../controllers/DigitalSalesRoomControllers/CreateSalesroom') ;
const getAllSalesrooms = require('../controllers/DigitalSalesRoomControllers/GetSalesRooms.js');
const getSingleSalesroom = require('../controllers/DigitalSalesRoomControllers/GetSingleDigitalSalesroom')
const getSingleSalesroomData = require('../controllers/DigitalSalesRoomControllers/GetDIgitalSalesRoomData')

router.post(`/create` , createDigitalSalesRoomData);
router.get('/:tenantId', getAllSalesrooms);
router.get('/:tenantId/:link', getSingleSalesroom);
router.get('/:link', getSingleSalesroomData);

module.exports = router ;  