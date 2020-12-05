import urlJoin from 'url-join';
import Connector from './Connector';
import pathsConfig from '../../config/algorithm-paths.json';

const path = (p) => {
  return urlJoin(process.env.REACT_APP_SERVER_URL_BASE, p);
};

export const doubleCookiesConnector = new Connector(path(pathsConfig.doubleCookies));
export const encryptedTokenConnector = new Connector(path(pathsConfig.encryptedToken));
export const authorizationHeaderConnector = new Connector(path(pathsConfig.authorizationHeader));
export const secureCookiesConnector = new Connector(path(pathsConfig.secureCookies));
export const formSigningConnector = new Connector(path(pathsConfig.formSigning));
export const domainTableConnector = new Connector(path(pathsConfig.domainTable));
export const clientIntermediaryConnector = new Connector(path(pathsConfig.clientIntermediary));
export const transmissionAssuranceConnector = new Connector(
  path(pathsConfig.transmissionAssurance)
);
