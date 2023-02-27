---
layout: post
title: Getting started with Vue Floating action button component | Syncfusion
description:  Checkout and learn about Getting started with Vue Floating action button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started  with Vue Floating Action Button Component

This section explains how to create a simple Floating Action Button and demonstrate the basic usage of the Floating Action Button component in an Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Floating Action Button component in your application is given as follows:

```js
|-- @syncfusion/ej2-vue-buttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-vue-base
```

## Installation and Configuration

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

Install Syncfusion `Floating Action Button` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Registering Floating Action Button Component using `Vue.use()`

Import the Floating Action Button Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { FabPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(FabPlugin );

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Floating Action Button`. Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Floating Action Button

Add the EJ2 Vue Floating Action Button using `<ejs-fab>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <ejs-fab id='fab'></ejs-fab>
</template>

<script>
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(FabPlugin);

    export default {}
</script>
```

## Adding CSS reference

Add Floating Action Button component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Floating Action Button component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/floating-action-button/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/getting-started-cs1" %}

## Click event

The floating action button control triggers the `onclick` event when you click on the floating action button. You can use this event to perform the required action.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/floating-action-button/events-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs2" %}
