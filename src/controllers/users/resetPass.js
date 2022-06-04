const bcrypt = require('bcryptjs');

const User = require('../../models/user');

const resetPass = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const currentUser = await User.findOne({ email });

    if (!currentUser) return res.status(404).json({ message: 'User not found' });

    const hashedNewPassword = await bcrypt.hash(newPassword, 12);
    currentUser.password = hashedNewPassword;

    await currentUser.save();

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Failed' });
  }
};

module.exports = resetPass;
