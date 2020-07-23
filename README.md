# Advanced REST Client types definition

This module contains ARC's typed definitions for various data types.

Component types are defined in each component.

This is a stand alone module to avoid circular dependencies when using types in some components that would required types definition.

## Usage

### Instalation

```
npm install --save @advanced-rest-client/arc-types
```

### In a module

```javascript
/** @typedef {import('@advanced-rest-client/arc-types').ARCCookie} ARCCookie */
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-types
cd arc-types
npm install
```
