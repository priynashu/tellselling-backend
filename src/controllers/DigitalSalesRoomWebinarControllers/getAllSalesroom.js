const DigitalSalesRoom = require('../../models/SalesroomWebinar');

const getWebinar = async (req, res) => {
    
    const {tenantId} = req.params;
    console.log("inside get all sales tenantID:",tenantId);
    // try {

        const allWebinars = await  DigitalSalesRoom.find({tenantId:tenantId})
        // const recentPlan = await Billings.findOne({ tenantId: tenantId });
        console.log("all webinars are",allWebinars);
        // console.log('Saved to Database!');
        return res.status(200).json(allWebinars);
        
        
        
    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ message: 'Something went wrong' });
    // }
}

module.exports = getWebinar; 