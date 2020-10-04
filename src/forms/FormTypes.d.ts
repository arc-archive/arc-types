/**
 * A definition of a form item used in the UI.
 */
export declare interface FormItem {
  /**
   * Property name
   */
  name: string;
  /**
   * Property value
   */
  value: any;
  /**
   * Whether the property is enabled. If not set it is assumed the property is enabled.
   */
  enabled?: boolean;
  /**
   * Property schema
   */
  schema?: FormItemSchema;
}

export declare interface FormItemSchema {
  /**
   * Whether the property is required. It is not by default.
   */
  required?: boolean;
  /**
   * Property type. Default to string.
   */
  type?: 'string' | 'integer' | 'float' | 'nil' | 'boolean' | 'date' | 'datetime' | 'time' | 'enum';
  /**
   * The description of the property
   */
  description?: string;
  /**
   * The value of `type` property of the input element used to input value. Default to text.
   */
  inputType?: string;
  /**
   * Input element's pattern
   */
  pattern?: string;
  /**
   * Input element's minLength
   */
  minLength?: number;
  /**
   * Input element's maxLength
   */
  maxLength?: number;
  /**
   * The default value to use in the input element if missing
   */
  defaultValue?: any;
  /**
   * The examples to render/use
   */
  examples?: Example[];
  /**
   * For the numeric types, binds this value to the `step` attribute
   */
  step?: number;
  /**
   * For the numeric types, binds this value to the `minimum` attribute
   */
  minimum?: number;
  /**
   * For the numeric types, binds this value to the `maximum` attribute
   */
  maximum?: number;
  /**
   * Enum values to render. Instead of an input a drop down is rendered,
   */
  enum?: any[];
  /**
   * Whether this property cannot be edited
   */
  readOnly?: boolean;
}

declare interface Example {
  /**
   * The example to render
   */
  value?: string;
  /**
   * Example title
   */
  title?: string;
}