function deadState(rows, columns) {
  let out = [];
  for (let i = 0; i < rows; i++) {
    out.push([]);
    for (let j = 0; j < columns; j++) {
      out[i].push(0);
    }
  }
  return out;
}

function randState(rows, columns) {
  const dead = deadState(rows, columns);

  return dead.map((x) => x.map(() => (Math.random() < 0.5 ? 0 : 1)));
}

module.exports = {
  deadState: deadState,
  randState: randState,
};
