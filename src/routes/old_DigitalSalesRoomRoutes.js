const express = require('express');
const router = express.Router();

const uploadDigitalSalesRoomData = require('../controllers/DigitalSalesRoomControllers/UploadDigitalSalesRoomData') ;

router.post(`/upload` , uploadDigitalSalesRoomData) ;


module.exports = router ; 