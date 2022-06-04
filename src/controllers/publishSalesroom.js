const Publish = require("../models/publish");

const publishSalesroom = async(req, res) => {
    console.log("publish salesroom", req.body);

    if (req.body.method == "create") {

        try {
            const publishData = await Publish.create({domains: req.body.domains, link: req.body.link, type: req.body.type, title: req.body.title, method: req.body.method})
            return res
                .status(200)
                .json(publishData)
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({message: 'Something went wrong'});
        }
    } else if (req.body.method == "update") {
        try {
            const publishData = await Publish.updateOne({link:req.body.link},{
                domains: req.body.domains
            })
            return res
                .status(200)
                .json(publishData)
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({message: 'Something went wrong'});
        }
    }
    else if(req.body.method=='get'){
        console.log("inside publish get");
        const publishData = await Publish.findOne({link:req.body.link})
        console.log(publishData,req.params.link);
        return res.status(200).json(publishData)
    }
}
module.exports = publishSalesroom