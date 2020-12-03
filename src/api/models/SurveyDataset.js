import QueryResult from './QueryResult';
import SurveyStatistic from './SurveyStatistics';
import chartModes from '../../data/chart-modes.json';

class SurveyDataset {
  constructor(dataset = [], statistics) {
    this.dataset = dataset.map((el, i) => new QueryResult({ ...el, position: i + 1 }));
    this.statistics = statistics ?? SurveyStatistic.calculate(this.dataset);
  }

  get Size() {
    return this.dataset.length;
  }

  append(queryResult) {
    this.dataset = [
      ...this.dataset,
      new QueryResult({ ...queryResult, position: this.dataset.length + 1 }),
    ];
    this.statistics = this.statistics.append(queryResult);
    return this;
  }

  getCompleteStatistics() {
    return SurveyStatistic.completeStatistics(this.dataset, this.statistics);
  }

  isEmpty() {
    return this.dataset.length === 0;
  }

  drop() {
    return new SurveyDataset([]);
  }

  generateChartData(fieldName) {
    return this.dataset.map((el, i) => [i + 1, el[fieldName]]);
  }

  getChartData(chartMode) {
    switch (chartMode) {
      case chartModes.off:
        return [];
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
