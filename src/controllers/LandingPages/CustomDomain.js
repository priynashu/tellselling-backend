const LandingPage = require('../../models/LandingPages');

const getLandingPageCustomDomain = async (req, res) => {
  const { custom_domain } = req.params;
  try {
    const Data = await LandingPage.findOne({ custom_domain: custom_domain });
    return res.status(200).json(Data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getLandingPageCustomDomain;