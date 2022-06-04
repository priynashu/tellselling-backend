const Forms = require('../../models/Forms');

const getForms = async (req, res) => {
    const { tenantId } = req.params;
    try {
        const forms = await Forms.find({ tenantId });
        return res.status(200).json(forms);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = getForms; 