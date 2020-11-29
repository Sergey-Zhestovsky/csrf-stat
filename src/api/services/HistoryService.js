import HistoryProvider from '../providers/HistoryProvider';
import SurveyDataset from '../models/SurveyDataset';
import SurveyStatistics from '../models/SurveyStatistics';

const historyProvider = new HistoryProvider();

class HistoryService {
  static async save(algorithm, environment, surveyDataset) {
    return historyProvider.add({
      algorithm,
      environment,
      dataset: surveyDataset.dataset,
      statistics: surveyDataset.statistics,
    });
  }

  static async getPreview() {
    const list = await historyProvider.getAll();
    const result = [];

    for (let i in list) {
      const el = list[i];
      result.push({
        id: i,
        algorithm: el.algorithm,
        environment: el.environment,
        statistics: el.statistics,
      });
    }

    return result;
  }

  static async get(id) {
    const result = await historyProvider.getById(id);
    return {
      algorithm: result.algorithm,
      environment: result.environment,
      surveyDataset: new SurveyDataset(result.dataset, new SurveyStatistics(result.statistics)),
    };
  }
}

export default HistoryService;
