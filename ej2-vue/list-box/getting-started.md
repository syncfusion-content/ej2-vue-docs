---
layout: post
title: Getting Started with Vue ListBox in Vue 2 | Syncfusion
description: Set up a Vue 2 project with Vue-CLI and integrate the Syncfusion Vue ListBox component using the Composition or Options API.
control: ListBox
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue ListBox in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue ListBox component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:


```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 2] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Navigate to the project directory:

```bash
cd quickstart
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
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/list-box/index.css";
</style>

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding ListBox component

Now, you can add the Vue ListBox component to your **src/App.vue** file by importing and defining it within your application. Then, populate the data using the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/list-box#datasource) property. Here, an array of object is passed to the ListBox component. Use the following code:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' ></ejs-listbox>
    </div>
  </div>
</template>
<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
  components: {
    'ejs-listbox': ListBoxComponent
  },
  data (){
    return {
       data: [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One-77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
]
    }
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/list-box/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

```bash
npm run dev
`
``
or

```bash
yarn run serve
```
        
The output will appear as follows:
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs9" %}

> You can refer to our [Vue ListBox](https://www.syncfusion.com/vue-components/vue-listbox) feature tour page for its groundbreaking feature representations. You can also explore our [Vue ListBox example](https://ej2.syncfusion.com/vue/demos/#/material/list-box/default.html) that shows how to render the ListBox in Vue.

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)