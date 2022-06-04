const mongoose = require('mongoose');

const filterSchema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    categories: { type: [Object], default: [] },
    tags: { type: [Object], default: [] },
    content_areas: { type: [Object], default: [] },
    internal_uses: { type: [Object], default: [] },
    owner: { type: [String], default: [] },
  },
  {
    timestamps: true,
  },
);

const ResourceFilters = mongoose.model('ResourceFilters', filterSchema);

module.exports = ResourceFilters;