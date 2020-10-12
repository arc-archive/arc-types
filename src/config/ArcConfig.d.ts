export declare interface RequestEditorConfig {
  /** 
   * Automatically encodes and decodes values in the www-url-form-encoded body editor.
   */
  autoEncode?: boolean;
  /**
   * The editor to use with the body editor.
   * Due to dependency and memory management changing this options requires restart or
   * opening a new application window.
   */
  bodyEditor: 'CodeMirror' | 'Monaco';
}