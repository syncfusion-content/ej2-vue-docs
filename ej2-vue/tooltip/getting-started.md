---
layout: post
title: Getting started with Vue Tooltip component | Syncfusion
description:  Checkout and learn about Getting started with Vue Tooltip component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple Tooltip component with its basic usage in step-by-step procedure.

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

* Install Syncfusion `Tooltip` packages using below command.

    ```bash
    npm install @syncfusion/ej2-vue-popups --save
    ```

## Registering Tooltip component using `Vue.use()`

Import the Tooltip Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```ts
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";

Vue.use(TooltipPlugin);
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Tooltip`. Refer [here](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli#register-the-syncfusion-vue-component) to know more about component registration.

## Initialize Tooltip

Add the EJ2 Vue Tooltip using `<ejs-tooltip>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <div id="app">
    <ejs-tooltip ref="tooltip" content='Tooltip content' >
            <span>Show Tooltip</span>
        </ejs-tooltip>
  </div>
</template>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

export default {
  data() {
    return { };
  }
}
</script>
```

## Adding CSS Reference

Add Tooltip component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Tooltip.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tooltip/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/getting-started-cs1" %}

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)
