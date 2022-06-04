const LandingPage = require('../../models/LandingPages');

const getLandingPages = async (req, res) => {
  const { tenantId } = req.params;
  try {
    const Data = await LandingPage.findOne({ tenantId: tenantId});
    return res.status(200).json(Data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getLandingPages;