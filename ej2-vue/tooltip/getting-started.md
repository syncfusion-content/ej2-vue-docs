---
layout: post
title: Getting started with Vue Tooltip component | Syncfusion
description:  Checkout and learn about Getting started with Vue Tooltip component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Tooltip Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Tooltip component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

This article uses the [Vue Tooltip component](https://www.syncfusion.com/vue-components/vue-tooltip) as an example. Install the `@syncfusion/ej2-vue-popups` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-popups --save
```
or

```bash
yarn add @syncfusion/ej2-vue-popups
```  

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Tooltip component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Tooltip component using `Composition API` or `Options API`:

1\. First, import and register the Tooltip component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
export default {
  components: {
    'ejs-tooltip': TooltipComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Tooltip component with the [content](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#content) property

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
    <ejs-tooltip ref="tooltip" content='Tooltip content' >
            <span>Show Tooltip</span>
        </ejs-tooltip>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/tooltip/getting-started-cs1" %}

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)
