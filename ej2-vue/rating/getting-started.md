---
layout: post
title: Getting started with Vue Rating component | Syncfusion
description:  Checkout and learn about Getting started with Vue Rating component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Rating Component

This section explains how to create a simple Rating and demonstrate the basic usage of the Rating component in an Vue environment.

## Dependencies

The list of dependencies required to use the Rating component in your application is given as follows:

```js
|-- @syncfusion/ej2-vue-inputs
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
```

## Installation and configuration

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

Install Syncfusion `Rating` packages using below command.

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

## Registering Rating component using `Vue.use()`

Import the Rating Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(RatingPlugin);
export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Rating`. Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Rating

Add the EJ2 Vue Rating using `<ejs-rating>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <ejs-rating id="rating"></ejs-rating>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
Vue.use(RatingPlugin);
export default{}
</script>
```

## Adding CSS Reference

Add Rating component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Rating component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rating/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/vue/documentation/api/rating#value) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rating/value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/value-cs1" %}
