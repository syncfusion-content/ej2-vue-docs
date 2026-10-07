---
layout: post
title: Vue 3 Getting Started with the Form Renderer component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Form Renderer component of Syncfusion Essential JS 2 and more details.
control: Getting Started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Form Renderer Component in Vue 3

The Form Renderer is a powerful, schema-driven component that enables you to build and render complex forms with ease using a structured JSON schema definition. It streamlines form creation, customization, and data capture by letting you declaratively define form layouts, fields, and validation rules, and then render the form with a simple component property binding.

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Form Renderer component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

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

## Add Vue Form Renderer package

To install the Form Renderer package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install @syncfusion/ej2-vue-form-renderer
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn add @syncfusion/ej2-vue-form-renderer
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

## Adding Vue Form Renderer component

The Form Renderer is a schema-driven component. Define your form by passing a JSON schema to the `schema` property of the `<ejs-form-renderer>` element, and capture the submitted form data through the `submit` event.

The Form Renderer code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <ejs-formrenderer :schema="schema" :submit="onSubmit"></ejs-formrenderer>
</template>

<script>
import {
  FormRendererPlugin,
  FormRendererComponent
} from "@syncfusion/ej2-vue-form-renderer";

export default {
  name: "App",
  // Register the Form Renderer plugin so that all form fields are globally registered.
  provide: {
    FormRendererPlugin: [FormRendererPlugin]
  },
  components: {
    "ejs-formrenderer": FormRendererComponent
  },
  // Import the bundled module that wires up every built-in widget (textbox, checkbox, button, etc.).
  data() {
    return {
      schema: {
        version: "0.1.0",
        properties: {
          emailAddress: {
            id: "textbox_1785491685456_167",
            name: "emailAddress",
            type: "string",
            label: "Email Address",
            textboxType: "email",
            required: true,
            widget: "textbox"
          },
          password: {
            id: "textbox_1785491685456_537",
            name: "password",
            type: "string",
            label: "Password",
            textboxType: "password",
            required: true,
            minLength: 6,
            widget: "textbox"
          },
          rememberMe: {
            id: "checkbox_1785491685456_262",
            name: "rememberMe",
            type: "boolean",
            label: "Remember Me",
            widget: "checkbox"
          },
          submit: {
            id: "submit_button_initial",
            name: "defaultFormsubmit",
            type: "button",
            label: "Submit",
            buttonType: "submit",
            widget: "button",
            style: "primary",
            disabled: false
          }
        },
        layout: [
          { row: 0, col: 0, field: "emailAddress" },
          { row: 1, col: 0, field: "password" },
          { row: 2, col: 0, field: "rememberMe" },
          { row: 3, col: 0, field: "submit" }
        ],
        settings: {
          name: "Untitled Form"
        }
      }
    };
  },
  methods: {
    onSubmit: function (args) {
      if (args && args.data) {
        // `args.data` holds the form values, `args.isValid` indicates whether
        // every required/validation rule passed.
        console.log(args.data, args.isValid);
      }
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/material3.css";
</style>


{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-formrenderer :schema="schema" :submit="onSubmit"></ejs-formrenderer>
</template>

<script>
import {
  FormRendererPlugin,
  FormRendererComponent
} from "@syncfusion/ej2-vue-form-renderer";

export default {
  name: "App",
  // Register the Form Renderer plugin so that all form fields are globally registered.
  provide: {
    FormRendererPlugin: [FormRendererPlugin]
  },
  components: {
    "ejs-formrenderer": FormRendererComponent
  },
  // Import the bundled module that wires up every built-in widget (textbox, checkbox, button, etc.).
  data() {
    return {
      schema: {
        version: "0.1.0",
        properties: {
          emailAddress: {
            id: "textbox_1785491685456_167",
            name: "emailAddress",
            type: "string",
            label: "Email Address",
            textboxType: "email",
            required: true,
            widget: "textbox"
          },
          password: {
            id: "textbox_1785491685456_537",
            name: "password",
            type: "string",
            label: "Password",
            textboxType: "password",
            required: true,
            minLength: 6,
            widget: "textbox"
          },
          rememberMe: {
            id: "checkbox_1785491685456_262",
            name: "rememberMe",
            type: "boolean",
            label: "Remember Me",
            widget: "checkbox"
          },
          submit: {
            id: "submit_button_initial",
            name: "defaultFormsubmit",
            type: "button",
            label: "Submit",
            buttonType: "submit",
            widget: "button",
            style: "primary",
            disabled: false
          }
        },
        layout: [
          { type: "field", propertyId: "emailAddress" },
          { type: "field", propertyId: "password" },
          { type: "field", propertyId: "rememberMe" },
          { type: "field", propertyId: "submit" }
        ],
        settings: {
          name: "Untitled Form"
        }
      }
    };
  },
  methods: {
    onSubmit: function (args) {
      if (args.data) {
        // `args.data` holds the form values, `args.isValid` indicates whether
        // every required/validation rule passed.
        console.log(args.data, args.isValid);
      }
    }
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

![Vue Form Renderer](./images/form-renderer.png)

## Registering Syncfusion license

The Syncfusion® Vue Form Renderer requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/vue/documentation/licensing/overview) documentation.

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)
