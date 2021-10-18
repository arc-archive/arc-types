import { ApiType } from './ApiTypes';
import { Entity } from './base';
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface Environment {
  name: string;
  created?: number;
}
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface Variable extends ApiType {
}
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface ARCEnvironment extends Environment, Entity {
  
}
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface ARCVariable extends Variable, Entity {
  /**
   * The name of the environment the variable is added to.
   */
  environment: string;
  /**
   * @deprecated Use `name` instead.
   */
  variable?: string;
}
/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare type SystemVariables = Readonly<{[key: string]: string}>;
