export interface NtlmAuthLegacy {
  domain: string;
  username: string;
  password?: string;
  url?: string;
  method: string;
}

export interface BasicAuthLegacy {
  username: string;
  password?: string;
  method: string;
}

/**
 * A configuration for the legacy ARC auth object on the request.
 * This object has been repriced in Q1 2020 wit OAS3 support release.
 */
export interface LegacyAuth extends NtlmAuthLegacy, BasicAuthLegacy {
  type: string;
}

export interface BasicAuthorization {
  /**
   * User name value.
   */
  username?: string;
  /**
   * User password value.
   */
  password?: string;
}

export interface BearerAuthorization {
  /**
   * Bearer token value
   */
  token: string;
}

export interface NtlmAuthorization {
  /**
   * User name value.
   */
  username?: string;
  /**
   * User password value.
   */
  password?: string;
  /**
   * Authorization domain
   */
  domain: string;
}

export interface DigestAuthorization {
  username?: string;
  password?: string;
  realm: string;
  nonce: string;
  uri: string;
  qop: string;
  opaque: string;
  response: string;
  nc: string|number;
  cnonce: string;
  algorithm: string;
}

export interface OAuth1Authorization {
  consumerKey: string;
  consumerSecret: string;
  token: string;
  tokenSecret: string;
  timestamp: string|number;
  nonce: string;
  realm: string;
  signatureMethod: string;
  requestTokenUri: string;
  accessTokenUri: string;
  redirectUri: string;
  authParamsLocation: string;
  authTokenMethod: string;
  authorizationUri: string;
  type: string;
}

/**
 * Client Certificate Authorization
 */
export interface CCAuthorization {
  /**
   * The ID of the certificate to use.
   * Because the certificates are stored by the application 
   * this configuration only returns an ID of the certificate 
   * to use when making the request.
   */
  id: string;
}

export declare interface OAuth2CustomParameter {
  /**
   * The name of the parameter
   */
  name: string;
  /**
   * The value of the parameter. It is ALWAYS a string.
   */
  value: string;
}

export declare interface OAuth2TokenRequestCustomData {
  /**
   * The query parameters to use with the token request
   */
  parameters?: OAuth2CustomParameter[];
  /**
   * The headers to use with the token request
   */
  headers?: OAuth2CustomParameter[];
  /**
   * The body parameters to use with the token request.
   * This is x-www-urlencoded parameters to be added to the message.
   */
  body?: OAuth2CustomParameter[];
}

export declare interface OAuth2AuthorizationRequestCustomData {
  /**
   * The query parameters to add to the authorization URI
   */
  parameters?: OAuth2CustomParameter[];
}

export declare interface OAuth2CustomData {
  /**
   * The custom data to set on the authorization URI when opening the auth popup.
   */
  auth?: OAuth2AuthorizationRequestCustomData;
  /**
   * The custom data to be set on the token request.
   */
  token?: OAuth2TokenRequestCustomData;
}

declare interface BaseOAuth2Authorization {
  /**
   * OAuth flow with `interactive` option set to `false` allows to quietly request for the token from the cache or form the authorization server
   * without notifying the user (without bringing the authorization pop-up).
   *
   * This is to be used to check if valid session exists for current user and update the UI accordingly.
   */
  interactive?: boolean;
  /**
   * List of scopes to be used with the token request.
   * This parameter is not required per OAuth2 spec.
   */
  scopes?: string[];
}

/**
 * OAuth 2 configuration object used in Advanced REST Client and API Components.
 */
export declare interface OAuth2Authorization extends BaseOAuth2Authorization {
  /**
   * The grant type of the OAuth 2 flow.
   *
   * Can be:
   * - implicit - deprecated and legacy
   * - authorization_code
   * - password - deprecated and legacy
   * - client_credentials
   * - refresh_token
   * - any custom grant supported by the authorization server
   */
  grantType?: 'implicit' | 'authorization_code' | 'password' | 'client_credentials' | 'refresh_token' | string;
  /**
   * The client ID registered in the OAuth2 provider.
   */
  clientId?: string;
  /**
   * The client ID registered in the OAuth2 provider.
   * This value is not required for select grant types.
   */
  clientSecret?: string;
  /**
   * The user authorization URI as defined by the authorization server.
   * This is required for the `implicit` and `authorization_code` grant types
   */
  authorizationUri?: string;
  /**
   * The token request URI as defined by the authorization server.
   * This is not required for the `implicit` grant type
   */
  accessTokenUri?: string;
  /**
   * The user redirect URI as configured in the authorization server.
   * This is required for the `implicit` and `authorization_code` grant types.
   */
  redirectUri?: string;
  /**
   * Required for the `password` grant type
   */
  username?: string;
  /**
   * Required for the `password` grant type
   */
  password?: string;
  /**
   * The state parameter as defined in the OAuth2 spec.
   * The state is returned back with the token response.
   */
  state?: string;
  /**
   * Additional data defined outside the scope of the OAuth2 protocol to be set
   * on both authorization and token requests.
   */
  customData?: OAuth2CustomData;
  /**
   * This is not a standard OAuth 2 paramter.
   * Used by Google's oauth 2 server to include already granted to this app
   * scopes to the list of this scopes.
   */
  includeGrantedScopes?: boolean;
  /**
   * This is not a standard OAuth 2 paramter.
   * Used by Google's oauth 2 server. It's the user email, when known.
   */
  loginHint?: string;
  /**
   * When set the `authorization_code` will use the PKCE extension of the OAuth2 
   * to perform the authorization. Default to `false`.
   * This is only relevant when the `authorization_code` grant type is used.
   */
  pkce?: boolean;
}