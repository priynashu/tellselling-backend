const express = require('express');
const router = express.Router();

const createDigitalSalesRoomData = require('../controllers/DigitalSalesRoomWebinarControllers/CreateSalesroom') ;
// const saveDigitalSalesRoomData= require("../controllers/DigitalSalesRoomWebinarControllers")
const getWebinar = require("../controllers/DigitalSalesRoomWebinarControllers/getWebinar")
const getAllSalesroom = require("../controllers/DigitalSalesRoomWebinarControllers/getAllSalesroom")
const getSingleSalesroom = require("../controllers/DigitalSalesRoomWebinarControllers/getSingleSalesroom")
const saveDigitalSalesRoomData  = require("../controllers/DigitalSalesRoomWebinarControllers/SaveSalesroom")
const updateGuest = require("../controllers/DigitalSalesRoomWebinarControllers/updateGuest")
const publishSalesroom = require("../controllers/publishSalesroom");
const updateQuestion = require('../controllers/DigitalSalesRoomWebinarControllers/updateQuestion');
router.post(`/create` , createDigitalSalesRoomData);
router.get('/:link', getWebinar);
router.post(`/update-guest` , updateGuest);
router.post(`/update` , saveDigitalSalesRoomData);
router.get('/salesroomWeb/:tenantId', getAllSalesroom);
router.get('/:tenantId/:link', getSingleSalesroom);
router.post('/publish/:link',publishSalesroom)
router.post('/update-question',updateQuestion)
// router.post(`/update` , saveDigitalSalesRoomData);

module.exports = router ;   