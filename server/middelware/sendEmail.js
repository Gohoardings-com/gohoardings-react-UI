const nodemailer = require('nodemailer')
exports.sendEmail = async (options)=>{
  var transport = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASS
    // }
    // service :  process.env.EMAIL_SERVICE
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d62d00c0ca3d10",
      pass: "c4c5f4dc8ec725"
    }
  });
      
const mailOptions = {
from : process.env.SMPT_EMAIL,
to: options.email,
subject: options.subject.subject,
text: options.message,
}
await transport.sendMail(mailOptions);
}