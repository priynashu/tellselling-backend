const express = require('express');
const router = express.Router();
const uploadSchedule = require("../controllers/EmailSchedule/emailScheduleUpload")
const getSchedule = require("../controllers/EmailSchedule/getEmailSchedule")

router.post(`/upload` ,uploadSchedule) ;
router.get(`/:tenantId`,getSchedule)

module.exports = router ;  