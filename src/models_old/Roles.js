const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
  roleName: { type: String, default: 'Admin' },
  userId: { type: String, required: true },
  tenantId: { type: String, required: true },
});

const Roles = mongoose.model('Roles', rolesSchema);

module.exports = Roles;
