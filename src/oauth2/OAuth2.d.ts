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
   * The custom data to set on the authoirzation URI when opening the auth popup.
   */
  auth?: OAuth2AuthorizationRequestCustomData;
  /**
   * The custom data to be set on the token request.
   */
  token?: OAuth2TokenRequestCustomData;
}

/**
 * OAuth 2 configuration object used in Advanced REST Client and API Components.
 */
export declare interface Oauth2Config {
  /**
   * OAuth flow with `interactive` option set to `false` allows to quietly request for the token from the cache or form the authorization server
   * without notifying the user (without bringing the authorization pop-up).
   *
   * This is to be used to check if valid session exists for current user and update the UI accordingly.
   *
   * Note, when `interactive` is `false` the `oauth2tokenready` is dispatched even if session do not exists.
   */
  interactive?: boolean;
  /**
   * The grant type of the OAuth 2 flow.
   *
   * Can be:
   * - implicit
   * - authorization_code
   * - password
   * - client_credentials
   * - any custom grant supported by the authorization server
   */
  type: string;

  /**
   * The client ID registered in the OAuth2 provider.
   */
  clientId: string;
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
   * List of scopes to be used with the token request.
   * This parameter is not required per OAuth2 spec.
   */
  scopes?: string[];
  /**
   * The state parameter as defined in the OAuth2 spec.
   * The state is retuned back with the token reponse.
   */
  state: string;
  /**
   * Additional data defined outside the scope of the OAuth2 protocol to be set
   * on both authorization and token requests.
   */
  customData?: OAuth2CustomData;
  /**
   * This is not a standard OAuth 2 paramer.
   * Used by Google's oauth 2 server to include already granted to this app
   * scopes to the list of this scopes.
   */
  includeGrantedScopes?: boolean;
  /**
   * This is not a standard OAuth 2 paramer.
   * Used by Google's oauth 2 server. It's the user email, when known.
   */
  loginHint?: string;
}

/**
 * Options for removing a token from the cache.
 */
export declare interface TokenRemoveOptions {
  clientId: string;
  authorizationUri: string;
}

declare interface TokenBase {
  /**
   * Whether the token request was marked as interactive.
   */
  interactive?: boolean;
  /**
   * The request state parameter, if used with the request.
   */
  state: string;
}

/**
 * Token response object.
 */
declare interface TokenInfo extends TokenBase {
  /**
   * The access token.
   */
  accessToken: string;
  /**
   * The access token type.
   */
  tokenType: string;
  /**
   * Access token expiration timeout.
   */
  expiresIn: number;
  /**
   * Access token expiration timestamp
   */
  expiresAt: number;
  /**
   * When `true` the `expires_in` and `expires_at` are assumed values (1 hour).
   */
  expiresAssumed: boolean;
  /**
   * The list of scopes the token has been granted
   */
  scope?: string[];
}

/**
 * Token response object.
 */
declare interface TokenError {
  /**
   * The error message
   */
  message: string;
  /**
   * One of the application error codes.
   */
  code: string;
}
