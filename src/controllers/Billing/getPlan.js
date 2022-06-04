const Billings = require('../../models/Billing');

const getPlan = async (req, res) => {
    const { tenantId } = req.params;
    console.log("billing",tenantId);
    try {
        const plan = await Billings.find({ tenantId });
        return res.status(200).json(plan);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
 
module.exports = getPlan; 