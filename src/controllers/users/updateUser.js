const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const { uploadFile } = require('../../utils/uploadFile');

const update = async (req, res) => {
  const { profilePhoto, firstName, lastName, email, currentPassword, newPassword } = req.body;
  // console.log("user update",req.body);
  try {
    const currentUser = await User.findOne({ email });

    if (!currentUser) return res.status(404).json({ message: 'User not found' });

    if (newPassword) {
      const isPasswordCorrect = await bcrypt.compare(currentPassword, currentUser.password);
      if (!isPasswordCorrect) return res.status(400).json({ message: 'Incorrect Password' });

      const hashedNewPassword = await bcrypt.hash(newPassword, 12);

      currentUser.password = hashedNewPassword;
    }

    currentUser.firstName = firstName;
    currentUser.lastName = lastName;

    if (profilePhoto) {
      const uploadRes = await uploadFile(profilePhoto);
      currentUser.profilePhoto = uploadRes.secure_url;
    }

    await currentUser.save();

    return res.status(200).json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Image Upload Failed' });
  }
};

module.exports = update;
