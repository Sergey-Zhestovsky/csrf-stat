import * as connectors from '../connector';
import { variant as algorithmVariants } from '../../data/algorithms.json';

class AlgorithmService {
  static processResponse({ speed = 0, timestamp, queue = 0, load = 0 }) {
    return {
      speed,
      delay: Date.now() - timestamp - speed,
      queue,
      load,
    };
  }

  static async queryDoubleCookies({ url, data, ...config }) {
    const { data: response } = await connectors.doubleCookiesConnector.post(url, data, config);
    return AlgorithmService.processResponse(response);
  }

  static async queryEncryptedToken({ url, data, ...config }) {
    const { data: response } = await connectors.encryptedTokenConnector.post(url, data, config);
    return AlgorithmService.processResponse(response);
  }

  static async queryAuthorizationHeader({ url, data, ...config }) {
    const { data: response } = await connectors.authorizationHeaderConnector.post(
      url,
      data,
      config
    );
    return AlgorithmService.processResponse(response);
  }

  static async querySecureCookies({ url, data, ...config }) {
    const { data: response } = await connectors.secureCookiesConnector.post(url, data, config);
    return AlgorithmService.processResponse(response);
  }

  static async queryFormSigning({ url, data, ...config }) {
    const { data: response } = await connectors.formSigningConnector.post(url, data, config);
    return AlgorithmService.processResponse(response);
  }

  static async queryDomainTable({ url, data, ...config }) {
    const { data: response } = await connectors.domainTableConnector.post(url, data, config);
    return AlgorithmService.processResponse(response);
  }

  static async queryClientIntermediary({ url, data, ...config }) {
    const { data: response } = await connectors.clientIntermediaryConnector.post(url, data, config);
    return AlgorithmService.processResponse(response);
  }

  static async queryTransmissionAssurance({ url, data, ...config }) {
    const { data: response } = await connectors.transmissionAssuranceConnector.post(
      url,
      data,
      config
    );
    return AlgorithmService.processResponse(response);
  }

  static getQueryByAlgorithmId(id) {
    switch (id) {
      case algorithmVariants.doubleCookies:
        return AlgorithmService.queryDoubleCookies;

      case algorithmVariants.encryptedToken:
        return AlgorithmService.queryEncryptedToken;

      case algorithmVariants.authorizationHeader:
        return AlgorithmService.queryAuthorizationHeader;

      case algorithmVariants.secureCookies:
        return AlgorithmService.querySecureCookies;

      case algorithmVariants.formSigning:
        return AlgorithmService.queryFormSigning;

      case algorithmVariants.domainTable:
        return AlgorithmService.queryDomainTable;

      case algorithmVariants.clientIntermediary:
        return AlgorithmService.queryClientIntermediary;

      case algorithmVariants.transmissionAssurance:
        return AlgorithmService.queryTransmissionAssurance;

      default:
        return null;
    }
  }
}

export default AlgorithmService;
