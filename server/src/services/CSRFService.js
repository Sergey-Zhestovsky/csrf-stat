const worker = require('../utils/worker');
const Logger = require('../libs/Logger');
const environments = require('../config/environment');

const logger = new Logger();

class CSRFService {
  static commonResponse(entryTimestamp, queryTimestamp, queue, load) {
    return {
      speed: Date.now() - entryTimestamp + 1,
      timestamp: queryTimestamp,
      queue: queue,
      load: load,
    };
  }

  static authorizationHeader(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.authorizationHeader with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.authorizationHeader);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static clientIntermediary(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.clientIntermediary with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.clientIntermediary);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static domainTable(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.domainTable with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.domainTable);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static doubleCookies(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.doubleCookies with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.doubleCookies);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static encryptedToken(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.encryptedToken with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.domainTable);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static formSigning(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.formSigning with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.formSigning);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static secureCookies(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.secureCookies with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.secureCookies);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }

  static transmissionAssurance(entryTimestamp, queryTimestamp) {
    logger.debug(
      `Get in CSRFService.transmissionAssurance with entryTimestamp: '${entryTimestamp}', queryTimestamp: '${queryTimestamp}'`
    );

    const { queue, load } = worker(...environments.transmissionAssurance);
    return CSRFService.commonResponse(entryTimestamp, queryTimestamp, queue, load);
  }
}

module.exports = CSRFService;
