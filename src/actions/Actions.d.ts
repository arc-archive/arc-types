export declare type ActionType = 'request' | 'response';

/**
 * Describes action's condition configuration.
 */
export declare interface Condition {
  /**
   * The condition is either request or response related.
   */
  type: string;
  /**
   * The source of the data.
   * The type of the data source (request or response) depends on
   * the context at which the condition runs.
   */
  source?: string;
  /**
   * The value to compare to.
   * Usually it is a string. For `statuscode` acceptable value is a number.
   */
  value?: string | number;
  /**
   * The comparison operator.
   */
  operator?: OperatorEnum | string;
  /**
   * Path to the data to extract the value to test the condition.
   * Only relevant for some `source` options.
   */
  path?: string;
  /**
   * Whether the condition always pass.
   * The condition is not really checked, values can be empty. The condition check always returns `true`.
   */
  alwaysPass?: boolean;
  /**
   * Options related to the UI state in the application.
   */
  view?: ConditionViewOptions;
}

export interface ConditionViewOptions {
  /**
   * Whether the condition editor is rendered in the "full" view
   * instead of the summary.
   */
  opened?: boolean;
}

/**
 * An interface representing a runnable set of action in a condition.
 * For the actions to be executed the condition first has to be met.
 * The condition can be configured to always pass by setting the `alwaysPass` property.
 */
export declare interface RunnableAction {
  /**
   * The condition to be checked when executing the runnable,
   */
  condition: Condition;
  /**
   * The type of the runnable. 
   * The `request` will only process HTTP request data. The `response` has both request and response data available.
   */
  type: ActionType;
  /**
   * The list of actions to execute.
   */
  actions: Action[];
  /**
   * Whether the entire runnable is enabled. This is checked before the condition is executed.
   */
  enabled: boolean;
}


/**
 * An interface representing a single action.
 */
export declare interface Action {
  /**
   * The type of the action. 
   * The `request` will only process HTTP request data. The `response` has both request and response data available.
   */
  type: ActionType;
  /**
   * Action name.
   */
  name?: string;
  /**
   * Whether the action is enabled.
   */
  enabled?: boolean;
  /**
   * Action priority. The higher number the higher priority of execution.
   */
  priority: number;
  /**
   * Action configuration
   */
  config: ActionConfiguration;
  /**
   * Whether or not the action is executed synchronously to request / response
   */
  sync: boolean;
  /**
   * Whether or not the request should fail when the action fails.
   */
  failOnError: boolean;
  /**
   * Options passed to the UI.
   */
  view: ActionViewConfiguration;
}

/**
 * Convenience type that gathers all configurations in one type.
 */
export type ActionConfiguration = SetCookieConfig | SetVariableConfig | DeleteCookieConfig;

export declare interface SetCookieConfig {
  /**
   * Name of the cookie
   */
  name: string;
  /**
   * Source of the cookie value
   */
  source: DataSourceConfiguration;
  /**
   * When set it uses request URL instead of defined URL in the action
   */
  useRequestUrl?: boolean;
  /**
   * An URL associated with the cookie
   */
  url?: string;
  /**
   * The cookie expiration time
   */
  expires?: string;
  /**
   * Whether the cookie is host only
   */
  hostOnly?: boolean;
  /**
   * Whether the cookie is HTTP only
   */
  httpOnly?: boolean;
  /**
   * Whether the cookie is HTTPS only
   */
  secure?: boolean;
  /**
   * Whether the cookie is a session cookie
   */
  session?: boolean;
}

export declare interface SetVariableConfig {
  /**
   * Name of the variable to set
   */
  name: string;
  /**
   * Source of the cookie value
   */
  source: DataSourceConfiguration;
}

export declare interface DeleteCookieConfig {
  /**
   * When set it uses request URL instead of defined URL in the action.
   */
  useRequestUrl?: boolean;
  /**
   * An URL associated with the cookie.
   * Only used when `useRequestUrl` is not `true`.
   */
  url?: string;
  /**
   * When set it removes all cookies associated wit the URL.
   */
  removeAll?: boolean;
  /**
   * Name of the cookie to remove.
   */
  name?: string;
}

export declare interface DataSourceConfiguration {
  /**
   * Source of the data.
   */
  source: RequestDataSourceEnum|ResponseDataSourceEnum;
  /**
   * When set the iterator configuration is enabled
   */
  iteratorEnabled?: boolean;
  /**
   * Array search configuration.
   */
  iterator?: IteratorConfiguration;
  /**
   * The path to the data. When `iteratorEnabled` is set then this
   * is a path counting from an array item. When not set an entire value of `source` is used.
   */
  path?: string;
}

export declare interface IteratorConfiguration {
  /**
   * The path to the property to use in the comparison.
   */
  path: string;
  /**
   * The value of the condition.
   */
  condition: string;
  /**
   * The comparison operator.
   */
  operator: OperatorEnum;
}

export type OperatorEnum = "equal" | "not-equal" | "greater-than" | "greater-than-equal" | "less-than" | "less-than-equal" | "contains" | "regex";
export type RequestDataSourceEnum = "request.url" | "request.method" | "request.headers" | "request.body";
export type ResponseDataSourceEnum = "response.url" | "response.method" | "response.headers" | "response.body";

/**
 * An UI controlling configuration for an action.
 */
export declare interface ActionViewConfiguration {
  /**
   * Whether the action is "opened" in the editor UI.
   */
  opened?: boolean;
}