const DigitalSalesRoomBasic = require('../../models/Salesroom');
const DigitalSalesRoomWeb = require('../../models/SalesroomWebinar');
const DigitalSalesRoomLive = require('../../models/SalesroomLiveStream');

const deleteSalesroom = async(req,res)=>{
    console.log("delete",req.body);
    try{
    if(req.body.type=="webinar"){
        const deleteRoom = await DigitalSalesRoomWeb.findOneAndDelete({link:req.body.link})
        console.log('deleted web!') ; 
        return res.status(200).json(deleteRoom);
    }
    else if(req.body.type=="live-stream"){
        const deleteRoom = await DigitalSalesRoomLive.findOneAndDelete({link:req.body.link})
        console.log('deleted live!') ; 
        return res.status(200).json(deleteRoom);
    }
    else{
        const deleteRoom = await DigitalSalesRoomBasic.findOneAndDelete({link:req.body.link})
        console.log('deleted basic!',req.body.link) ; 
        return res.status(200).json(deleteRoom);
    }
}
catch(error){
    // console.log(error);
        return res.status(500).json({ message: 'Something went wrong in delete salesroom' });
}

}

module.exports = deleteSalesroom
