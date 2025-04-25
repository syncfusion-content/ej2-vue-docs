---
layout: post
title: Getting started with Vue Rating component | Syncfusion
description:  Checkout and learn about Getting started with Vue Rating component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Rating Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Rating component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

To get started quickly with Vue Rating component, you can check out this video:
{% youtube "https://www.youtube.com/watch?v=Qutn1Z-_BFI" %}

## Dependencies

The list of dependencies required to use the Rating component in your application is given as follows:

```js
|-- @syncfusion/ej2-vue-inputs
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
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

<img src="https://ej2.syncfusion.com/vue/documentation/appearance/images/vue2-terminal.png" alt="Vue 2 project" />

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

Install Syncfusion<sup style="font-size:70%">&reg;</sup> `Rating` packages using below command.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Rating component](https://www.syncfusion.com/vue-components/vue-rating) as an example. Install the `@syncfusion/ej2-vue-inputs` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Rating component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Rating component using `Composition API` or `Options API`:

1\. First, import and register the Rating component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<script setup>
import { RatingComponent as EjsRating } from "@syncfusion/ej2-vue-inputs";
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
export default {
name: "App",
components: {
"ejs-rating':":RatingComponent
}
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section define the Rating component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class='wrap'>
        <ejs-rating id="rating"></ejs-rating>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/vue/documentation/api/rating/#value) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/value-cs1" %}