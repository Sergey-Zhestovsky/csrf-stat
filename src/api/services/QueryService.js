import AlgorithmService from './AlgorithmService';
import EnvironmentService from './EnvironmentService';

const environmentService = new EnvironmentService();

class QueryService {
  constructor(algorithmId, environmentId) {
    this.queryAlgorithm = AlgorithmService.getQueryByAlgorithmId(algorithmId);
    this.withEnvironment = environmentService.getByEnvironmentId(environmentId);
    this.timeout = null;
  }

  recreate(algorithmId, environmentId) {
    this.stop();
    return new QueryService(algorithmId, environmentId);
  }

  start(callback, delay = 150) {
    this.timeout = setInterval(async () => {
      if (!this.queryAlgorithm || !this.withEnvironment) return;
      const data = await this.queryAlgorithm(this.withEnvironment());
      callback(data);
    }, delay);
  }

  stop() {
    clearInterval(this.timeout);
  }
}

export default QueryService;
