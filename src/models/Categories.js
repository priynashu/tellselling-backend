const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    categories: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;
