const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const User = require('../../models/user');
const Roles = require('../../models/Roles');

const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);

const msg = {
  from: 'support@tellselling.tech',
  subject: 'Test Email',
  text: 'Using sendgrid',
};

const addUser = async (req, res) => {
  const { tenantId, email, role, manager, jobTitle, location } = req.body;
  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = await User.create({ email, tenantId, role, manager, jobTitle, location });

    await Roles.create({ roleName: role, userId: newUser._id, tenantId });

    //encrypting invitation data
    const invitation = {
      email: email,
      time: new Date().getTime(),
      tenantId: tenantId,
      role: role,
    };
    //base64
    invitation_data = Buffer.from(JSON.stringify(invitation)).toString('base64');
    //URL
    invitation_url = 'http://localhost:3000/signup?invite=' + invitation_data;

    await sgMail.send({
      ...msg,
      to: email,
      html: '<a href=' + '"' + invitation_url + '" target = "_blank" >Sign Up to Tellselling</a>',
    });

    return res.status(200).json({ status: 'Success', url: invitation_data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: 'Failed' });
  }
};

module.exports = addUser;
