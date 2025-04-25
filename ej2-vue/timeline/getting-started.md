---
layout: post
title: Getting started with Vue Timeline component | Syncfusion
description:  Checkout and learn about Getting started with Vue Timeline component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Timeline Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Timeline component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies required to use the Timeline component in your application:

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base
|-- @syncfusion/ej2-vue-layouts
    |-- @syncfusion/ej2-vue-base

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

This article uses the `Vue Timeline component` as an example. Install the `@syncfusion/ej2-vue-layouts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-layouts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-layouts
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Timeline component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Timeline component using `Composition API` or `Options API`:

1\. First, import and register the Timeline component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    import { TimelineComponent as EjsTimeline } from "@syncfusion/ej2-vue-layouts";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TimelineComponent } from "@syncfusion/ej2-vue-layouts";
export default {
    components: {
      'ejs-timeline': TimelineComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Timeline component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-timeline id="timeline"></ejs-timeline>
</template>

{% endhighlight %}
{% endtabs %}

## Adding items

You can use the `<e-item>` directive within the `<e-items>` directive to define each item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-timeline id="timeline">
      <e-items>
        <e-item></e-item>
        <e-item></e-item>
        <e-item></e-item>
        <e-item></e-item>
      </e-items>
  </ejs-timeline>
</template>

<script setup>
  import { TimelineComponent as EjsTimeline, ItemsDirective as EItems, ItemDirective as EItem  } from "@syncfusion/ej2-vue-layouts";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-timeline id="timeline">
    <e-items>
      <e-item></e-item>
      <e-item></e-item>
      <e-item></e-item>
      <e-item></e-item>
    </e-items>
  </ejs-timeline>
</template>

<script>
import { TimelineComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-layouts";
export default {
    components: {
      'ejs-timeline': TimelineComponent,
      "e-items": ItemsDirective,
      "e-item": ItemDirective
    }
};
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/timeline/getting-started-cs1" %}
