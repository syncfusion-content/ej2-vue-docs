---
layout: post
title: Deployment in Vue Deployment md component | Syncfusion
description: Learn here all about Deployment in Syncfusion Vue Deployment md component of Syncfusion Essential JS 2 and more.
control: Deployment 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Deployment

## CDN

CDN links are provided for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI component scripts and styles.

The CDN provides the following file types:

1. UMD files
2. CSS files

> Note: Unversioned CDN links (which always point to the latest scripts) were deprecated in the 2022 Vol 1 (20.1) release. Those unversioned links still exist for v19.4 to avoid breaking sites that used them, but you should use versioned CDN links going forward.

_The latest minified versions of all UMD, Global and CSS files are available on CDN:_


* **`https://cdn.syncfusion.com/ej2/PACKAGENAME/dist/PACKAGENAME.umd.min.js`**
* **`https://cdn.syncfusion.com/ej2/PACKAGENAME/styles/THEMENAME.css`**

For example

* [https://cdn.syncfusion.com/ej2/ej2-vue-inputs/dist/ej2-vue-inputs.umd.min.js](https://cdn.syncfusion.com/ej2/ej2-vue-inputs/dist/ej2-vue-inputs.umd.min.js)
* [https://cdn.syncfusion.com/ej2/ej2-vue-inputs/styles/material.css](https://cdn.syncfusion.com/ej2/ej2-vue-inputs/styles/material3.css)

_Versioned files are also available on CDN._

* **`https://cdn.syncfusion.com/ej2/VERSION/PACKAGENAME/dist/PACKAGENAME.umd.min.js`**
* **`https://cdn.syncfusion.com/ej2/VERSION/PACKAGENAME/styles/THEMENAME.css`**

For example

* [https://cdn.syncfusion.com/ej2/32.1.19/ej2-vue-inputs/dist/ej2-vue-inputs.umd.min.js](https://cdn.syncfusion.com/ej2/32.1.19/ej2-vue-inputs/dist/ej2-vue-inputs.umd.min.js)
* [https://cdn.syncfusion.com/ej2/32.1.19/ej2-vue-inputs/styles/material.css](https://cdn.syncfusion.com/ej2/32.1.19/ej2-vue-inputs/styles/material.css)

## Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are published to the public npm registry.

### Anatomy of NPM packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components are shipped as npm packages. Following table explains the purpose of each file available in the package.

|    Files                                                                  |    Purpose                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    `dist/es6`                                                               |    This folder contains the ES6 formatted JS file of   the package.                                                                                                   |
|    `dist/<packagename>.umd.min.js`   `dist/<packagename>.umd.js`              |        For applications using AMD or Common JS based   module loader can be utilize these files.                                                                                                                                                                                             |
|    `src/`                                                                   |    This folder contains the script files in AMD   format. You can connect these AMD files as a package in System JS or Require   JS.                                                                                                                                                         |
|    `styles/<theme name>.css`   `styles/<theme name>.scss`                     |    This folder contains the CSS and SCSS files of the   package.                                                                                                                                                                                                                             ||
