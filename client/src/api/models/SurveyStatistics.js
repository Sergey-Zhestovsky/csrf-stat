import round from '../../utils/round';

class SurveyStatistic {
  constructor({ iterator, avgSeed, avgDelay, avgQueue, avgLoad }) {
    this.iterator = iterator;

    this.avgSeed = avgSeed;
    this.avgDelay = avgDelay;
    this.avgQueue = avgQueue;
    this.avgLoad = avgLoad;
  }

  static calculate(rowDataset = []) {
    let avgSeed = 0;
    let avgDelay = 0;
    let avgQueue = 0;
    let avgLoad = 0;

    rowDataset.forEach((data) => {
      avgSeed += data.speed ?? 0;
      avgDelay += data.delay ?? 0;
      avgQueue += data.queue ?? 0;
      avgLoad += data.load ?? 0;
    });

    return new SurveyStatistic({
      avgSeed: avgSeed / rowDataset.length || 0,
      avgDelay: avgDelay / rowDataset.length || 0,
      avgQueue: avgQueue / rowDataset.length || 0,
      avgLoad: avgLoad / rowDataset.length || 0,
      iterator: rowDataset.length || 0,
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

  static getMinMax(dataset = []) {
    if (dataset.length === 0) {
      return {
        minSpeed: 0,
        maxSpeed: 0,
        minDelay: 0,
        maxDelay: 0,
        minQueue: 0,
        maxQueue: 0,
        minLoad: 0,
        maxLoad: 0,
      };
    }

    const result = {
      minSpeed: dataset[0].speed,
      maxSpeed: dataset[0].speed,

      minDelay: dataset[0].delay,
      maxDelay: dataset[0].delay,

      minQueue: dataset[0].queue,
      maxQueue: dataset[0].queue,

      minLoad: dataset[0].load,
      maxLoad: dataset[0].load,
    };

    dataset.forEach((data) => {
      if (data.speed < result.minSpeed) result.minSpeed = data.speed;
      if (data.speed > result.maxSpeed) result.minSpeed = data.speed;

      if (data.delay < result.minDelay) result.minDelay = data.delay;
      if (data.delay > result.maxDelay) result.maxDelay = data.delay;

      if (data.queue < result.minQueue) result.minQueue = data.queue;
      if (data.queue > result.maxQueue) result.maxQueue = data.queue;

      if (data.load < result.minLoad) result.minLoad = data.load;
      if (data.load > result.maxLoad) result.maxLoad = data.load;
    });

    return result;
  }

  static calcStandardDeviation(dataset = [], statistics) {
    const variance = {
      speed: 0,
      delay: 0,
      queue: 0,
      load: 0,
    };

    dataset.forEach((data) => {
      variance.speed += Math.pow(data.speed - statistics.avgSeed, 2);
      variance.delay += Math.pow(data.delay - statistics.avgDelay, 2);
      variance.queue += Math.pow(data.queue - statistics.avgQueue, 2);
      variance.load += Math.pow(data.load - statistics.avgLoad, 2);
    });

    return {
      varianceSpeed: variance.speed,
      standardDeviationSeed: Math.sqrt(variance.speed / statistics.iterator) || 0,

      varianceDelay: variance.delay,
      standardDeviationDelay: Math.sqrt(variance.delay / statistics.iterator) || 0,

      varianceQueue: variance.queue,
      standardDeviationQueue: Math.sqrt(variance.queue / statistics.iterator) || 0,

      varianceLoad: variance.load,
      standardDeviationLoad: Math.sqrt(variance.load / statistics.iterator) || 0,
    };
  }

  static completeStatistics(dataset, statistics) {
    if (!statistics) statistics = SurveyStatistic.calculate(this.dataset);

    const minMax = SurveyStatistic.getMinMax(dataset);
    const standardDeviation = SurveyStatistic.calcStandardDeviation(dataset, statistics);

    return {
      speed: {
        min: round(minMax.minSpeed),
        max: round(minMax.maxSpeed),
        avg: round(statistics.avgSeed),
        variance: round(standardDeviation.varianceSpeed),
        standardDeviation: round(standardDeviation.standardDeviationSeed),
      },
      delay: {
        min: round(minMax.minDelay),
        max: round(minMax.maxDelay),
        avg: round(statistics.avgDelay),
        variance: round(standardDeviation.varianceDelay),
        standardDeviation: round(standardDeviation.standardDeviationDelay),
      },
      queue: {
        min: round(minMax.minQueue),
        max: round(minMax.maxQueue),
        avg: round(statistics.avgQueue),
        variance: round(standardDeviation.varianceQueue),
        standardDeviation: round(standardDeviation.standardDeviationQueue),
      },
      load: {
        min: round(minMax.minLoad),
        max: round(minMax.maxLoad),
        avg: round(statistics.avgLoad),
        variance: round(standardDeviation.varianceLoad),
        standardDeviation: round(standardDeviation.standardDeviationLoad),
      },
    };
  }
}

export default SurveyStatistic;
