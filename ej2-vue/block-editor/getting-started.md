---
layout: post
title: Getting started with Vue BlockEditor Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Vue BlockEditor component, its elements, and more details.
platform: ej2-vue
control: BlockEditor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue BlockEditor component in Vue 2

This section explains how to create a simple BlockEditor and configure its available functionalities in the Vue environment.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The list of dependencies required to use the BlockEditor component in your application is given as follows:

```js
|-- @syncfusion/ej2-vue-blockeditor
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
```

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

<img src="https://ej2.syncfusion.com/vue/documentation/appearance/images/vue2-terminal.png" alt="Vue 2 project">

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue BlockEditor component` as an example. Install the `@syncfusion/ej2-vue-blockeditor` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-blockeditor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-blockeditor
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the BlockEditor component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-blockeditor/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue BlockEditor component using `Composition API` or `Options API`:

1\. First, import and register the BlockEditor component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { BlockEditorComponent as EjsBlockEditor  } from "@syncfusion/ej2-vue-blockeditor";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { BlockEditorComponent  } from "@syncfusion/ej2-vue-blockeditor";
export default {
  components: {
    'ejs-BlockEditor': BlockEditorComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section define the BlockEditor component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id='container'>
        <ejs-BlockEditor></ejs-BlockEditor>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/getting-started/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

{% previewsample "page.domainurl/code-snippet/block-editor/getting-started/index" %}