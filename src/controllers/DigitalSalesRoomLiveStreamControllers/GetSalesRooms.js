const Salesrooms = require('../../models/SalesroomLiveStream');

const getSalesrooms = async (req, res) => {
    const { tenantId } = req.params;
    console.log("inside all live");
    try {
        const salesrooms = await Salesrooms.find({ tenantId });
        return res.status(200).json(salesrooms);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = getSalesrooms; 