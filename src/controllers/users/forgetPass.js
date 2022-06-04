require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



const forgetPass = async (req, res) => {
  const { email } = req.body;

  try {
    const forget = {
      email: email,
    };

    const forgetEncode = Buffer.from(JSON.stringify(forget)).toString('base64');
    const msg = {
      from: "support@tellselling.tech",// Use the email address or domain you verified above
      to: email, 
      subject: 'Test Email',
      text: 'Using sendgrid',  
      html:
        '<a href=' +
        '"' +
        `http://app-dev.tellselling.tech/reset?data=${forgetEncode}` +
        '" target = "_blank" >Click here to reset your password</a>',
    };
    

    sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });

    return res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'forgot pass Failed' });
  }
};

module.exports = forgetPass;
