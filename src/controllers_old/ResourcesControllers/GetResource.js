const Resources = require('../../models/Resources');

const getResource = async (req, res) => {
  const { tenantId , resourceId } = req.params;

  try {
    const resource = await Resources.findOne({ _id: resourceId});

    return res.status(200).json(resource);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getResource ;
