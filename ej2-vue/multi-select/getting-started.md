---
layout: post
title: Getting started with Vue Multi select component | Syncfusion
description:  Checkout and learn about Getting started with Vue Multi select component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Multi select Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Multi select component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

To get start quickly with MultiSelect Dropdown using Vue CLI , you can check on this video:

{% youtube "https://www.youtube.com/watch?v=E4kFxrpAJec" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

This article uses the [Vue Multi select component](https://www.syncfusion.com/vue-components/vue-multiselect-dropdown) as an example. Install the `@syncfusion/ej2-vue-dropdowns` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```
or

```bash
yarn add @syncfusion/ej2-vue-dropdowns
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Multi select component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Multiselect component using `Composition API` or `Options API`:

1\. First, import and register the Multiselect component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  components: {
    'ejs-multiselect': MultiSelectComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Multiselect component with [dataSource](https://ej2.syncfusion.com/staging/vue/documentation/api/multi-select/#datasource) and [placeholder](https://ej2.syncfusion.com/staging/vue/documentation/api/multi-select/#placeholder) property

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' :dataSource='sportsData' placeholder="Find a game"></ejs-multiselect>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Binding data source

After initialization, populate the data using [dataSource](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#datasource) &nbsp;property. Here, an array of string values is passed to the MultiSelect component.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-multiselect id='multiselect' :dataSource='sportsData'></ejs-multiselect>
    </div>
</template>

<script setup>
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
const sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-multiselect id='multiselect' :dataSource='sportsData'></ejs-multiselect>
    </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
  components: {
    'ejs-multiselect': MultiSelectComponent
  },
  data: function() {
    return {
      sportsData: ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis']
    };
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/getting-started/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/getting-started/getting-started-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/multi-select/getting-started/getting-started-cs1" %}

## Configure the Popup List

By default, the width of the popup list automatically adjusts according to the MultiSelect input element's width and the height of the popup list has '300px'.

You can also customize the suggestion list height and width using [popupHeight](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/getting-started/popup-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/getting-started/popup-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/getting-started/popup-cs1" %}

## See Also

* [How to bind the data](./data-binding/)