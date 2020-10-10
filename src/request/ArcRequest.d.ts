import { LegacyAuth, BasicAuthorization, BearerAuthorization, NtlmAuthorization, DigestAuthorization, OAuth1Authorization, OAuth2Authorization, CCAuthorization } from '../authorization/Authorization';
import { HostRule } from '../models/HostRule';
import { Entity } from '../models/base';
import { Response } from './ArcResponse';
import { LegacyResponse, LegacyResponseMeta } from './Legacy';

export declare interface MultipartTransformer {
  /**
   * When true a this entry represent a file part
   */
  isFile: boolean;
  /**
   * The name of the filed
   */
  name: string;
  /**
   * Converted value
   */
  value: string;
  /**
   * A content type entered by the user to the text part of the text part input.
   * This can only be set when `isFile` is false.
   */
  type?: string;
  /**
   * The original file name used with the part
   */
  fileName?: string;
}

/**
 * The definition of the ARC base HTTP request object
 */
export declare interface HTTPRequest {
  /**
   * The request URL
   */
  url: string;
  /**
   * HTTP method name
   */
  method: string;
  /**
   * HTTP headers string
   */
  headers?: string;
  /**
   * The request payload
   */
  payload?: string|File|Blob|Buffer|ArrayBuffer|FormData;
}

/**
 * An interface describing a request made by the HTTP transport.
 * Each transport used by ARC must return this structure in the response event.
 * This is not a replacement for the editor request that also has to be returned.
 * 
 * Another difference is that this headers contains a final list of headers sent to the 
 * server, including default headers, content-length, authorization, and so on.
 */
export declare interface TransportRequest extends HTTPRequest {
  /**
   * The HTTP message sent to the server (full message).
   * Some HTTP clients may not give this information.
   */
  httpMessage: string;
  /**
   * The timestamp when the request was started (before the connection is made)
   */
  startTime: number;
  /**
   * The timestamp of when the response ended.
   */
  endTime: number;
}

/**
 * ARC request `config` object.
 */
export declare interface RequestConfig {
  /**
   * Whether the processor should use this configuration.
   */
  enabled: boolean;
  /**
   * The request timeout.
   * Default no timeout.
   */
  timeout?: boolean;
  /**
   * Whether or not the request should follow redirects.
   */
  followRedirects?: boolean;
  /**
   * Hosts table configuration.
   */
  hosts?: HostRule;
  /**
   * Whether the processor should validate certificates.
   */
  validateCertificates?: boolean;
  /**
   * Whether the native (Node's) transport should be used.
   */
  nativeTransport?: boolean;
  /**
   * Whether to put a "default" headers (accept and user agent)
   */
  defaultHeaders?: true;
  /**
   * A list of variables to use with the request.
   * Note, request variables override application and workspace variables.
   */
  variables?: object[];
}

/**
 * Authorization configuration for the request.
 */
export declare interface RequestAuthorization {
  /**
   * Authorization configuration
   */
  config: LegacyAuth|BasicAuthorization|BearerAuthorization|NtlmAuthorization|DigestAuthorization|OAuth1Authorization|OAuth2Authorization|CCAuthorization;
  /**
   * The name of the authorization
   */
  type: string;
  /**
   * Whether the authorization is enabled.
   */
  enabled: boolean;
}

/**
 * The definition of the ARC request that is shared in different contexts.
 */
export declare interface ArcBaseRequest extends HTTPRequest {
  /**
   * Request processing configuration.
   */
  config?: RequestConfig;
  /**
   * The old authorization system that allowed only single request to be used.
   * @deprecated
   */
  auth?: LegacyAuth|BasicAuthorization|BearerAuthorization|NtlmAuthorization|DigestAuthorization|OAuth1Authorization|OAuth2Authorization|CCAuthorization;
  /**
   * Request authorization configuration
   */
  authorization?: RequestAuthorization[];
  /**
   * The last response made with this request. This is always set with the history object.
   * May not be set with others.
   */
  response?: Response;
  /**
   * Set together with `response` property. Describes a request sent by the transport.
   */
  transportRequest?: TransportRequest,
  /**
   * Old ARC's response declaration. This is kept for internal data model processing. 
   * @deprecated Do not use.
   */
  _response?: LegacyResponse;
  /**
   * Old ARC's response meta declaration. This is kept for internal data model processing. 
   * @deprecated Do not use.
   */
  _responseMeta?: LegacyResponseMeta;
  /**
   * @deprecated Do not use.
   */
  _isErrorResponse?: boolean;
}

/**
 * A model of an ARC request that has been stored in the data store
 */
export declare interface ArcStoredRequest extends ArcBaseRequest {
  /**
   * The type of the request stored in the data store.
   * Can be either `saved` or `history` which corresponds
   * to `SavedRequest` and `HistoryRequest` definitions respectively.
   */
  type?: string;
  /**
   * Timestamp when the request was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the request was created.
   */
  created?: number;
  /**
   * An ID of Google Drive object where this request is stored.
   */
  driveId?: string;
  /**
   * A timestamp of the midnight when the request object was updated
   */
  midnight?: number;
  /**
   * ARCs internal transformation of a native FormData into a structure that
   * can be stored in the data store. This is used internally by their model
   * and when requesting ARC request object this is restored to the original
   * format.
   */
  multipart?: MultipartTransformer[];
  /**
   * When a file is the request payload then in the data store it is transformed into a 
   * string and the payload is emptied. This is used internally by the data store
   * to restore the original format
   */
  blob?: string;
}

/**
 * The definition of the ARC request history data entity.
 */
export declare interface ARCHistoryRequest extends ArcStoredRequest, Entity {}

export declare interface ARCSavedRequest extends ArcStoredRequest, Entity {
  /**
   * The name of the request
   */
  name: string;
  /**
   * The description of the request
   */
  description?: string;
  /**
   * A list of projects this request is assigned to.
   */
  projects?: string[];
}

/**
 * The definition of the ARC request in the request editor.
 */
export declare interface ArcEditorRequest {
  /**
   * The auto generated ID of the request in the editor.
   */
  id: string;
  /**
   * The ARC request object
   */
  request: ArcBaseRequest | ARCSavedRequest | ARCHistoryRequest;
}

export declare interface ARCRequestRestoreOptions {
  /**
   * When set the payload is ignored from the request and the model returns `undefined.
   * This is used to optimize queries to the data store.
   */
  ignorePayload?: boolean;
  /**
   * When performing a bulk read operation it preserves order
   * or requested items by key by adding `undefined` to the indexes that
   * failed to read
   */
  preserveOrder?: boolean;
}
