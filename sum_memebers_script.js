tider = "";
var athletes = document.getElementsByClassName("leaderboard")[0].children[0]
  .children[1];
for (var i = 0; i < athletes.children.length; i++) {
  const time = athletes.children[i].children[2].innerText
    .replace("h", "")
    .replace("m", "")
    .split(" ")
    .map(e => Number(e));
  var tid = "";
  if (time.length <= 0) continue;
  else if (time.length == 1) {
    tid = "00:" + time[0];
  } else {
    tid = time[0] + ":" + (time[1] < 10 ? "0" + time[1] : time[1]);
  }
  id = athletes.children[i].children[1].children[1].href.split("/");
  id = id[id.length - 1];
  tider += `${id};${tid}\n`;
}
console.log(tider);
