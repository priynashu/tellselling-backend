const SalesroomData = require('../../models/Salesroom');

const getSalesroomData = async (req, res) => {
  const { link } = req.params;
  console.log("inside single salesroom");
  try {
    const salesroomData = await SalesroomData.findOne({ link: link});
    return res.status(200).json(salesroomData);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getSalesroomData ;