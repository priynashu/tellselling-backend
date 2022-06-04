const mongoose = require('mongoose');

const billingSchema = mongoose.Schema(
  {
    tenantId: { type: String, required: true },
    planType: { type: String, required: true },
    features: { type: [String], required: true },
    cost: { type: String, required: true },
    beginDate: { type: String, required: true },
    expiryDate: { type: String, required: true },
    validity: { type: String, required: true },
    customerId:{ type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Billings = mongoose.model('billing', billingSchema);

module.exports = Billings;
