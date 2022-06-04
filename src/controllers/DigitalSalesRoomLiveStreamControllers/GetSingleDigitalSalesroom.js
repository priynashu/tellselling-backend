const Salesroom = require('../../models/SalesroomLiveStream');

const getSalesroom = async (req, res) => {
  const { link } = req.params;
  console.log("single live",link);
  try {
    const salesroomData = await Salesroom.findOne({ link: link});
    console.log("live single",salesroomData);
    return res.status(200).json(salesroomData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getSalesroom ;