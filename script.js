var h = 0,
  m = 0;
var athletes = document.getElementsByClassName("leaderboard")[0].children[0]
  .children[1];
for (var i = 0; i < athletes.children.length; i++) {
  const time = athletes.children[i].children[2].innerText
    .replace("h", "")
    .replace("m", "")
    .split(" ")
    .map(e => Number(e));
  if (time.length <= 0) continue;
  else if (time.length == 1) m += time[0];
  else {
    h += time[0];
    m += time[1];
  }
}
console.log(h + Math.floor(m / 60), m % 60);
