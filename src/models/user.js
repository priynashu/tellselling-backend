const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, required: true },
    password: { type: String },
    profilePhoto: { type: String, default: '' },
    tenantId: { type: String, default: '' },
    role: { type: String, default: 'Admin' },
    manager: { type: String, default: '' },
    jobTitle: { type: String, default: '' },
    location: { type: String, default: '' },
    lastLoginDate: { type: Date, default: new Date() },
    accountStatus: { type: String, default: 'Pending' },
    permissions:{type:[Object],default:[]}
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
