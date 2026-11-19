---
layout: post
title: Vue 2 Getting Started with Vue Form Renderer component | Syncfusion
description:  Checkout and learn about Getting Started with Vue Form Renderer component of Syncfusion Essential JS 2 and more details.
control: Vue 2 Getting Started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Form Renderer Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Form Renderer component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install -g @vue/cli
vue create quickstart
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn global add @vue/cli
vue create quickstart
{% endhighlight %}
{% endtabs %}

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Please pick a preset** → **Default ([Vue 2] babel, eslint)**
- **Pick the package manager to use when installing dependencies:** → **Use NPM**

Then, navigate to the project directory:

```bash
cd quickstart
```

## Add the Vue Form Renderer package

To install the Form Renderer package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install @syncfusion/ej2-vue-form-renderer --save
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn add @syncfusion/ej2-vue-form-renderer
{% endhighlight %}
{% endtabs %}

## Add the CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add the Vue Form Renderer component

The Form Renderer is a schema-driven component. Define your form by passing a JSON schema to the `schema` property of the `<ejs-form-renderer>` element, and capture the submitted form data through the `submit` event.

The Form Renderer code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-formrenderer :schema="schema" :submit="onSubmit"></ejs-formrenderer>
</template>

<script>
import { FormRendererComponent, FormRendererPlugin } from "@syncfusion/ej2-vue-form-renderer";
import Vue from "vue";


Vue.use(FormRendererPlugin);

void FormRendererComponent;

export default {
  name: "App",
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
        // `args.data` holds the form values, `args.isValid` indicates whether every required/validation rule passed.
        console.log(args.data, args.isValid);
      }
    }
  }
};
</script>

<style>
@import "~@syncfusion/ej2-material3-theme/styles/material3.css";
</style>


{% endhighlight %}
{% endtabs %}

## Run the application

To run the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm run serve
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn run serve
{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Vue Form Renderer](./images/form-renderer.png)

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)
