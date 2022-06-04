const Categories = require('../../models/Categories');

const getCategories = async (req, res) => {
  const { tenantId } = req.params;
  try {
    const selectedCategories = await Categories.findOne({ tenantId });
    if (selectedCategories) return res.status(200).json(selectedCategories);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const addCategory = async (req, res) => {
  const { tenantId, categories } = req.body;

  console.log(tenantId, categories);

  try {
    const selectedCategories = await Categories.findOne({ tenantId });

    if (!selectedCategories) {
      const newCategories = await Categories.create({ tenantId, categories });
      return res.status(200).json(newCategories);
    } else {
      const prevCategories = selectedCategories.categories;
      selectedCategories.categories = prevCategories.concat(categories);
      await selectedCategories.save();
      return res.status(200).json(selectedCategories);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { addCategory, getCategories };
