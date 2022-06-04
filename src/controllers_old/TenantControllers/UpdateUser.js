const User = require('../../models/user');
const Roles = require('../../models/Roles');

const UpdateUser = async (req, res) => {
  const { userId, email, role, manager, jobTitle, location } = req.body;

  try {
    const selectedRole = await Roles.findOne({ userId });
    selectedRole.roleName = role;
    await selectedRole.save();

    const selectedUser = await User.findByIdAndUpdate(userId, {
      role,
      manager,
      jobTitle,
      location,
    });

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = UpdateUser;
