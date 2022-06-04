const DigitalSalesRoom = require('../../models/SalesroomWebinar');
const Salesrooms = require('../../models/SalesroomLiveStream');
const getLiveStreaming = async (req, res) => {
    // console.log("inside live create",req.body);
    const {link} = req.params;
    console.log("inside get live link:",req.params);
    // try {

        const LiveRoom = await  Salesrooms.findOne({link:link})
        // console.log("all webinars are",allWebinarRooms);
        // console.log('Saved to Database!');
        return res.status(200).json(LiveRoom);
        
        
        
    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ message: 'Something went wrong' });
    // }
}

module.exports = getLiveStreaming; 