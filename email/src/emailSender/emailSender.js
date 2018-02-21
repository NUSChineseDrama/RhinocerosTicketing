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
    subject: "恋爱的犀牛-电子票 |E-ticket for Rhinoceros in Love",
    html:
    '<body style=""><div class="disclaimer"style="text-align:center;font-size:12px;color:#6C7A89;margin-bottom:20px;">Please use a mobile device to view the ticket if the page looks distorted to you<br/>如果页面看起来十分杂乱；请使用移动设备打开</div><div class="ticket" style=""><div class="ticket-header" style="text-align:center;font-size:30px;">Hi! ' +
    receiver.name +
    '</div><div class="ticket-body" style="background-color:#821313;"><div class="ticket-body__image" style="margin: auto;width: 50%;padding-top:30px;"><img src="https://preview.ibb.co/gET7mS/rhinocero.png" alt="RHINO_PIC" title="rhino" style="width:100%;"></div><div class="ticket-body__text" style="width:100%;vertical-align:top;text-align:center;font-size:20px;color:white;padding-bottom:5%;padding-top:30px;"><div class="ticket-body__text-time" style="">您要观看的演出是(Show Time)：<br/>' +
        receiver.showTime +
        '</div><div class="ticket-body__text-time" style="">您注册的票数 (Number of Tickets):&nbsp' +
            receiver.numberOfTix +
            ' </div><div class="ticket-body__text-venue" style="padding-top:10px;">地点(Address):<br/>Dance Atelier 2, Level 3,<br/>Stephen Riady Centre, University Town,<br/>2 College Ave West,<br/>Singapore 138607</div><div class="ticket-body__text-instruction" style="font-size:16px;padding-top:10px;">演出开始前15分钟开始入场<br/>出示下图的二维码作为入场凭据<br/>迟到者可能被拒绝入场<br/>多张票可重复扫描同个二维码</div></div><div class="ticket-body__QR" style="margin: auto;width: 200px;padding: 10px;"><img src="https://api.qrserver.com/v1/create-qr-code/?data=' + receiver.submissionId+'&amp;size=100x100" alt="QR_CODE" title="TICKET"width="200" align="middle"/></div></div></div></div></body>'
    //     filename: "rhinocero.png",
    //     path: "rhinocero.png",
    //     cid: "rhinocero.cc" //same cid value as in the html img src
    //   }
    // ]
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
