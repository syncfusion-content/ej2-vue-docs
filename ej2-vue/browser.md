---
layout: post
title: Browser in Vue Browser md component | Syncfusion
description: Learn here all about Browser in Syncfusion Vue Browser md component of Syncfusion Essential JS 2 and more.
control: Browser 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Browser Support

The Syncfusion Essential JS 2 components are supported only in modern browsers. This includes the following versions.

|    Chrome    |    Firefox    |    Opera     |    Edge    |    IE      |    Safari    |    IOS    |    Android    |    Windows   Mobile    |
|--------------|---------------|--------------|------------|------------|--------------|-----------|---------------|------------------------|
|    Latest    |    Latest     |    Latest    |    13 +    |    11 +    |    9 +       |    9 +    |    4.4 +      |    IE 11 +             |

## Required polyfills

The following polyfills are required to run Essential JS 2 components in each browser.

|    Browser                                             |    Polyfills      |
|:--------------------------------------------------------:|:-------------------:|
|    Chrome(latest), Firefox(latest), Opera(latest), Edge, Safari 9+    |    NONE           |
|    IE 11                                               |    ES6 Promise    |

The Syncfusion Essential JS 2 components are supported in IE 11 browser with ES6 Promise polyfill.

## Using CDN

To add ES6 Promise polyfill using a CDN, include this in your HTML file.

```ts
<!-- Automatically provides/replaces `Promise` if missing or broken. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
<!-- Minified version of `es6-promise-auto` below. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>

```

## Node.js

ES6 Promise polyfill can also be installed on the node.js.

To install:

```ts
yarn add es6-promise
(or)
npm install es6-promise

```

To Use:

```ts
var Promise = require('es6-promise').Promise;

```

For further details, refer to the link [here](https://github.com/stefanpenner/es6-promise).