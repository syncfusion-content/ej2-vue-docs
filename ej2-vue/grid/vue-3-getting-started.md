---
layout: post
title: Vue 3 getting started with the DataGrid component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue DataGrid component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue DataGrid Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue DataGrid component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: The name of the project can be specified directly. For this article, the project name is set as `my-project`.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Rolldown is Vite's new experimental faster bundler (rust-based, replacing rollup). Choose `No` uses the stable, proven rollup-based Vite (recommended for most users)

```bash
Use rolldown-vite (Experimental)? No
```

5.Install dependencies and start the dev server.

```bash
Install with npm and start now?: Yes
```

Terminate the application, then run the following command:

```bash
cd my-project
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grids package

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```

or

```bash
yarn add @syncfusion/ej2-vue-grids
```

>Before including Syncfusion styles, make sure to remove the default styles defined in **style.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.

## Adding CSS reference

The following CSS files are available in the ../node_modules/@syncfusion package folder. Add these as references in **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding DataGrid component

The DataGrid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs6" %}

## Run the application

```bash
npm run dev
```

or

```bash
yarn run dev
```

## See also

* [DataGrid Feature Modules](./module)
* [Getting Started with Vue UI Components using Composition API and TypeScript](../guide/introduction.html#composition-api)
* [Getting Started with Vue UI Components using Options API and TypeScript](../guide/introduction.html#options-api)
* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)