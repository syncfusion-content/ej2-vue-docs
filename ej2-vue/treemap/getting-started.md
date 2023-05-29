---
layout: post
title: Getting started with Vue Treemap component | Syncfusion
description:  Checkout and learn about Getting started with Vue Treemap component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a TreeMap and demonstrate its basic usage.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of minimum dependencies are required to use the treemap:

```javascript
|-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue applications. To install Vue CLI use the following command.

```bash
npm install -g @vue/cli

npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart

npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use TreeMap component.

To install TreeMap component, use the following command

```bash
npm install @syncfusion/ej2-vue-treemap –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.

* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { TreeMapPlugin } from '@syncfusion/ej2-vue-treemap';

Vue.use(TreeMapPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { TreeMapComponent, TreeMapPlugin } from '@syncfusion/ej2-vue-treemap';

Vue.component(TreeMapPlugin.name, TreeMapComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Initialize TreeMap component

Add the EJ2 Vue TreeMap using `<ejs-treemap>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the TreeMap component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
    <ejs-treemap></ejs-treemap>
  </div>
</template>
<script>
import Vue from 'vue';
import { TreeMapPlugin } from '@syncfusion/ej2-vue-treemap';

Vue.use(TreeMapPlugin);
export default Vue.extend ({});
</script>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic TreeMap.

```
<template>
<ejs-treemap id="treemap"></ejs-treemap>
</template>

<script>
import Vue from 'vue';
import { TreeMapPlugin } from '@syncfusion/ej2-vue-treemap';

Vue.use(TreeMapPlugin);

export default Vue.extend ({});
</script>
```

Since any data source has not been bound to the tree map, no shape will be rendered. Only an empty SVG element is appended to the tree map container.

## Module Injection

The tree map control is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `provide` option on component creation. Find the modules available in tree map and their descriptions as follows.

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

In the current application, the above basic tree map is modified to visualize international airport count in South America.

In this demo, the tree map is just rendered with labels. For this, you need not to import any modules.

## Render tree map

This section explains how to render the tree map with data source.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs15" %}

Here, the tree map is created with data source and set with the [`weightValuePath`] as count. You can customize the leaf level tree map items using the [`leafItemSettings`]. The properties such as [`fill`], [`border`], and [`labelPosition`] can be changed using the [`leafItemSettings`].

## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from the values that have to be compared for the item in the [`equalColorValuePath`] or [`rangeColorValuePath`] property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs16" %}

## Enable legend

You can show legend for the tree map by setting the [`visible`] property to true in [`legendSettings`] object and injecting the `TreeMapLegend` module using the `provide` option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs17" %}
