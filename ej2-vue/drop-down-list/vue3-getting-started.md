---
layout: post
title: Getting started vue3 with Vue Dropdown List component | Syncfusion
description: Checkout and learn about Getting started vue3 with Vue Dropdown List component of Syncfusion Essential JS 2 and more details.
control: Dropdown List
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Dropdown List Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Dropdown List component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life-cycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup for local development

Easily set up a Vue 3 application using [Vite](https://vitejs.dev), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a Vue application using `create-vue`, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started) for more details.

To create a new Vue 3 application, run one of the following commands based on your preferred language:

***Vue with JavaScript***

```bash
npm create vite@latest my-app -- --template vue
```

***Vue with TypeScript***

```bash
npm create vite@latest my-app -- --template vue-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 3] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```bash
cd my-app
```

## Adding Vue Dropdowns package

To install the Dropdowns package, use the following command:

```bash
npm install @syncfusion/ej2-vue-dropdowns
```

or

```bash
yarn add @syncfusion/ej2-vue-dropdowns
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Dropdown components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-material3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-list/index.css";
</style>

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding Dropdown List component

Now, you can add the Vue Dropdown List component to your **src/App.vue** file by importing and defining it within your application. Then, populate the data using the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#datasource) property, which accepts an array of string values to display as suggestions. Use the following code:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-dropdownlist id='dropdownlist' :dataSource='sportsData'></ejs-dropdownlist>
    </div>
</template>

<script setup>
    import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
    const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];        
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-list/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-dropdownlist id='dropdownlist' :dataSource='sportsData'></ejs-dropdownlist>
    </div>
</template>

<script>
    import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
    //Component registration
    export default {
        name: 'App',
        components: {
            "ejs-dropdownlist": DropDownListComponent
        },
        data () {
            return {
                sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis']
            }
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-list/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

{% previewsample "page.domainurl/code-snippet/drop-down-list/getting-started/getting-started-cs1" %}

> You can refer to our [Vue Dropdown List](https://www.syncfusion.com/vue-components/vue-dropdown-list) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dropdown List example](https://ej2.syncfusion.com/vue/demos/#/material/drop-down-list/default.html) that shows how to render the Dropdown List in Vue.

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)