---
layout: post
title: Getting started with Vue Block Editor Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Block Editor component in Vue 2

This section explains how to create a simple Block Editor and configure its available functionalities in the Vue environment.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue Application

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. If Vue CLI is not installed yet, run the first command below.

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

<img src="https://ej2.syncfusion.com/vue/documentation/appearance/images/vue2-terminal.png" alt="Selecting the Vue 2 preset during project creation">

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

All Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are published on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the Vue Block Editor package by running the following command:

```bash
npm install @syncfusion/ej2-vue-blockeditor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-blockeditor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Block Editor component. For a complete list of available themes, refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Block Editor component

Follow the steps below to add the Vue Block Editor component using `Composition API` or `Options API`:

1\. First, import and register the Block Editor component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { BlockEditorComponent  } from "@syncfusion/ej2-vue-blockeditor";
export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section define the Block Editor component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id='container' style="margin: 50px auto;">
        <ejs-blockeditor></ejs-blockeditor>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

The complete example below combines the previous steps into a single **src/App.vue** file.

The following code summarizes the steps:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/getting-started/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/getting-started/index" %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run serve
```

or

```bash
yarn run serve
```

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli#migration-from-vue-2-to-vue-3) documentation.
