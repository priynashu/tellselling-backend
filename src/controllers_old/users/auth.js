const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const User = require('../../models/user');
const Tenant = require('../../models/Tenant');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser || existingUser.accountStatus !== 'Active')
      return res.status(404).json({ message: 'User not found' });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Incorrect Password' });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, JWT_SECRET, {
      expiresIn: '1d',
    });

    existingUser.lastLoginDate = new Date();
    await existingUser.save();

    return res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser?.accountStatus === 'Active')
      return res.status(404).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    if (existingUser?.accountStatus === 'Pending' || existingUser?.accountStatus === 'Removed') {
      existingUser.firstName = firstName;
      existingUser.lastName = lastName;
      existingUser.password = hashedPassword;
      existingUser.accountStatus = 'Active';
      await existingUser.save();

      const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, JWT_SECRET, {
        expiresIn: '1d',
      });
      return res.status(200).json({ user: existingUser, token: token });
    }

    const resultUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountStatus: 'Active',
    });

    const newTenant = await Tenant.create({ tenantName: email });

    resultUser.tenantId = newTenant._id;
    await resultUser.save();

    const token = jwt.sign({ email: resultUser.email, id: resultUser._id }, JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json({ user: resultUser, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.params;

  try {
    const selectedUser = await User.findOne({ email });
    selectedUser.accountStatus = 'Removed';
    await selectedUser.save();

    return res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  login: login,
  signup: signup,
  deleteUser: deleteUser,
};
