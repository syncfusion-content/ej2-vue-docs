---
layout: post
title: Predefined dialogs getting started with Vue Predefined dialogs component | Syncfusion
description:  Checkout and learn about Predefined dialogs getting started with Vue Predefined dialogs component of Syncfusion Essential JS 2 and more details.
control: Predefined dialogs getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Predefined Dialogs Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue Predefined Dialogs component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

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

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

To use the Vue Predefined Dialogs component in the project, the `@syncfusion/ej2-vue-popups` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-popups --save
```

or

```bash
yarn add @syncfusion/ej2-vue-popups
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Predefined Dialogs component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Adding Syncfusion Vue3 Predefined Dialogs in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Predefined Dialogs using following steps.

* Import the `DialogUtility` in the `<script>` section of the `src/App.vue` file.

  {% tabs %}
  {% highlight html tabtitle="~/src/App.vue" %}

   <script>
      import { DialogUtility } from "@syncfusion/ej2-vue-popups";
    </script>

  {% endhighlight %}
  {% endtabs %}

  Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div class="predefinedDialogs">
    <button id="alertDlgBtn" @click="alertBtnClick" class="e-danger">Alert</button>
  </div>
</template>
<script>
  import { DialogUtility } from "@syncfusion/ej2-vue-popups";
  export default {
    setup() {
      const alertBtnClick = () => {
        DialogUtility.alert({
          title: "Low battery",
          content: "10% of battery remaining",
        });
      };
      return {
        alertBtnClick
      };
    }
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

  .predefinedDialogs {
    height: 100%;
    min-height: 350px;
  }
</style>


{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div class="predefinedDialogs">
    <button id="alertDlgBtn" @click="alertBtnClick" class="e-danger">Alert</button>
  </div>
</template>
<script>
  import { DialogUtility } from "@syncfusion/ej2-vue-popups";
  export default {
    data() {
      return {};
    },
    methods: {
      alertBtnClick() {
        DialogUtility.alert({
          title: "Low battery",
          content: "10% of battery remaining",
        });
      },
    },
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  .predefinedDialogs {
    height: 100%;
    min-height: 350px;
  }
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

web server will be initiated, open the quick start app in the browser at port `localhost:8080`.