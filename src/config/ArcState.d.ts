/**
 * Description of the Advanced REST Client configuration.
 * @deprecated This module has been moved to `@advanced-rest-client/events`
 */
export declare interface ARCState {
  kind: 'ARC#AppState';
  /**
   * Settings for the application environment
   */
  environment?: ARCStateEnvironment;
  /**
   * Settings for the application navigation
   */
  navigation?: ARCStateNavigation;
}
/**
 * @deprecated This module has been moved to `@advanced-rest-client/events`
 */
export declare interface ARCStateEnvironment {
  /**
   * The name of the environment to be restored when the application window finish loading.
   */
  variablesEnvironment?: string;
}
/**
 * @deprecated This module has been moved to `@advanced-rest-client/events`
 */
export declare interface ARCStateNavigation {
  /**
   * The index of currently selected navigation rail.
   */
  selected?: number;
}
