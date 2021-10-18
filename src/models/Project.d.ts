import { Entity } from './base';

/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface Project {
  /**
   * Project order
   */
  order?: number;
  /**
   * List of requests associated with the project.
   */
  requests?: string[];
  /**
   * Timestamp when the project was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the project was created.
   */
  created?: number;
  /**
   * The name of the project
   */
  name: string;
  /**
   * The description of the project
   */
  description?: string;
  error?: boolean;
}

/**
 * @deprecated This module has been  moved to `@advanced-rest-client/events`
 */
export declare interface ARCProject extends Project, Entity {
}
