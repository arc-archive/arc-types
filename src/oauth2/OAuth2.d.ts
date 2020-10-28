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
  /**
   * The refresh token, when requested
   */
  refreshToken?: string;
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
