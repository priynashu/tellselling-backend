const Resources = require('../../models/Resources');
const Salesrooms = require('../../models/Salesroom');
const SalesroomLiveStream = require('../../models/SalesroomLiveStream');
const SalesroomWebinar = require('../../models/SalesroomWebinar');
const getMostViewedResources = async (req, res) => {
  const { tenantId } = req.params;
  try {
    const resources = await Resources.find({ tenantId });
    const salesrooms = await Salesrooms.find({ tenantId });
    const salesroomsLiveStream = await SalesroomLiveStream.find({ tenantId });
    const salesroomsWebinar = await SalesroomWebinar.find({ tenantId });
    const data={
      resources,
      salesrooms,
      salesroomsLiveStream,
      salesroomsWebinar
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}; 

module.exports = getMostViewedResources;