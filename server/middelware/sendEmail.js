const nodemailer = require('nodemailer')
exports.sendEmail = async (options)=>{
  var transport = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    // secureConnection: true,
    // port: 587,
    // auth: {
    //     user: 'drake.denesik46@ethereal.email',
    //     pass: 'tj14VPv2NMf1Q37Daw'
    // }
  
    host: "smtp.elasticemail.com",
    port: 2525,
    secureConnection: true,
    auth: {
      user: "rickygathwal@gmail.com",
      pass: "52D5651301C72EE2CBC94F899098779599F7"
    }
  });
      
const mailOptions = {
from :process.env.EMAIL_USER,
to: options.email,
subject: options.subject,
text: options.message,
} 

transport.sendMail(mailOptions, function(error, response){
  if(error){
      console.log(error);
  }else{
      console.log("Message sent: " + response.accepted);
  }

  // if you don't want to use this transport object anymore, uncomment following line
  //smtpTransport.close(); // shut down the connection pool, no more messages
});


}