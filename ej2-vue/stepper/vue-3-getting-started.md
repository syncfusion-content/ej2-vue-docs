---
layout: post
title: Vue 3 getting started with the Vue Stepper component | Syncfusion
description:  Checkout and learn about Vue 3 getting started with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Stepper Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Stepper component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

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

## Add Vue Stepper packages

To install the Stepper packages, use the following command:

```bash
npm install @syncfusion/ej2-vue-navigations
```

or

```bash
yarn add @syncfusion/ej2-vue-navigations
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
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
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/stepper/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Vue Stepper component

The Stepper code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>                          
  <ejs-stepper :steps="textOnly" ></ejs-stepper>
</template>

<script setup>
import { StepperComponent as EjsStepper } from '@syncfusion/ej2-vue-navigations';

const textOnly = [
    {text: '1'},
    {text: '2'},
    {text: '3'},
    {text: '4'},
    {text: '5'}
]

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/stepper/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>                          
  <ejs-stepper :steps="textOnly" ></ejs-stepper>
</template>

<script>
import { StepperComponent } from "@syncfusion/ej2-vue-navigations";

export default {
    components: { 
    'ejs-stepper': StepperComponent
    },
    data: function () {
        return {
            textOnly: [
                {text: '1'},
                {text: '2'},
                {text: '3'},
                {text: '4'},
                {text: '5'}
            ]
        };
    },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/stepper/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

![Output](./images/stepper.png)

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)
