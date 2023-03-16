---
layout: post
title: Getting started with Vue Multi select component | Syncfusion
description:  Checkout and learn about Getting started with Vue Multi select component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create a simple **MultiSelect** component and configure its available functionalities in Vue.

To get start quickly with MultiSelect Dropdown using Vue CLI , you can check on this video:

{% youtube "https://www.youtube.com/watch?v=E4kFxrpAJec" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use MultiSelect component.

To install MultiSelect component, use the following command

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(MultiSelectPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { MultiSelectComponent, MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.component(MultiSelectPlugin.name, MultiSelectComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue MultiSelect using `<ejs-multiselect>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the MultiSelect component is provided as name in data option in the `<script>` section.

```
<template>
    <div class="control_wrapper">
        <ejs-multiselect id='multiselect'></ejs-multiselect>
    </div>
</template>
<script>
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MultiSelectPlugin);

export default Vue.extend({
  data: function() {
    return {

    };
  }
});

</script>
```

## Adding CSS Reference

Add ComboBox component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
```

## Binding data source

After initialization, populate the data using [dataSource](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#datasource) &nbsp;property. Here, an array of string values is passed to the MultiSelect component.

```
<template>
    <div class="control_wrapper">
        <ejs-multiselect id='multiselect' :dataSource='sportsData'></ejs-multiselect>
    </div>
</template>
<script>
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MultiSelectPlugin);

export default Vue.extend({
  data: function() {
    return {
      sportsData: ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis']
    };
  }
});

</script>
```

## Run the application

After completing the configuration required to render a basic  MultiSelect, run the following command to display the output in your default browser.

```
npm run dev
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/getting-started/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/getting-started/getting-started-cs1" %}

## Configure the Popup List

By default, the width of the popup list automatically adjusts according to the MultiSelect input element's width and the height of the popup list has '300px'.

You can also customize the suggestion list height and width using [popupHeight](../api/multi-select/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/getting-started/popup-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/getting-started/popup-cs1" %}

## See Also

* [How to bind the data](./data-binding/)