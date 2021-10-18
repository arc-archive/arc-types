# Deprecated

This module has been  moved to `@advanced-rest-client/events`

--------

This module contains ARC's typed definitions for various data types.

Component types are defined in each component.

This is a stand alone module to avoid circular dependencies when using types in some components that would required types definition.

## Usage

### Installation

```sh
npm install --save @advanced-rest-client/arc-types
```

### In a module

```javascript
/** @typedef {import('@advanced-rest-client/arc-types').Cookies.ARCCookie} ARCCookie */
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-types
cd arc-types
npm install
```
