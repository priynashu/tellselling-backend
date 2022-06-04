const EmailSchedules = require('../../models/EmailSchedule');
const schedule = require('node-schedule')
const uploadSchedule = async (req, res) => {
    // const { tenantId } = req.params;
    // console.log("inside uplaod schedule",req.body);

    const subject = req.body.subject
    const date = req.body.date
    const time = req.body.time
    const tenantId = req.body.tenantId
    const fullDate= req.body.fullDate
    const text = req.body.text
    const to = req.body.to
    const from  = req.body.from
    // console.log(tenantId);
    try {
        const newSchedule = await EmailSchedules.create({
            tenantId: tenantId,
            subject:subject,
            date:date,
            time:time,
            fullDate:fullDate,
            text:text,
            to:to,
            from:from
          });
        return res.status(200).json(newSchedule);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = uploadSchedule; 