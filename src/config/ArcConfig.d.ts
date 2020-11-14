export declare interface RequestEditorConfig {
  /** 
   * Automatically encodes and decodes values in the www-url-form-encoded body editor.
   * @default true
   */
  autoEncode?: boolean;
  /**
   * The editor to use with the body editor.
   * Due to dependency and memory management changing this options requires restart or
   * opening a new application window.
   * @default Monaco
   */
  bodyEditor?: 'CodeMirror' | 'Monaco';
}

/**
 * Description of the Advanced REST Client configuration.
 */
export declare interface ARCConfig {
  /**
   * General view settings
   */
  view?: ARCViewConfig;
  /**
   * Default HTTP request configuration
   */
  request?: ARCRequestConfig;
  /**
   * User privacy options.
   */
  privacy?: ARCPrivacyConfig;
  /**
   * ARC request history and "saved" settings.
   */
  history?: ARCHistoryConfig;
  /**
   * Configuration of the request editor.
   */
  requestEditor?: RequestEditorConfig;
}

/**
 * Description of the Advanced REST Client configuration.
 */
export declare interface ARCViewConfig {
  /**
   * The type of the lists (history list, saved list etc).
   */
  listType?: 'default' | 'comfortable' | 'compact';
  /**
   * Enables detachable menu.
   */
  popupMenu?: boolean;
  /**
   * Enables drag and drop in the application.
   */
  draggableEnabled?: boolean;
}

export declare interface ARCRequestConfig {
  /**
   * The request default timeout setting.
   */
  timeout?: number;

  /**
   * Global option to follow redirects
   * @default true
   */
  followRedirects?: boolean;
  /**
   * Collects information about system variables when evaluating the request.
   * @default true if the environment allows to do so
   */
  useSystemVariables?: boolean;
  /**
   * Uses ARC variables to evaluate the request before processing it.
   * @default true
   */
  useAppVariables?: boolean;
  /**
   * The default OAuth 2 redirect URI.
   */
  oauth2redirectUri?: string;
  /**
   * Ignore `content-*` headers when making a GET request
   * @default false
   */
  ignoreContentOnGet?: boolean;
  /**
   * Creates default headers for user-agent and accept when missing in the request editor.
   * @default true
   */
  defaultHeaders?: boolean;
  /**
   * Ignores automatic set of cookies from a cookie storage.
   * @default false
   */
  ignoreSessionCookies?: boolean;
  /**
   * Setting to validate certificates when making a request.
   * @default false
   */
  validateCertificates?: boolean;
  /**
   * Enables platform's native HTTP transport.
   * Instead of using ARC's engine it uses native APIs for the given platform to make HTTP requests.
   */
  nativeTransport?: boolean;
}

export declare interface ARCPrivacyConfig {
  /**
   * Whether the limited analytics data are collected.
   */
  telemetry?: boolean;
}

export declare interface ARCHistoryConfig {
  /**
   * Whether the HTTP requests history is enabled
   * @default true
   */
  enabled?: boolean;
  /**
   * When set it performs the "fast search" in the requests store
   */
  fastSearch?: boolean;
}
