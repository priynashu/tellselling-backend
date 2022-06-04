const Salesroom = require('../../models/SalesroomWebinar');

const getSalesroom = async (req, res) => {
  const { link } = req.params;
  console.log("single web",link);
  try {
    const salesroomData = await Salesroom.findOne({ link: link});
    console.log("web single",salesroomData);
    return res.status(200).json(salesroomData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getSalesroom ;