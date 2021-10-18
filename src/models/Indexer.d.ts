/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface IndexableRequest {
  /**
   * stored request ID
   */
  id: string;
  /**
   * store name or identifier
   */
  type: string;
  /**
   * the URL to index
   */
  url: string;
}
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface IndexQueryOptions {
  /**
   * Request type: `saved` or `history`
   */
  type?: string;
  /**
   * If set it uses slower algorithm but performs full
   * search on the index. When `false` it only uses filer like query + '*'.
   */
  detailed?: boolean;
}
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface IndexQueryResult {
  [key: string]: string;
}
