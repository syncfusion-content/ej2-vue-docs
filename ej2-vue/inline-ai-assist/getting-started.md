---
layout: post
title: Getting started with the Vue Inline AI Assist component | Syncfusion
description: Checkout and learn about Getting started with Vue Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Inline AI Assist Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Inline AI Assist component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the `vue create` command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> packages to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages and dependencies

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use the Inline AI Assist component, install the main package and note its dependencies:

```bash
npm install @syncfusion/ej2-vue-interactive-chat --save
```

Dependencies (installed with the package):

```text
|-- @syncfusion/ej2-interactive-chat
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-popups
```

or

```bash
yarn add @syncfusion/ej2-vue-interactive-chat
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Import the theme CSS for the components. In this example the `tailwind3`-based Tailwind styles are used and imported into the `<style>` section of `src/App.vue`:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add the Inline AI Assist component

Follow the steps below to add the Inline AI Assist component using `Composition API` or `Options API`:

1. Import and register the component in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from "@syncfusion/ej2-vue-interactive-chat";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { InlineAIAssistComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-inlineaiassist': InlineAIAssistComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the Inline AI Assist component inside a container element. Set a reasonable size for demonstration.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <div id="container" style="height: 300px; width:600px;">
      <br>
      <ejs-inlineaiassist></ejs-inlineaiassist>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/getting-started" %}

## RelateTo and target configuration

You can use the `relateTo` property to position the Inline AI Assist relative to a specific DOM element. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement. The `target` property specifies the element or CSS selector where the Inline AI Assist will be appended. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/relateTo-target/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/relateTo-target/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/relateTo-target" %}

## Response display modes

Responses can be shown in two modes: `Inline` (updates content in-place) and `Popup` (shows responses in a floating popup). Toggle this behavior with the `responseMode` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/response-mode/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/response-mode/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-mode" %}

