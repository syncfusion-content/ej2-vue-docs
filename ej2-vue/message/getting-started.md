---
layout: post
title: Getting started with Vue Message component | Syncfusion
description:  Checkout and learn about Getting started with Vue Message component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the Vue Message component with its basic usage in step by step procedure.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Message component in the application.

```js
|-- @syncfusion/ej2-vue-notifications
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-popups
  |-- @syncfusion/ej2-notifications
  |-- @syncfusion/ej2-vue-base
```

## Installation and configuration

Use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup vue applications.

To install Vue CLI, use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using the following Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install the Message component, use the following command.

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

## Registering Message Component

For registering Vue Message component, two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Message component plugin from the `ej2-vue-notifications` package and register the same using the Vue.use() with component plugin as its argument.

Refer the following code sample.

```ts
import { MessagePlugin } from '@syncfusion/ej2-vue-notifications';

Vue.use(MessagePlugin);
```

### Using Vue.component()

Import the Message component and Message component plugin from the `ej2-vue-notifications` package and register it using the Vue.component() with the name of the Message component plugin and the Vue Message component as its arguments.

Refer the following code sample.

```ts
import { MessageComponent, MessagePlugin } from '@syncfusion/ej2-vue-notifications';

Vue.component(MessagePlugin.name, MessageComponent);
```

## Adding Message Component

Add the EJ2 Vue Message by using the `<ejs-message>` selector to the `<template>` section of the `App.vue` file in the src directory. The content attribute of the Message component is provided as content in the data option of the `<script>` section.

```
<template>
  <ejs-message id="msg" :content="content"></ejs-message>
</template>
<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);
export default {
  data () {
    return {
      content: "Please read the comments carefully"
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";
</style>
```

## Adding CSS Reference

Add the Message component's styles as follows in the `<style>` section of the `App.vue` file.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>
```

## Running the Application

Now, run the `npm run dev` command in the console, it will build the application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}

{% include code-snippet/message/getting-started-cs4/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs4" %}