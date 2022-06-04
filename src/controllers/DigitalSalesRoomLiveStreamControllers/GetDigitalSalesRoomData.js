const SalesroomData = require('../../models/SalesroomLiveStream');

const getSalesroomData = async (req, res) => {
  const { link } = req.body;

  try {
    const salesroomData = await SalesroomData.find({ link: link});
    return res.status(200).json(salesroomData);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getSalesroomData ;