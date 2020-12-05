module.exports = {
  isAuthorized: require('./isAuthorized'),
  gate: require('./gate'),
  ...require('./validate'),
};
