const mongoose = require('mongoose');

const publishSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
    domains: { type: [String], required: false },
    link: { type: String, required: true },    
  },
  {
    timestamps: true,
  },
);

const Publishs = mongoose.model('publish', publishSchema);

module.exports = Publishs;
