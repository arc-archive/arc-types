import { Entity } from './base';

/**
 * Represents a single certificate object (cert/key)
 */
export declare interface Certificate {
  /**
   * The certificate to use.
   * The `p12` type certificate must be a Buffer.
   * The model's `get()` method always returns original data type.
   */
  data: string|ArrayBuffer|Buffer|Uint8Array;
  /**
   * A passphrase to use to unlock the certificate.
   */
  passphrase?: string;
  /**
   * The original data type of the certificate. This is used by the data store
   * to move between buffers and string values stored in the store.
   * By any means, outside the internal procedure of the data store this
   * filed is always `undefined` and the `data` contains the original data format.
   */
  type?: string;
}

/**
 * Represents a complete certificate configuration required to make
 * a HTTP request.
 */
export declare interface RequestCertificate {
 /**
   * Certificate type. Either `p12` or `pem`.
   */
  type: string;
  /**
   * Certificate or list of certificates to use.
   */
  cert: Certificate|Certificate[];
  /**
   * Key for the `pem` type certificate.
   */
  key?: Certificate|Certificate[];
}

/**
 * Client certificate index definition for listings. 
 */
export declare interface CertificateIndex {
  /**
   * Certificate type. Either `p12` or `pem`.
   */
  type: string;
  /**
   * Custom name of the certificate.
   */
  name: string;
  /**
   * Timestamp when the certificate was inserted into the data store.
   * Required when returning a result. Auto-generated when inserting, if missing.
   */
  created?: number;
}

/**
 * A base client certificate object used in ARC to create / list objects
 */
export declare interface ClientCertificate extends RequestCertificate, CertificateIndex {
}


/**
 * Client certificate datastore definition.
 */
export declare interface ARCClientCertificate extends ClientCertificate, Entity {
   
}

/**
 * Client certificate index datastore definition
 */
export declare interface ARCCertificateIndex extends CertificateIndex, Entity {
  /**
   * In previous version of the application data and index keys were different.
   * This is to accommodate the difference.
   * @deprecated In the current system both data and index uses the same ID.
   */
  dataKey?: string;
}