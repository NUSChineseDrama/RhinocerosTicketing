var receivers = require("./emailReceivers.json")

function ticketsSigned() {
  var tixShow1 = 0
  var tixShow2 = 0
  var tixShow3 = 0

  for (let receiver of receivers) {
    if (receiver.showTime === "2018年3月16日 20:00 - 22:00")
      tixShow1 += parseInt(receiver.numberOfTix);
    else if (receiver.showTime === "2018年3月17日 14:00 - 16:00")
      tixShow2 += parseInt(receiver.numberOfTix);
    else tixShow3 += parseInt(receiver.numberOfTix);
  }

  console.log("16th March night: " + tixShow1);
  console.log("17th March afternoon: " + tixShow2);
  console.log("17th March night: " + tixShow3);
}

function checkDuplicate() {
    for(let receiver of receivers) {
        var emailCounter = 0
        for(let anotherReceiver of receivers) {
            if (receiver.email === anotherReceiver.email) emailCounter+=1
        }
        if(emailCounter>1) console.log(receiver.email)
    }
}

// ticketsSigned()
// checkDuplicate()
