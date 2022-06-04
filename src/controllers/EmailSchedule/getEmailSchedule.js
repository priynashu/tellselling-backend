const EmailSchedules = require('../../models/EmailSchedule');

const getSchedule = async (req, res) => {
    
    const tenantId=req.params.tenantId;
    // console.log("inside get schedule",req.params);
    try {
        const AllSchedule = await EmailSchedules.find({tenantId:tenantId});
        // console.log("all dates",AllSchedule);
        return res.status(200).json(AllSchedule);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = getSchedule; 