---
layout: post
title: Getting started with Vue Badge component | Syncfusion
description:  Checkout and learn about Getting started with Vue Badge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple Badge component with its basic usage in step-by-step procedure.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Installation and configuration

* You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications. To install Vue CLI use the following command.

    ```bash
    npm install -g @vue/cli
    npm install -g @vue/cli-init
    ```

* To setup basic  sample use the following Vue CLI commands.

    ```bash
    vue init webpack-simple quickstart

    cd quickstart

    npm install

    ```

* Install Syncfusion `Badge` packages using below command.

    ```bash
    npm install @syncfusion/ej2-notifications --save
    ```

## Using Badge in Vue Application

Add an HTML span element with `e-badge` class inside any wrapper element `(h1)` into the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <div id="app">
        <h1>Badge Component <span class="e-badge">New</span></h1>
    </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {};
  }
}
</script>
```

## Adding CSS Reference

Add Badge component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
</style>
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Avatar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/badge/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/getting-started-cs1" %}

## See Also

[Types of Badge](./types)
