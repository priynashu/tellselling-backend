const DigitalSalesRoom = require('../../models/SalesroomWebinar');

const getWebinar = async (req, res) => {
    
    const {link} = req.params;
    // console.log("inside get webinar link:",link);
    // try {

        const WebinarRoom = await  DigitalSalesRoom.findOne({link:link})
        // const recentPlan = await Billings.findOne({ tenantId: tenantId });
        // console.log("all webinars are",WebinarRoom);
        // console.log('Saved to Database!');
        return res.status(200).json(WebinarRoom);
        
        
        
    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ message: 'Something went wrong' });
    // }
}

module.exports = getWebinar; 