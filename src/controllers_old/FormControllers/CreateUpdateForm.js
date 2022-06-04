const Forms = require('../../models/Forms');

const CreateUpdateForm = async (req, res) => {
    try {
        const timestamp = new Date;

        const form = await Forms.create({
            tenantId: req.body.tenantId, //String
            formTitle: req.body.title, //String
            content: req.body.contents, // String in JSON
            date: timestamp.toString() // in string
        })
        console.log('Saved to Database!');
        return res.status(200).json(form);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = CreateUpdateForm; 