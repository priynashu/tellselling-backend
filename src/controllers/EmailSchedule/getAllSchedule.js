const EmailSchedules = require('../../models/EmailSchedule');

const getAllSchedule = async (req, res) => {
    
    // const tenantId=req.params.tenantId;
    // console.log("inside get schedule",req.params);
    try {
        const AllSchedule = await EmailSchedules.find();
        // console.log("all dates",AllSchedule);
        return AllSchedule;
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = getAllSchedule; 