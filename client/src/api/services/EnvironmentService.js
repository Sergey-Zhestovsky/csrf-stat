import { variant as environmentVariants } from '../../data/environments.json';
import { data as dataSample } from '../../data/data-sample.json';
import environmentPathsConfig from '../../config/environment-paths.json';

class EnvironmentService {
  constructor({ smallDataSize = 100, bigDataSize } = {}) {
    this.smallData = dataSample.slice(0, smallDataSize);
    this.bigData = bigDataSize ? dataSample.slice(0, bigDataSize) : dataSample;
    this.paths = {
      package: environmentPathsConfig.package,
      logic: environmentPathsConfig.logic,
    };
  }

  getSmall = () => {
    return {
      url: this.paths.package,
      data: this.smallData,
    };
  };

  getBig = () => {
    return {
      url: this.paths.package,
      data: this.bigData,
    };
  };

  getMixed = () => {
    const variants = [this.getSmall, this.getBig];
    return variants[[Math.floor(Math.random() * variants.length)]]();
  };

  getLogic = () => {
    return {
      url: this.paths.logic,
    };
  };

  getReal = () => {
    const variants = [this.getSmall, this.getBig, this.getLogic];
    return variants[[Math.floor(Math.random() * variants.length)]]();
  };

  getByEnvironmentId(id) {
    switch (id) {
      case environmentVariants.small:
        return this.getSmall;

      case environmentVariants.big:
        return this.getBig;

      case environmentVariants.mixed:
        return this.getMixed;

      case environmentVariants.logic:
        return this.getLogic;

      case environmentVariants.real:
        return this.getReal;

      default:
        return null;
    }
  }
}

export default EnvironmentService;
