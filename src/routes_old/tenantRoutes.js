const express = require('express');
const router = express.Router();

const Tenant = require('../models/Tenant');

const getAllusers = require('../controllers/TenantControllers/getAllUsers');
const addUser = require('../controllers/TenantControllers/AddUser');
const UpdateUser = require('../controllers/TenantControllers/UpdateUser');

router.get('/', async (req, res) => {
  const tenants = await Tenant.find();
  res.status(200).json(tenants);
});

router.get('/getusers/:tenantId', getAllusers);
router.post('/adduser', addUser);
router.post('/updateUser', UpdateUser);

module.exports = router;
