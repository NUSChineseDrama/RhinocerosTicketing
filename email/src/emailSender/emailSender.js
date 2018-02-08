var fs = require('fs')
var nodemailer = require('nodemailer')
const auth = require('../authentication/authentication.json')
var receivers = require('../emailReceivers/emailReceivers.json')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth
})

for (let receiver of receivers) {
  var mailOptions = {
    from: 'williamshty@gmail.com',
    to: receiver.email,
    subject: 'Test Ticket',
    html: '<div class="ticket-header">Hi!' +receiver.name + '</div><div class="ticket-body"><div class="ticket-body__QR"></div> <div class="ticket-body__text">The Show You Signed Up For is:'+receiver.showTime + '</div></div>'
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}