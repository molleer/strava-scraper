const express = require("express");
const bodyParser = require("body-parser");
const parseString = require("xml2js").parseString;

const app = express();
app.use(bodyParser.text({ limit: "100mb" }));

app.get("/", (req, res) => {
  res.send(
    '<html>  \
  <head></head> \
  <body> \
  <input type="text"> \
  <ol> \
  <li>Hi there</li> \
  <li>Hello there</li> \
  </ol></body>\
  </html>',
  );
});

app.post("/update", (req, res) => {
  parseString("<body>" + req.body + "</body>", (err, body) => {
    if (err) console.log(err);
    console.log(body);
  });
  //console.log(req.body);
  res.status(200);
});

/**
var req = new XMLHttpRequest();
req.open("POST", "http://localhost:8080/update");
req.setRequestHeader("Content-Type", "text/plain");
req.send(document.body.innerHTML);
 */

app.listen(8080);
