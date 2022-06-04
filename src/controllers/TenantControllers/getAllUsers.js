const Tenant = require('../../models/Tenant');
const User = require('../../models/user');
const Roles = require('../../models/Roles');

const getAllusers = async (req, res) => {
  const { tenantId } = req.params;
  try {
    const selectedTenant = await Tenant.findById(tenantId);
    const users = await User.find({ tenantId });
    const roles = await Roles.find({ tenantId });

    let sortedRoles = [];

    users.map((userData) => {
      const findRole = sortedRoles.find((roleData) => roleData.roleName === userData.role);

      if (findRole) {
        findRole.users.push(userData._id);
      } else {
        sortedRoles.push({ roleName: userData.role, users: [userData._id] });
      }
    });

    return res.status(200).json({ tenantData: selectedTenant, users, roles, sortedRoles });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = getAllusers;
