---
layout: post
title: Getting started with Vue Spreadsheet component | Syncfusion
description:  Checkout and learn about Getting started with Vue Spreadsheet component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps to create a simple Spreadsheet control with basic features in Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Spreadsheet control in your application:

```js
|-- @syncfusion/ej2-vue-spreadsheet
    |-- @syncfusion/ej2-vue-base
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-grids
```

## Setup Vue Environment

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

## Create a Vue Application

Start a new Vue application using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install
```

## Adding Syncfusion Spreadsheet package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install Spreadsheet control, use the following command

```bash
npm install @syncfusion/ej2-vue-spreadsheet --save
```

> The **--save** will instruct NPM to include the spreadsheet package inside of the **dependencies** section of the **package.json**.

## Registering Spreadsheet Control

You can register the Spreadsheet control in your application by using the **Vue.use()**.

Refer to the code example given below.

```ts

import Vue from 'vue';
import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet';

Vue.use(SpreadsheetPlugin);
export default {}
```

> Registering **SpreadsheetPlugin** in vue, will register the Spreadsheet component along with its required child directives globally.

## Adding CSS Reference

import components CSS as given below in **style** section of the **App.vue** file. Here Material theme is used for this sample.

```
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
```

## Adding Spreadsheet Control

Add the Vue Spreadsheet by using **ejs-spreadsheet** selector in **template** section of the **App.vue** file.

```
<template>
  <ejs-spreadsheet> </ejs-spreadsheet>
</template>

<script>
import Vue from 'vue';
import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet';

Vue.use(SpreadsheetPlugin);
export default { }
</script>
```

## Run the application

The Vue Spreadsheet application is configured to compile and run the application in a browser. Use the following command to run the application.

```bash
npm run dev
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/spreadsheet/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/getting-started-cs1" %}

> You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/vue-ui-components/vue-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://ej2.syncfusion.com/vue/demos/#/material/spreadsheet/default.html) that shows you how to present and manipulate data.

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)