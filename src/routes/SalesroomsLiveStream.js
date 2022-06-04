const express = require('express');
const router = express.Router();

const createDigitalSalesRoomData = require('../controllers/DigitalSalesRoomLiveStreamControllers/CreateSalesroom') ;
const saveDigitalSalesRoomData = require('../controllers/DigitalSalesRoomLiveStreamControllers/SaveSalesroom') ;
const getAllSalesrooms = require('../controllers/DigitalSalesRoomLiveStreamControllers/GetSalesRooms.js');
const getSingleSalesroom = require('../controllers/DigitalSalesRoomLiveStreamControllers/GetSingleDigitalSalesroom')
const getSingleSalesroomData = require('../controllers/DigitalSalesRoomLiveStreamControllers/GetDigitalSalesRoomData')
const getLiveStreaming = require("../controllers/DigitalSalesRoomLiveStreamControllers/getLiveStreaming")
const getAllLiveSalesroom = require("../controllers/DigitalSalesRoomLiveStreamControllers/getAllLiveSalesroom")
const updateGuest = require("../controllers/DigitalSalesRoomLiveStreamControllers/updateGuest")
const publishSalesroom = require("../controllers/publishSalesroom")
const updateQuestion = require('../controllers/DigitalSalesRoomLiveStreamControllers/updateQuestion');
router.post(`/create` , createDigitalSalesRoomData);
router.post(`/update` , saveDigitalSalesRoomData);
router.get('/:link', getLiveStreaming);
router.post(`/update-guest` , updateGuest);
router.get('/:tenantId', getAllSalesrooms);
router.get('/salesroomLive/:tenantId', getAllLiveSalesroom);
router.get('/:tenantId/:link', getSingleSalesroom);
router.get('/get-salesroom-data/:link', getSingleSalesroomData);
router.post('/publish/:link',publishSalesroom)
router.post('/update-question',updateQuestion)


module.exports = router ;   