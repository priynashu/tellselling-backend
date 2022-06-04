const Tags = require('../../models/Tags');

const getTags = async (req, res) => {
  const { tenantId } = req.params;
  try {
    const selectedTags = await Tags.findOne({ tenantId });
    console.log(selectedTags) ; 
    if (selectedTags) return res.status(200).json(selectedTags);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const addTags = async (req, res) => {
  const { tenantId, tags } = req.body;

  try {
    const selectedTags = await Tags.findOne({ tenantId });

    if (!selectedTags) {
      const newTags = await Tags.create({ tenantId, tags });
      return res.status(200).json(newTags);
    } else {
      const prevTags = selectedTags.tags;
      selectedTags.tags = prevTags.concat(tags);
      await selectedTags.save();
      return res.status(200).json(selectedTags);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { getTags, addTags };
