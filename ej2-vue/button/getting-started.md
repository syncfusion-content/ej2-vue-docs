---
layout: post
title: Getting started with Vue Button component | Syncfusion
description:  Checkout and learn about Getting started with Vue Button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Button and to configure the Button component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Button component in your application is given below :

```js
|-- @syncfusion/ej2-vue-buttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-vue-base
```

## Installation and   configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli

npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart

npm install

```

Install Syncfusion `Button` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Registering Button component using `Vue.use()`

Import the Button Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Button`.

Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Button

Add the EJ2 Vue Button using `<ejs-button>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
<ejs-button>Button</ejs-button>
</template>

<script>
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);

export default {}
</script>
```

## Adding CSS Reference

Add Button component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs1" %}

## Change Button type

To change the default Button to flat Button, set the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button/#cssclass) property to `e-flat` and text content of the Button is set using [`content`](https://ej2.syncfusion.com/vue/documentation/api/button/#content) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs2" %}

## See Also

* [Types of Button](./types-and-styles#button-types)