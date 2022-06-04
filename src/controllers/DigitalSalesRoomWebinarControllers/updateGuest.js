const DigitalSalesRoom  = require("../../models/SalesroomWebinar")

const updateGuest = async(req,res)=>{
    console.log("inside update guest",req.body);
    const currentSalesroom = await  DigitalSalesRoom.find({link:req.body.link})
    let currentGuestData = currentSalesroom[0].guests
    currentGuestData.push(req.body.guestData)
    // console.log("currentGuestData",currentGuestData[0].guests);
    try{
    const updateGuest = await DigitalSalesRoom.findOneAndUpdate({link:req.body.link},{guests:currentGuestData})
    return res.status(200).json(updateGuest);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });

    }

}
module.exports = updateGuest; 