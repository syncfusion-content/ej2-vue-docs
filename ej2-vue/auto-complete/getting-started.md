---
layout: post
title: Getting started with Vue Auto complete component | Syncfusion
description:  Checkout and learn about Getting started with Vue Auto complete component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple AutoComplete and how to configure the AutoComplete component.

To get start quickly with AutoComplete Component using Vue CLI, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=oFZf8uFAtQE" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the AutoComplete component in your application
is given below:

```javascript
|-- @syncfusion/ej2-vue-dropdowns
  |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use AutoComplete component.

To install AutoComplete component, use the following command

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
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { AutoCompleteComponent, AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.component(AutoCompletePlugin.name, AutoCompleteComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Binding data source

After initialization, populate the AutoComplete with data using the dataSource property. Here, an array of string values is passed to the AutoComplete component.

```
<template>
    <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark" ></ejs-autocomplete>
  </div>
</template>
<script>
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);
export default {
  name: 'app',
   data () {
    return {
      waterMark : 'e.g. Basketball',
      sportsData: ['American Football', 'Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ]
    }
  }
}
</script>
```

## Adding CSS Reference

Add AutoComplete component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
```

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs11" %}

## Custom values

The AutoComplete allows the user to give input as custom value which is not required to present in predefined set of values. By default, this support is enabled by [`allowCustom`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#allowcustom) property. The custom value will be sent to post back handler when a form is about to be submitted.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs12" %}

## Configure the suggestion list

By default, suggestion list width automatically adjusts according to the AutoComplete input element's width, and the height of the suggestion list has '300px'. The height and width of the popup list can also be customized using the [`popupHeight`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#popupheight) and [`popupWidth`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#popupwidth) property respectively. In the following sample, suggestion list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs13" %}

N> You can refer to our [Vue AutoComplete](https://www.syncfusion.com/vue-ui-components/vue-autocomplete) feature tour page for its groundbreaking feature representations. You can also explore our [Vue AutoComplete example](https://ej2.syncfusion.com/vue/demos/#/material/auto-complete/default.html) to know how to render and configure the autocomplete.

## See Also

* [How to bind the data](./data-binding/)