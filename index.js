const request = require("superagent");

const config = require("./config");

function sendRequest() {
  const clientRef = "basav.example.com";

  let extAuth = config.FB_AUTH[`${clientRef}`];

  let clurl = "https://25372360d682.ngrok.io";

  let sData = {
    "key1": "value1",
    "key2": "value2",
  }

  request
    .post(clurl)
    .send(sData)
    .set(extAuth)
    .end((err, res) => {
      if (err) {
        console.log("Got error ", err);
      } else {
        console.log("Success ", res);
      }
    });
}

try {
  sendRequest();
} catch (err) {
  console.log("Caught exception ", err);
}
