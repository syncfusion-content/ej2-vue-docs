---
layout: post
title: Getting started with Vue Speed dial component | Syncfusion
description:  Checkout and learn about Getting started with Vue Speed dial component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Speed Dial Component

This section explains how to create a simple Speed Dial and demonstrate the basic usage of the Speed Dial component in an Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Speed Dial component in your application is given as follows:

```js
|-- @syncfusion/ej2-vue-buttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-vue-base
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

Install Syncfusion `Speed Dial` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Registering Speed Dial component using `Vue.use()`

Import the Speed Dial Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { SpeedDialPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(SpeedDialPlugin);
export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Speed Dial`. Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize SpeedDial

Add the EJ2 Vue Speed Dial using `<ejs-speeddial>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
        <ejs-speeddial id='speeddial'  content='Edit' target='#targetElement' :items='items'></ejs-speeddial>
    </div>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";
Vue.use(SpeedDialPlugin);
export default{
    data() {
        return {
            items: [
                {
                    text:'Cut'
                },
                {
                    text:'Copy'
                },
                {
                    text:'Paste'
                }
            ]
        };
    }
}
</script>
```

## Adding CSS Reference

Add Speed Dial component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Speed Dial component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/getting-started-cs1" %}
