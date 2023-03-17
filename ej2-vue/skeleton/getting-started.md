---
layout: post
title: Getting started with Vue Skeleton component | Syncfusion
description:  Checkout and learn about Getting started with Vue Skeleton component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Skeleton Control

This section explains how to create a simple Skeleton, and configure its available
functionalities in Vue using Vue quickstart seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the Skeleton component in your application.

```js
|-- @syncfusion/ej2-vue-notifications
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-notifications
```

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
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

Install Syncfusion `Skeleton` packages using below command.

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

## Registering Skeleton component using `Vue.use()`

Import the Skeleton Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(SkeletonPlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered.
We can also use `Vue.Component()` to register `Skeleton`.

Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Skeleton

Add the EJ2 Vue Skeleton using `<ejs-skeleton>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <div>
        <ejs-skeleton height='15px'></ejs-skeleton>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    export default {
        data: function () {
            return {};
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Skeleton component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/skeleton/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}
