---
layout: post
title: Getting started with Vue Card component | Syncfusion
description:  Checkout and learn about Getting started with Vue Card component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Card Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Card component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The Card is pure CSS component so no other package dependencies are needed to render the Card.

```js
|-- @syncfusion/ej2-layouts
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

## Adding Syncfusion packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue card component](https://www.syncfusion.com/vue-components/vue-card) as an example. Install the `@syncfusion/ej2-vue-layouts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-layouts –save
```
or

```bash
yarn add @syncfusion/ej2-vue-layouts
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Card component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Creating Vue Sample

Add the HTML div element with **e-card** class into the `<template>` section of the `App.vue` file in src directory.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
     <div class = "e-card">
          Sample Card
        </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Adding a header and content

You can create Card with a header in a specific structure. For adding header you need to create a `div` element with `e-card-header` class added.

* You can include heading inside the Card header by adding a `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content/).

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<div class = "e-card">                    --> Root Element
    <div class="e-card-header">           --> Root Header Element
        <div class="e-card-header-caption">    --> Root Heading Element
            <div class="e-card-header-title"></div>   --> Heading Title Element
        </div>
        <div class="e-card-content"></div>         --> Card content Element
    </div>
</div>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/card/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Running the Project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/card/getting-started-cs1" %}

## See Also

* [How to add a header and content](header-content/)