const mongoose = require('mongoose');

const tenantSchema = mongoose.Schema(
  {
    tenantName: { type: String, required: true },
    subscriptionPlan: { type: String, default: '' },
  },
  {
    timestamps: true,
  },
);

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
