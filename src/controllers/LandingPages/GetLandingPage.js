const LandingPage = require('../../models/LandingPages');

const getLandingPage = async (req, res) => {
  const { link } = req.params;
  try {
    const Data = await LandingPage.findOne({ link: link});
    return res.status(200).json(Data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getLandingPage;