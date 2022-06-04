const DigitalSalesRoom = require('../../models/SalesroomLiveStream');
const SaveSalesroom = async(req, res) => {
    try {
        const timestamp = new Date;
        const updateSalesRoom = await DigitalSalesRoom.updateOne({
            link: req.body.link,
        }, {
            tenantId: req.body.tenantId, //String
            title: req.body.title, //String
            platform: req.body.platform,
            stream_id: req.body.stream_id,
            events: req.body.events,
            description: req.body.description, // String
            tags: req.body.tags, // Array of String
            thumbnail: req.body.thumbnail, // String
            welcome_message: req.body.welcome_message, //String in JSON
            sales_person: req.body.sales_person, //String
            contents: req.body.contents, // String in JSON
            prospects: req.body.prospects, // String in JSON
            cta: req.body.cta, // String in JSON
            last_modified: timestamp.toString(), //date stored in string type
            created: timestamp.toString(), // in string
            fullDate: req.body.fullDate,
            question: req.body.question,
            type: "live-stream"
        })
        return res
            .status(200)
            .json(updateSalesRoom);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({message: 'Something went wrong'});
    }
}

module.exports = SaveSalesroom;