const express = require('express');
const router = express.Router();

const authController = require('../controllers/users/auth');
const updateUser = require('../controllers/users/updateUser');
const forgetPassword = require('../controllers/users/forgetPass');
const resetPass = require('../controllers/users/resetPass');
const uploadPermissions = require('../controllers/users/uploadPermissions');
const User = require('../models/user');

router.get('/', async (req, res) => {
  const users = await User.find();
  console.log("inside get");
  res.status(200).json(users);
});
router.get('/:tenantId', async (req, res) => {
  const user = await User.find({tenantId:req.params.tenantId});
  console.log("requested user is ",user);
  res.status(200).json(user);
});
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.delete('/delete/:email', authController.deleteUser);
router.post('/update', updateUser);
router.post('/forgot', forgetPassword);
router.post('/reset', resetPass);
router.post('/:tenantId',uploadPermissions);

module.exports = router;
