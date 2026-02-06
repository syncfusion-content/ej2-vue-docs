---
layout: post
title: Getting started with Vue Breadcrumb component | Syncfusion
description:  Checkout and learn about Getting started with Vue Breadcrumb component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Breadcrumb Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Breadcrumb component

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following list of dependencies are required to use the Breadcrumb component in your application.

```js
|-- @syncfusion/ej2-vue-navigations
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Breadcrumb component](https://www.syncfusion.com/vue-components/vue-breadcrumb) as an example. Install the `@syncfusion/ej2-vue-navigations` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-navigations --save
```
or

```bash
yarn add @syncfusion/ej2-vue-navigations
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Breadcrumb component:

1\. First, import and register the Breadcrumb component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { BreadcrumbComponent } from "@syncfusion/ej2-vue-navigations";

export default {
   components:{
    'ejs-breadcrumb': BreadcrumbComponent
   }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Breadcrumb component with the [enableNavigation](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb#enablenavigation) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
<div>
<ejs-breadcrumb :enableNavigation='false'></ejs-breadcrumb>
</div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs5/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs5" %}

## Add Items to the Breadcrumb Component

Use `items` property to bind items for Breadcrumb component. The below example demonstrates the basic rendering of Breadcrumb with items support.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs6" %}

## Enable or Disable Navigation

This feature enables or disables the item navigation. By default, the navigation will be enabled when setting `Url` property. To prevent breadcrumb item navigation, set `enableNavigation` property as false in Breadcrumb. The below example shows enabling and disabling the navigation of Breadcrumb items.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs7" %}