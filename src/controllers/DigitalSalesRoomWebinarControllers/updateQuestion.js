const DigitalSalesRoom = require('../../models/SalesroomWebinar');
const updateQuestion = async (req, res) => {
    console.log("inside update web question",req.body);
    try {
        const timestamp = new Date;  
        const updateSalesRoomQuestion = await DigitalSalesRoom.findOneAndUpdate({link:req.body.link},{question:req.body.question}) 
        return res.status(200).json(updateSalesRoomQuestion);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
} 

module.exports = updateQuestion; 