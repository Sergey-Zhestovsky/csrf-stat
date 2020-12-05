import AlgorithmService from './AlgorithmService';
import EnvironmentService from './EnvironmentService';

const environmentService = new EnvironmentService();

class QueryService {
  static delay = parseInt(process.env.REACT_APP_REQUEST_SPEED);

  constructor(algorithmId, environmentId) {
    this.queryAlgorithm = AlgorithmService.getQueryByAlgorithmId(algorithmId);
    this.withEnvironment = environmentService.getByEnvironmentId(environmentId);
    this.timeout = null;
  }

  recreate(algorithmId, environmentId) {
    this.stop();
    return new QueryService(algorithmId, environmentId);
  }

  start(callback = () => {}, onStop = () => {}, delay = QueryService.delay || 150) {
    this.timeout = setInterval(async () => {
      if (!this.queryAlgorithm || !this.withEnvironment) return;

      try {
        const data = await this.queryAlgorithm(this.withEnvironment());
        callback(data);
      } catch (error) {
        this.stop();
        onStop(error);
      }
    }, delay);
  }

  stop() {
    clearInterval(this.timeout);
  }
}

export default QueryService;
