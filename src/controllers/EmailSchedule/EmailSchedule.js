// const sgMail = require('@sendgrid/mail');
// const { response } = require('express');
// const API_KEY = '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'
// sgMail.setApiKey(API_KEY)
// const schedule = require('node-schedule')
// const EmailSchedule = async (req, res) => {
//     const message={
//       to:"priyanshushah112001@gmail.com",
//       from:'pmjshah11@gmail.com',
//       subject:"Who is best soft dev",
//       text:'Best software dev is priyanshu and not sundar',
//       html:'<h1>Priyanshu Shah</h1>'
//     }

//     sgMail.send(message).then(response=>console.log("email sent....")).catch(err=>console.log("error in email sent",err))
//     console.log("inside email schedule");    

    
// };
const EmailSchedule = async (value) => {
  console.log("value to send",value);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: `${value.to}`,
  from: `support@tellselling.tech`, // Use the email address or domain you verified above
  subject:`${value.subject}`,  
  html:`${value.text}`,
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}
module.exports = EmailSchedule; 