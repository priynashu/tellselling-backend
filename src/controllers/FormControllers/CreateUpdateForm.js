const Forms = require('../../models/Forms');

const CreateUpdateForm = async (req, res) => {
    console.log("form",req.body);
    if(req.body._id.length!=0)
    {
        try {
            const timestamp = new Date;
            // const _id=req.body._id
            const form = await Forms.findOneAndUpdate({_id:req.body._id},{
                formTitle: req.body.data.name, //String
                contents: req.body.contents, // String in JSON
                description:req.body.data.description,
                thumbnail:req.body.thumbnail
            })
            console.log('Saved to Database!');
            return res.status(201).json(form);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
        // console.log("update form");
        
    }
    else{
        try {
            const timestamp = new Date;
    
            const form = await Forms.create({
                tenantId: req.body.tenantId, //String
                formTitle: req.body.data.name, //String
                contents: req.body.contents, // String in JSON
                date: timestamp.toString(), // in string
                description:req.body.data.description,
                thumbnail:req.body.thumbnail
                
            })
            console.log('Saved to Database!');
            return res.status(200).json(form);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    }
    
}

module.exports = CreateUpdateForm; 