const d3 = require('d3-random');

const intervalA = (value, a) => {
  const min = 0;
  const max = a * 2;
  return Math.floor(value * (max - min + 1) + min);
};

const worker = (aQueue, aLoad) => {
  const getMetric = d3.randomNormal(0.5, 0.14);
  const queue = intervalA(getMetric(), aQueue);
  const load = intervalA(getMetric(), aLoad);

  return { queue, load };
};

module.exports = worker;
