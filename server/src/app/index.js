const AuthorizationHeader = require('./models/authorizationHeader');
const ClientIntermediary = require('./models/clientIntermediary');
const DomainTable = require('./models/domainTable');
const DoubleCookies = require('./models/doubleCookies');
const EncryptedToken = require('./models/encryptedToken');
const FormSigning = require('./models/formSigning');
const SecureCookies = require('./models/secureCookies');
const TransmissionAssurance = require('./models/transmissionAssurance');

module.exports = {
  api: [
    AuthorizationHeader.router,
    ClientIntermediary.router,
    DomainTable.router,
    DoubleCookies.router,
    EncryptedToken.router,
    FormSigning.router,
    SecureCookies.router,
    TransmissionAssurance.router,
  ],
};
