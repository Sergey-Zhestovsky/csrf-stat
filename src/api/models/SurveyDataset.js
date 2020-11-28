import QueryResult from './QueryResult';
import SurveyStatistic from './SurveyStatistics';
import chartModes from '../../data/chart-modes.json';

class SurveyDataset {
  constructor(dataset = []) {
    this.dataset = dataset.map((el) => new QueryResult(el));
    this.statistics = SurveyStatistic.calculate(this.dataset);
  }

  append(queryResult) {
    this.dataset = [...this.dataset, new QueryResult(queryResult)];
    this.statistics = this.statistics.append(queryResult);
  }

  isEmpty() {
    return this.dataset.length === 0;
  }

  // getSpeedChart() {
  //   return this.dataset.map((el, i) => [i + 1, el.speed]);
  // }

  // getDelayChart() {
  //   return this.dataset.map((el, i) => [i + 1, el.delay]);
  // }

  // getQueueChart() {
  //   return this.dataset.map((el, i) => [i + 1, el.queue]);
  // }

  // getLoadChart() {
  //   return this.dataset.map((el, i) => [i + 1, el.load]);
  // }

  generateChartData(fieldName) {
    return this.dataset.map((el, i) => [i + 1, el[fieldName]]);
  }

  getChartData(chartMode) {
    switch (chartMode) {
      case chartModes.speed:
        return this.generateChartData('speed');
      case chartModes.delay:
        return this.generateChartData('delay');
      case chartModes.queue:
        return this.generateChartData('queue');
      case chartModes.load:
        return this.generateChartData('load');
      default:
        return [];
    }
  }
}

export default SurveyDataset;
