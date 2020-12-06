const express = require("express");
const bodyParser = require("body-parser");
const html2json = require("html2json").html2json;

const app = express();
app.use(bodyParser.text({ limit: "100mb" }));

app.post("/", (req, res) => {
  times = html2json(req.body).child[1].child[3].child;
  var hours = 0;
  var minutes = 0;
  for (var i = 0; i < times.length; i++) {
    if (!times[i].child[5].child) continue;
    if (times[i].child[5].child.length > 2) {
      hours += Number(times[i].child[5].child[0].text);
      minutes += Number(times[i].child[5].child[2].text);
    } else {
      minutes += Number(times[i].child[5].child[0].text);
    }
  }
  console.log(hours + Math.floor(minutes / 60), minutes % 60);
  res.status(200);
});

/**
var req = new XMLHttpRequest();
req.open("POST", "http://localhost:8080");
req.setRequestHeader("Content-Type", "text/plain");
req.send(document.getElementsByClassName("leaderboard")[0].innerHTML);
 */

app.listen(8080);
