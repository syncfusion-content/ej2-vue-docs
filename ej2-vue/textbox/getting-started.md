---
layout: post
title: Getting started with Vue Textbox component | Syncfusion
description:  Checkout and learn about Getting started with Vue Textbox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains about how to create a simple TextBox through CSS classes using Essential JS 2
[quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the TextBox component in your application.

```js
|-- @syncfusion/ej2-vue-inputs
  |-- @syncfusion/ej2-inputs
  |-- @syncfusion/ej2-base

```

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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Textbox component.

To install Textbox component, use the following command

```bash
npm install @syncfusion/ej2-vue-inputs –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

Since the Textbox is a pure CSS component there is no need to refer the scripts

* The TextBox CSS files are available in the `ej2-inputs` package folder. This can be referenced in your application using the following code.

* Add Textbox component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding TextBox to the application

Add the input element with `e-input` class into the `<template>` section of the `App.vue` file in src directory.

```
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
<script>
import Vue from 'vue';
export default {
  name: 'wrap',
}
</script>

```

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

* Now, run the application in the browser using the following command.

```
npm run dev
```

Output will be as follows:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/icon-samples-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs1" %}

## Floating label

The floating label TextBox floats the label above the TextBox after focusing, or filled with value in the TextBox. You can create the floating label TextBox by using `floatLabelType` API.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/icon-samples-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs2" %}

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
