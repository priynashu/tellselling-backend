const Resources = require('../../models/Resources');

const getResources = async (req, res) => {
  const { tenantId } = req.params;
  try {
    const resources = await Resources.find({ tenantId });
    return res.status(200).json(resources);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getResources;
