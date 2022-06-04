const DigitalSalesRoom = require('../../models/DigitalSalesRoom');

const uploadDigitalSalesRoomData = async (req, res) => {
    try {
        const timestamp = new Date;  

        const newDigitalSalesRoomData = await DigitalSalesRoom.create({
                tenantId: req.body.tenantId,
                name: req.body.name ,
                description: req.body.description,
                tags: req.body.tags,
                thumbnail: req.body.thumbnail,
                video : req.body.video,
                sales_person_name: req.body.sales_person_name,
                contents: req.body.contents, //stores JSON
                cta: req.body.cta,// Array of checked options
                prospectus: req.body.prospectus,
                last_modified: timestamp.toString() , //date stored in string type
                created: timestamp.toString() // in string
            }
        )
        console.log('saved to database!') ;
        return res.status(200).json(newDigitalSalesRoomData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = uploadDigitalSalesRoomData ; 