const mongoose = require('mongoose');

const tagsSchema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    tags: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

const Tags = mongoose.model('Tags', tagsSchema);

module.exports = Tags;
