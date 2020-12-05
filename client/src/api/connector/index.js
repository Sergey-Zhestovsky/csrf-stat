import Connector from './Connector';
import pathsConfig from '../../config/algorithm-paths.json';

export const doubleCookiesConnector = new Connector(pathsConfig.doubleCookies);
export const encryptedTokenConnector = new Connector(pathsConfig.encryptedToken);
export const authorizationHeaderConnector = new Connector(pathsConfig.authorizationHeader);
export const secureCookiesConnector = new Connector(pathsConfig.secureCookies);
export const formSigningConnector = new Connector(pathsConfig.formSigning);
export const domainTableConnector = new Connector(pathsConfig.domainTable);
export const clientIntermediaryConnector = new Connector(pathsConfig.clientIntermediary);
export const transmissionAssuranceConnector = new Connector(pathsConfig.transmissionAssurance);
