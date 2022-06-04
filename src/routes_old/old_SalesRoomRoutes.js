const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

//const SalesRoom1 = require('../models/SalesRoom1');
const createSalesRoom1 = require('../controllers/SalesRoomController/CreateSalesRoom1');
const getSalesRooms = require('../controllers/SalesRoomController/GetSalesRooms');

router.get('/', async (req, res) => {
  const rooms = await SalesRoom1.find();
  res.status(200).json(rooms);
});

router.post('/create1', upload.single('file'), createSalesRoom1);
router.get('/:tenantId', getSalesRooms);

module.exports = router;
