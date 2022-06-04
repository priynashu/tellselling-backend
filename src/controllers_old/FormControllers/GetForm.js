const Form = require('../../models/Forms');

const getForm = async (req, res) => {
  const { link } = req.params;

  try {
    const formData = await Form.findOne({ link: link});

    return res.status(200).json(formData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getForm ;