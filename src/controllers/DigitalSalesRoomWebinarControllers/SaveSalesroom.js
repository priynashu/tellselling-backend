const DigitalSalesRoom = require('../../models/SalesroomWebinar');
const SaveSalesroom = async (req, res) => {
    try {
        const timestamp = new Date;  
        const updateSalesRoom = await DigitalSalesRoom.updateOne({link:req.body.link},{
            tenantId: req.body.tenantId, //String
            title: req.body.title, //String                        
            events: req.body.events,             
            eventPlace:req.body.eventPlace,
            meetingValues:req.body.meetingValues,
            eventType:req.body.eventType,
            dateTime:req.body.dateTime,
            access:req.body.access,
            description: req.body.description, // String
            tags: req.body.tags, // Array of String 
            thumbnail: req.body.thumbnail, // String
            link: req.body.link, // String
            welcome_message: req.body.welcome_message, //String in JSON
            sales_person: req.body.sales_person, //String
            contents: req.body.contents, // String in JSON
            prospects: req.body.prospects, // String in JSON
            cta: req.body.cta,// String in JSON
            last_modified: timestamp.toString(), //date stored in string type
            created: timestamp.toString(), // in string
            fullDate:req.body.fullDate,
            question:req.body.question,
            type:"webinar"
            }
        ) 
        return res.status(200).json(updateSalesRoom);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
} 

module.exports = SaveSalesroom ; 