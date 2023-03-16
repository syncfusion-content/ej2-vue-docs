---
layout: post
title: Getting started with Vue Heatmap chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Heatmap chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps required to create a heat map and demonstrates the basic usage of the heat map control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

For using heat map, the following minimum requirements are needed.

```javascript
|-- @syncfusion/ej2-vue-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications. To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using below Vue CLI command.

```bash
vue create quickstart
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use HeatMap component.

To install HeatMap component, use the following command

```bash
npm install @syncfusion/ej2-vue-heatmap --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.

* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { HeatMapPlugin } from '@syncfusion/ej2-vue-heatmap';

Vue.use(HeatMapPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { HeatMapComponent, HeatMapPlugin } from '@syncfusion/ej2-vue-heatmap';

Vue.component(HeatMapPlugin.name, HeatMapComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Initialize HeatMap component

Add the EJ2 Vue HeatMap using `<ejs-heatmap>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the HeatMap component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
    <ejs-heatmap></ejs-heatmap>
  </div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin } from '@syncfusion/ej2-vue-heatmap';

Vue.use(HeatMapPlugin);
export default Vue.extend ({});
</script>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic HeatMap.

```
<template>
<ejs-heatmap id="heatmap"></ejs-heatmap>
</template>

<script>
import Vue from 'vue';
import { HeatMapPlugin } from '@syncfusion/ej2-vue-heatmap';

Vue.use(HeatMapPlugin);

export default {};
</script>
```

## Module injection

The heat map components are segregated into individual feature-wise modules. To use its feature, you need to inject its feature service in the AppModule. In the current application,the basic heat map is modified to visualize sales revenue data for week, and  the tooltip and legend features of the heat map are used. Find the relevant feature modules and descriptions as follows.

* Legend - Provides the legend feature by injecting it.
* Tooltip - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and inject them into `provide`.

```javascript
import Vue from "vue";
import { HeatMapPlugin, Legend, Tooltip } from "@syncfusion/ej2-vue-heatmap";

Vue.use(HeatMapPlugin);

export default {
  provide: {
    heatmap: [Legend, Tooltip]
  }
};
 ```

## Populate heat map with data

This section explains how to populate the following two-dimensional array data to the heat map.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs1" %}

## Enable axis labels

You can add axis labels to the heat map and format those labels using the [xAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#xaxis) and [yAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs2" %}

## Add heat map title

Add a title using the [titleSettings](../api/heatmap/#titlesettings) property to the heat map to provide quick information to the user about the data populated in the heat map.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs3" %}

## Enable legend

Use a legend for the heat map in the [legendSettings](../api/heatmap/#legendsettings) object by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#visible) property to **true** and injecting the `Legend` module into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs4" %}

## Add data label

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](../api/heatmap/cellSettings/#showlabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellsettings) object.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs5" %}

## Add custom cell palette

The default palette settings of the heat map cells can be customized by using the [paletteSettings](../api/heatmap/#palettesettings) property. Using the [palette](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings/#palette) property in `paletteSettings` object, you can change the color set for the cells. You can change the color mode of the cells to fixed or gradient mode using the [type](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings/#type) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs6" %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](../api/heatmap/#showtooltip) property to **true** and injecting the `Tooltip` module into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs7" %}
