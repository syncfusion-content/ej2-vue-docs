---
layout: post
title: Getting started with Vue Combo box component | Syncfusion
description:  Checkout and learn about Getting started with Vue Combo box component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get Started

The following section explains the required steps to build the **ComboBox** component with its basic usage in step by step procedure.

To get start quickly with ComboBox component using Vue CLI, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=JEglveb2-hA" %}

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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use ComboBox component.

To install ComboBox component, use the following command

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
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(ComboBoxPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { ComboBoxComponent, ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.component(ComboBoxPlugin.name, ComboBoxComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue ComboBox using `<ejs-combobox>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the ComboBox component is provided as name in data option in the `<script>` section.

```
<template>
    <div class="control_wrapper">
        <ejs-combobox id='combobox'></ejs-combobox>
    </div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);

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
</style>
```

## Binding data source

After initialization, populate the ComboBox with data using the `dataSource` property. Here, an array of string values is passed to the ComboBox component.

```
<template>
    <div class="control_wrapper">
        <ejs-combobox id='combobox' :dataSource='sportsData'></ejs-combobox>
    </div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
      sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis']
    };
  }
});

</script>
```

## Run the application

After completing the configuration required to render a basic ComboBox, run the following command to display the output in your default browser.

```
npm run dev
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/getting-started/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/getting-started/getting-started-cs1" %}

## Custom values

The ComboBox allows the user to give input as custom value which is not required to present in predefined set of values. By default, this support is enabled by [allowCustom](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#allowcustom) property. In this case, both text field and value field considered as same.
The custom value will be sent to post back handler when a form is about to be submitted.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/getting-started/custom-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/getting-started/custom-cs1" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the ComboBox input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the [popupHeight](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#popupwidth) property respectively.

In the following sample, popup list's width and height have configured.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/getting-started/popup-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/getting-started/popup-cs2" %}

> You can refer to our [Vue ComboBox](https://www.syncfusion.com/vue-ui-components/vue-combobox) feature tour page for its groundbreaking feature representations.

## See Also

* [How to bind the data](./data-binding/)
