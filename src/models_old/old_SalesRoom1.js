const mongoose = require('mongoose');

const salesRoom1Schema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    org: { type: String },
    dealName: { type: String },
    dealAmount: { type: Number },
    fileLink: { type: String },
    fileType: { type: String },
    salesActions: { type: [String] },
    createdBy: { type: String },
  },
  {
    timestamps: true,
  },
);

const SalesRoom1 = mongoose.model('SalesRoom1', salesRoom1Schema);

module.exports = SalesRoom1;
