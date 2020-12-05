const CSRFService = require('../../../services/CSRFService');

const processData = (entryTimestamp, queryTimestamp) => {
  const result = CSRFService.doubleCookies(entryTimestamp, queryTimestamp);
  return result;
};

const loadProcess = (entryTimestamp, queryTimestamp) => {
  const result = CSRFService.doubleCookies(entryTimestamp, queryTimestamp);
  return result;
};

module.exports = {
  processData,
  loadProcess,
};
