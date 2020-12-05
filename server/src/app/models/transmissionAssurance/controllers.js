const CSRFService = require('../../../services/CSRFService');

const processData = (entryTimestamp, queryTimestamp) => {
  const result = CSRFService.transmissionAssurance(entryTimestamp, queryTimestamp);
  return result;
};

const loadProcess = (entryTimestamp, queryTimestamp) => {
  const result = CSRFService.transmissionAssurance(entryTimestamp, queryTimestamp);
  return result;
};

module.exports = {
  processData,
  loadProcess,
};
