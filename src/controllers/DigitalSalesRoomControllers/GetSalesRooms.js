const Salesrooms = require('../../models/Salesroom');

const getSalesrooms = async (req, res) => {
    const { tenantId } = req.params;
    try {
        const salesrooms = await Salesrooms.find({ tenantId });
        return res.status(200).json(salesrooms);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = getSalesrooms; 