const fs = require("fs");

const athletes = fs
  .readFileSync("athletes.csv")
  .toString()
  .split("\n")
  .map(line => {
    const sp = line.split(",");
    return { id: sp[0], weight: Number(sp[1]) };
  });

const wRandomPick = entries => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < entries.length; i++) {
    sum += entries[i].weight;
  }

  const num = Math.random();
  for (var i = 0; i < entries.length; i++) {
    count += entries[i].weight;
    if (count / sum > num) {
      return entries[i].id;
    }
  }
  throw "Failed for some reason";
};

let winCount = {};
for (let i = 0; i < athletes.length; i++) {
  winCount[athletes[i].id] = 0;
}

const n = 1000000;
for (var i = 0; i < n; i++) {
  winCount[wRandomPick(athletes)] += 1;
}

let sum = 0;
for (let i = 0; i < athletes.length; i++) {
  sum += athletes[i].weight;
}

for (let i = 0; i < athletes.length; i++) {
  console.log(
    `${athletes[i].id} (${athletes[i].weight}) : ${
      (winCount[athletes[i].id] / n) * sum
    }`,
  );
}
