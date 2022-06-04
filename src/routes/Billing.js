const express = require('express');
const router = express.Router();
const upgradePlan = require("../controllers/Billing/upgradePlan")
const getPlan = require("../controllers/Billing/getPlan")
const stripePayment = require("../controllers/Billing/stripePayment");
const retrievePayments = require('../controllers/Billing/retrievePayments');


router.post(`/create` ,upgradePlan);
router.post(`/payment`,stripePayment)
router.get('/bills/last/:tenantId',retrievePayments)
router.get(`/:tenantId`,getPlan);
module.exports = router ;  
