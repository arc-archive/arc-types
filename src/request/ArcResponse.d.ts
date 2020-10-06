/**
 * Schema definition for ARC request timings. This is mostly consistent with HAR timings.
 */
export declare interface RequestTimings {
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
  /**
   * The timestamp when the request started
   */
  startTime: number;
}

/**
 * An information about a redirect
 */
export declare interface ResponseRedirects {
  response: HTTPResponse[];
  timings?: RequestTimings;
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
  /**
   * The HTTP message sent to the server (full message).
   * Some HTTP clients may not give this information.
   */
  httpMessage: string;
}

/**
 * ARC response object.
 */
export declare interface Response extends BaseResponse {
  
  /**
   * The request timings. 
   * Some HTTP clients may not give this information.
   */
  timings?: RequestTimings;
  /**
   * The total loading time (from sending the request to receive last byte)
   */
  loadingTime: number;
  /**
   * The list of redirects, if any.
   */
  redirects?: ResponseRedirects[];
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