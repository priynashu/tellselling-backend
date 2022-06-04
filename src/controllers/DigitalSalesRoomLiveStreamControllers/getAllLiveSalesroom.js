const SalesroomData = require('../../models/SalesroomLiveStream');

const getSalesroomData = async (req, res) => {
  const { tenantId} = req.params;
    console.log("all live salesrooms:",tenantId);
  try {
    const salesroomData = await SalesroomData.find({ tenantId: tenantId});
    return res.status(200).json(salesroomData);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getSalesroomData ;