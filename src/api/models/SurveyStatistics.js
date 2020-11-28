class SurveyStatistic {
  constructor({ avgSeed, avgDelay, avgQueue, avgLoad, iterator }) {
    this.avgSeed = avgSeed;
    this.avgDelay = avgDelay;
    this.avgQueue = avgQueue;
    this.avgLoad = avgLoad;
    this.iterator = iterator;
  }

  static calculate(rowDataset = []) {
    let avgSeed = 0;
    let avgDelay = 0;
    let avgQueue = 0;
    let avgLoad = 0;

    rowDataset.map((data) => {
      avgSeed += data.speed ?? 0;
      avgDelay += data.delay ?? 0;
      avgQueue += data.queue ?? 0;
      avgLoad += data.load ?? 0;
    });

    return new SurveyStatistic({
      avgSeed: avgSeed / rowDataset.length,
      avgDelay: avgDelay / rowDataset.length,
      avgQueue: avgQueue / rowDataset.length,
      avgLoad: avgLoad / rowDataset.length,
      iterator: rowDataset.length,
    });
  }

  append(queryResult) {
    const avgSeed = this.newAvg(this.avgSeed, queryResult.speed);
    const avgDelay = this.newAvg(this.avgSeed, queryResult.delay);
    const avgQueue = this.newAvg(this.avgSeed, queryResult.queue);
    const avgLoad = this.newAvg(this.avgSeed, queryResult.load);
    const iterator = this.iterator + 1;

    return new SurveyStatistic({
      avgSeed,
      avgDelay,
      avgQueue,
      avgLoad,
      iterator,
    });
  }

  newAvg(oldAvg, newValue, iterator = this.iterator) {
    return (oldAvg * iterator + newValue) / (iterator + 1);
  }
}

export default SurveyStatistic;
