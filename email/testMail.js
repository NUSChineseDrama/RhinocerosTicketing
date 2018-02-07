var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'williamshty@gmail.com',
    pass: 'azzdhkocctpogzur'
  }
});

var mailOptions = {
  from: 'williamshty@gmail.com',
  to: 'E0012644@u.nus.edu',
  subject: 'Sending Email using Node.js',
  html: '<b style = "color:red"> STY<b/>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});