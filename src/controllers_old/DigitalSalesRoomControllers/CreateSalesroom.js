const DigitalSalesRoom = require('../../models/Salesroom');

const CreateSalesroom = async (req, res) => {
    try {
        const timestamp = new Date;  

        const newSalesRoom = await DigitalSalesRoom.create({
                tenantId: req.body.tenantId, //String
                title: req.body.title , //String
                description: req.body.description, //String
                tags: req.body.tags, // Array of String 
                thumbnail: req.body.thumbnail, //String
                link: req.body.link, //String
                welcome_message : req.body.welcome_message, //String in JSON
                sales_person: req.body.sales_person, //String
                contents: req.body.contents, // String in JSON
                prospects: req.body.prospects, // String in JSON
                cta: req.body.cta,// String in JSON
                last_modified: timestamp.toString() , //date stored in string type
                created: timestamp.toString() // in string
            }
        )  
        console.log('Saved to Database!') ; 
        return res.status(200).json(newSalesRoom);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
} 

module.exports = CreateSalesroom ; 