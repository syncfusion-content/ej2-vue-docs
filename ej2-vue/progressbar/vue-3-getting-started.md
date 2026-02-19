---
layout: post
title: Vue 3 getting started with the Progressbar component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Progressbar component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Progress Bar Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Progress Bar component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component:

```
|-- @syncfusion/ej2-vue-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-vue-base
```

## Setup the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev). To create a new Vite project, use one of the commands specific to NPM or Yarn:

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

Since you selected `Yes`, the development server should start automatically. If you selected `No`, please follow these steps to set up and start the project manually:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in your project, install the corresponding npm package.

This guide uses the [Vue Progress Bar component](https://www.syncfusion.com/vue-components/vue-progressbar). Install the package using the following command:

```bash
npm install @syncfusion/ej2-vue-progressbar --save
```

or

```bash
yarn add @syncfusion/ej2-vue-progressbar
```

> The **--save** option will instruct NPM to include the Progress Bar package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Progress Bar component using `Composition API` or `Options API`:

1.First, import and register the Progress Bar component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";

// Component registration
export default {
  name: "App",
  components: {
    "ejs-progressbar": ProgressBarComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the Progress Bar component with the [type](https://ej2.syncfusion.com/vue/documentation/api/progressbar#type), [value](https://ej2.syncfusion.com/vue/documentation/api/progressbar#value), and [animation](https://ej2.syncfusion.com/vue/documentation/api/progressbar#animation) properties.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-progressbar id="percentage" :type='type' :value='value' :animation="animation">
    </ejs-progressbar>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `type`, `value`, and `animation` properties in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const type = 'Circular';
const value = 100;
const animation = {
    enable: true,
    duration: 2000,
    delay: 0
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  data() {
    return {
      type: 'Circular',
      value: 100,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      }
    };
  }
};
</script>

{% endhighlight %}
{% endtabs %}

Here is the complete code for the **src/App.vue** file with both API approaches:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-progressbar id="percentage" :type='type' :value='value' :animation="animation">
    </ejs-progressbar>
</template>

<script setup>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";

const type = 'Circular';
const value = 100;
const animation = {
    enable: true,
    duration: 2000,
    delay: 0
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-progressbar/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-progressbar id="percentage" :type='type' :value='value' :animation="animation">
    </ejs-progressbar>
</template>

<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";

// Component registration
export default {
  name: "App",
  components: {
    "ejs-progressbar": ProgressBarComponent
  },
  data() {
    return {
      type: 'Circular',
      value: 100,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      }
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-progressbar/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the application in development mode, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The development server will start, typically at `http://localhost:5173`. Open this URL in your browser to view the circular Progress Bar with animation.

The output will appear as follows:

![vue3-progressbar-demo](./images/vue3-progressbar-demo.png)

> **Sample**: [vue-3-progressbar-getting-started](https://github.com/SyncfusionExamples/vue3-progressbar-getting-started).

## Module Injection

The Progress Bar component features are organized into individual feature-wise modules. To use specific features such as annotations, you must inject the corresponding feature service using the `provide` option. The following feature service is available:

* `ProgressAnnotation` - Inject this service to enable annotations on the Progress Bar.

These modules should be injected into the `provide` section as follows:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script>
import { ProgressBarComponent, ProgressAnnotation } from "@syncfusion/ej2-vue-progressbar";
import { provide } from 'vue';

provide('progressbar', [ProgressAnnotation]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ProgressBarComponent, ProgressAnnotationService } from "@syncfusion/ej2-vue-progressbar";

export default {
  name: "App",
  components: {
    "ejs-progressbar": ProgressBarComponent
  },
  provide: {
    progressbar: [ProgressAnnotationService]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)