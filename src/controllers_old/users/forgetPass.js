const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);

const msg = {
  from: 'support@tellselling.tech',
  subject: 'Test Email',
  text: 'Using sendgrid',
};

const forgetPass = async (req, res) => {
  const { email } = req.body;

  try {
    const forget = {
      email: email,
    };
    const forgetEncode = Buffer.from(JSON.stringify(forget)).toString('base64');

    await sgMail.send({
      ...msg,
      to: email,
      html:
        '<a href=' +
        '"' +
        `http://localhost:3000/reset?data=${forgetEncode}` +
        '" target = "_blank" >Click here to reset your password</a>',
    });

    return res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'Failed' });
  }
};

module.exports = forgetPass;
