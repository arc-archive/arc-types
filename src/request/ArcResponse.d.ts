/**
 * Schema definition for ARC request timings. This is mostly consistent with HAR timings.
 */
export declare interface RequestTime {
  connect: number;
  receive: number;
  send: number;
  wait: number;
  blocked: number;
  dns: number;
  ssl?: number;
}

export declare interface HTTPResponse {
  /**
   * The response status code
   */
  status: number;
  /**
   * The reason part of the status message
   */
  statusText?: string;
  /**
   * The response headers
   */
  headers: string;
  /**
   * The response message
   */
  payload: string|Buffer|ArrayBuffer;
}

/**
 * An information about a redirect
 */
export declare interface ResponseRedirect {
  response: HTTPResponse[];
  timings?: RequestTime;
  /**
   * The timestamp when the request was started (before the connection is made)
   */
  startTime: number;
  /**
   * The timestamp of when the response ended.
   */
  endTime: number;
}

export declare interface RequestsSize {
  /**
   * The size of the request in bytes
   */
  request: number;
  /**
   * The size of the response in bytes
   */
  response: number;
}

export declare interface BaseResponse extends HTTPResponse {
  
}

/**
 * ARC response object.
 */
export declare interface Response extends BaseResponse {
  /**
   * The request timings. 
   * Some HTTP clients may not give this information.
   */
  timings?: RequestTime;
  /**
   * The total loading time (from sending the request to receive last byte)
   */
  loadingTime: number;
  /**
   * The list of redirects, if any.
   */
  redirects?: ResponseRedirect[];
  /**
   * Request and response size. Some HTTP clients may not give this information.
   */
  size?: RequestsSize;
}

export declare interface ErrorResponse extends BaseResponse {
  /**
   * An error associated with the response
   */
  error: Error;
}