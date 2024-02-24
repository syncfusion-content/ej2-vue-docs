---
layout: post
title: Getting started with Vue Textbox component | Syncfusion
description:  Checkout and learn about Getting started with Vue Textbox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Textbox Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Textbox component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

To get start quickly with Vue TextBox component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=cd3JLM8r3zE" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the TextBox component in your application.

```js
|-- @syncfusion/ej2-vue-inputs
  |-- @syncfusion/ej2-inputs
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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Textbox component](https://www.syncfusion.com/vue-components/vue-textbox) as an example. Install the `@syncfusion/ej2-vue-inputs` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-inputs --save
```
or

```bash
yarn add @syncfusion/ej2-vue-inputs
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Textbox component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.


## Adding TextBox to the application

Add the input element with `e-input` class into the `<template>` section of the `App.vue` file in src directory.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id ='wrap'>
        <div id ='input-container'>
            <div>
                <!--element which is going to render the TextBox-->
                <input class="e-input" type="text" placeholder="Enter Date" />
            </div>
        </div>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

## Adding icons to the TextBox

You can create a TextBox with icon as a group by creating the parent div element with the class `e-input-group` and add the icon element as span with the class `e-input-group-icon`. For detailed information, refer to the [Groups](./groups/) section.

```
      <!--element which is going to render the TextBox with date icon-->
      <div class="e-input-group">
            <input class="e-input" name='input' type="text" placeholder="Enter Date"/>
            <span class="e-input-group-icon e-input-popup-date"></span>
      </div>
```

```
  .e-input-group-icon.e-input-popup-date:before {
    content: "\e901";
  }
  
```

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

Output will be as follows:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs1" %}

## Floating label

The floating label TextBox floats the label above the TextBox after focusing, or filled with value in the TextBox. You can create the floating label TextBox by using `floatLabelType` API.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs2" %}

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
