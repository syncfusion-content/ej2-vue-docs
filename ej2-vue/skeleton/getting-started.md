---
layout: post
title: Getting started with Vue Skeleton component | Syncfusion
description:  Checkout and learn about Getting started with Vue Skeleton component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Skeleton Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Skeleton component using the [Composition API](https://vuejs.org/guide/introduction.html#api-styles) / [Options API](https://vuejs.org/guide/introduction.html#api-styles).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies are required to use the Skeleton component in your application.

```js
|-- @syncfusion/ej2-vue-notifications
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-notifications
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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Skeleton component](https://www.syncfusion.com/vue-components/vue-skeleton) as an example. Install the `@syncfusion/ej2-vue-notifications` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-notifications --save
```
or

```bash
yarn add @syncfusion/ej2-vue-notifications
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Skeleton component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Skeleton component using `Composition API` or `Options API`:

1\. First, import and register the Skeleton component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { SkeletonComponent as EjsSkeleton } from "@syncfusion/ej2-vue-notifications";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { SkeletonComponent } from "@syncfusion/ej2-vue-notifications";
export default {
    components: {
    'ejs-skeleton': SkeletonComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Skeleton component with the [height](https://ej2.syncfusion.com/vue/documentation/api/skeleton/#height) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div>
        <ejs-skeleton height='15px'></ejs-skeleton>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/skeleton/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/skeleton/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}
