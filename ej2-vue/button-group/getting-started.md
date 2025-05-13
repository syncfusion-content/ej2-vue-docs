---
layout: post
title: Getting started with Vue Button group component | Syncfusion
description:  Checkout and learn about Getting started with Vue Button group component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Button group Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Button group component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The list of dependencies required to use the Button component in your application is given below:

```js
|-- @syncfusion/ej2-vue-splitbuttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Button group component](https://www.syncfusion.com/vue-components/vue-button-group) as an example. Install the `@syncfusion/ej2-splitbuttons` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-splitbuttons --save
```
or

```bash
yarn add @syncfusion/ej2-vue-splitbuttons
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Button group component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Button group component using `Composition API` or `Options API`:

1\. First, import and register the Button group component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-button': ButtonComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Creating Vue Sample

Add a div element with class name as `e-btn-group` and add the button elements that needs to be group inside the `div` element in `App.vue` file.

To render button elements as EJ2 Vue Button, then add [`Button dependencies`](./../button/getting-started#dependencies) in `systemjs.config.js` file. Then import `ButtonPlugin` from `ej2-vue-buttons`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button>HTML</ejs-button>
        <ejs-button>CSS</ejs-button>
        <ejs-button>Javascript</ejs-button>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs2/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs2" %}

## Orientation

ButtonGroup can be arranged in vertical and horizontal orientation. By default, it is horizontally aligned.

### Vertical Orientation

ButtonGroup can be aligned vertically using the built-in CSS class `e-vertical` to the target element.

The following example illustrates how to achieve vertical orientation in ButtonGroup,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs3" %}

> ButtonGroup with SplitButton component nesting won't works in vertical orientation.

## See Also

* [Initialize ButtonGroup using util function](./how-to/initialize-buttongroup-using-util-function)