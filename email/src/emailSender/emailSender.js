var fs = require("fs");
var nodemailer = require("nodemailer");
const auth = require("../authentication/authentication.json");
var receivers = require("../emailReceivers/emailReceivers.json");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: auth
});

for (let receiver of receivers) {
  var mailOptions = {
    from: "NUS Chinese Drama",
    to: receiver.email,
    subject: "恋爱的犀牛-电子票 | E-ticket for Rhinoceros in Love",
    html:'<body style="box-sizing: border-box;"><div class="ticket" style=""><div class="ticket-header" style="text-align:center;font-size:30px;">Hi!&nbsp' + receiver.name + '</div><div class="ticket-body" style="background-color:#ff0012;"><div class="ticket-body__QR" style="display:inline-block;padding-top:8%;padding-bottom:5%;padding-left:2%"><img src="https://api.qrserver.com/v1/create-qr-code/?data=' + receiver.submissionId+'&amp;size=100x100" alt="" title="TICKET"width="160" height="160" /></div><div class="ticket-body__text" style="display:inline-block;width:75%;vertical-align:top;text-align:center;font-size:20px;color:white;padding-top:5%;padding-bottom:5%"><div class="ticket-body__text-time" style="">您要观看的演出是&nbsp(Show Time)：<br/>' + receiver.showTime + '</div><div class="ticket-body__text-venue" style="margin-top:20px;">地点&nbsp(Address)：Dance Atelier 2, Level 3,<br/>Stephen Riady Centre, University Town,<br/>2 College Ave West,<br/>Singapore 138607</div><div class="ticket-body__text-instruction" style="font-size:16px;margin-top:20px;">演出开始前15分钟开始入场&nbsp出示左边的二维码作为入场凭据 <br/>迟到者可能被拒绝入场</div></div><div class="ticket-body__image" style="display:inline-block;"><img src="https://lh5.googleusercontent.com/GnJdH87LYFUTl800_zGYHGa6ovQZl0bd-oeUHWnH44K0V7R9jfMDW-tCIJl6-IRskxTTsDzQ3HB6xpEwDPgn=w1919-h918-rw" alt="" title="rhino" style="width:100%;"/></div></div></div></div></body>'
    // attachments: [
    //   {
    //     filename: "rhinocero.png",
    //     path: "rhinocero.png",
    //     cid: "rhinocero.cc" //same cid value as in the html img src
    //   }
    // ]
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
