---
layout: post
title: Vue 3 Getting Started with the Form Builder component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Form Builder component of Syncfusion Essential JS 2 and more details.
control: Getting Started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Form Builder Component in Vue 3

The Form Builder is an intuitive, visual form designer that lets the user to create and customize forms interactively by dragging and dropping fields—no code required. Users can visually design forms, configure field properties, and preview the generated form in real time. The Form Builder also allows to export the form schema for use with the [Form Renderer](https://ej2.syncfusion.com/react/documentation/form-renderer/getting-started) control.

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Form Builder component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life-cycle hooks, and more.

## Prerequisites

Ensure that the development environment meets the required criteria listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Set Up the Vite Project

Easily set up a Vue 3 application using [Vite](https://vitejs.dev), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a Vue application using `create-vue`, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started) for more details.

To create a new Vue 3 application, run one of the following commands based on your preferred language:

***Vue with JavaScript***

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-app -- --template vue
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite@latest my-app -- --template vue
{% endhighlight %}
{% endtabs %}

***Vue with TypeScript***

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-app -- --template vue-ts
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite@latest my-app -- --template vue-ts
{% endhighlight %}
{% endtabs %}

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Install with npm and start now?** → **No**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

Then, navigate to the project directory:

```bash
cd my-app
```

## Add Vue Form Builder package

To install the Form Builder package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install @syncfusion/ej2-vue-form-builder
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn add @syncfusion/ej2-vue-form-builder
{% endhighlight %}
{% endtabs %}

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
@import "../node_modules/@syncfusion/ej2-material3-theme/style/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Vue Form Builder component

The Form Builder code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <ejs-formbuilder></ejs-formbuilder>
</template>

<script>
import {
  FormBuilderPlugin,
  FormBuilderComponent
} from "@syncfusion/ej2-vue-form-builder";

export default {
  name: "App",
  // Register the Form Builder plugin so that all form fields are globally registered.
  provide: {
    FormBuilderPlugin: [FormBuilderPlugin]
  },
  components: {
    "ejs-formbuilder": FormBuilderComponent
  },
  // Import the bundled module that wires up every built-in widget (textbox, checkbox, button, etc.).
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/material3.css";
</style>


{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-formbuilder></ejs-formbuilder>
</template>

<script>
import {
  FormBuilderPlugin,
  FormBuilderComponent
} from "@syncfusion/ej2-vue-form-builder";

export default {
  name: "App",
  // Register the Form Builder plugin so that all form fields are globally registered.
  provide: {
    FormBuilderPlugin: [FormBuilderPlugin]
  },
  components: {
    "ejs-form-builder": FormBuilderComponent
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm run dev
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn run dev
{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Vue Form Builder](./images/form-builder.png)

## Registering Syncfusion license

The Syncfusion® Vue Form Builder requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/vue/documentation/licensing/overview) documentation.

## Basic components of the Form Builder

The Form Builder control consists of the following sections:

1. **Left Pane / Toolbox** — Displays all the supported form fields, which can be dragged and dropped.
2. **Central design canvas** — Holds the dropped form fields to construct the form.
3. **Right Pane** — Provides options to customize the form settings as well as the selected form fields.
4. **Code view** — Displays the form schema during the form design process.
5. **Form Preview** — Allows you to preview and interact with the generated form in real time once it is created.

## Adding form fields to the design canvas

Form fields can be added to the central design canvas in the following ways:

* **Form Components Panel** — A toolbox of form fields is available in the left-side pane to drag and drop them onto the design canvas.
* **Context Menu in the Design Canvas** — After the first form field is dropped, a button at the end of the central canvas can be used to add additional form fields using a context menu that appears when the button is clicked.

![Form Builder with context menu](./images/form-builder-drag-drop.gif)

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)
