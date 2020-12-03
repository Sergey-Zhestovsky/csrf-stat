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
      completeStatistics: surveyDataset.getCompleteStatistics(),
      favorite: false,
      date: Date.now(),
    });
  }

  static async getPreview(reverse = true) {
    const list = await historyProvider.getAll();
    const result = [];

    for (let i in list) {
      const el = list[i];
      result.push({
        id: i,
        algorithm: el.algorithm,
        environment: el.environment,
        samples: el.dataset.length,
        favorite: el.favorite,
        date: el.date,
      });
    }

    if (reverse) return result.reverse();
    return result;
  }

  static async get(id) {
    const result = await historyProvider.getById(id);

    return {
      algorithm: result.algorithm,
      environment: result.environment,
      surveyDataset: new SurveyDataset(result.dataset, new SurveyStatistics(result.statistics)),
      completeStatistics: result.completeStatistics,
      favorite: result.favorite,
      date: result.date,
    };
  }

  static async addToFavorite(id) {
    return historyProvider.edit(id, { favorite: true });
  }

  static async removeFromFavorite(id) {
    return historyProvider.edit(id, { favorite: false });
  }

  static async delete(id) {
    return historyProvider.removeById(id);
  }

  static async clear() {
    return historyProvider.removeAll();
  }
}

export default HistoryService;
