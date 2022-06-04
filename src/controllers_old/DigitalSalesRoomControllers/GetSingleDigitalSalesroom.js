const Salesroom = require('../../models/Salesroom');

const getSalesroom = async (req, res) => {
  const { link } = req.params;

  try {
    const salesroomData = await Salesroom.findOne({ link: link});
    return res.status(200).json(salesroomData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getSalesroom ;