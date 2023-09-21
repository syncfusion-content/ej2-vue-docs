---
layout: post
title: Getting started with Vue HeatMap chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue HeatMap chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue HeatMap Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue HeatMap component

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

This article uses the [Vue HeatMap component](https://www.syncfusion.com/vue-components/vue-heatmap-chart) as an example. Install the `@syncfusion/ej2-vue-heatmap` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-heatmap --save
```
or

```bash
yarn  add @syncfusion/ej2-vue-heatmap
```

## Adding Syncfusion Vue HeatMap component

Follow the below steps to add the Vue HeatMap component:

1\. First, import and register the HeatMap component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { HeatMapComponent } from '@syncfusion/ej2-vue-heatmap';

export default {
  components: {
    'ejs-heatmap' : HeatMapComponent
  },
  data: function() {
    return {
      dataSource: [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
      ]
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the HeatMap component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
      <ejs-heatmap id="heatmap" :dataSource='dataSource'></ejs-heatmap>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs8/app.vue %}
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

{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs8" %}

## Module injection

The heat map components are segregated into individual feature-wise modules. To use its feature, you need to inject its feature service in the AppModule. In the current application,the basic heat map is modified to visualize sales revenue data for week, and  the tooltip and legend features of the heat map are used. Find the relevant feature modules and descriptions as follows.

* Legend - Provides the legend feature by injecting it.
* Tooltip - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and inject them into `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import Vue from "vue";
import { HeatMapComponent, Legend, Tooltip } from "@syncfusion/ej2-vue-heatmap";

export default {
  components: {
    'ejs-heatmap': HeatMapComponent
  },
  provide: {
    heatmap: [Legend, Tooltip]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Populate heat map with data

This section explains how to populate the following two-dimensional array data to the heat map.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs1" %}

## Enable axis labels

You can add axis labels to the heat map and format those labels using the [xAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#xaxis) and [yAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs2" %}

## Add heat map title

Add a title using the [titleSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#titlesettings) property to the heat map to provide quick information to the user about the data populated in the heat map.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs3" %}

## Enable legend

Use a legend for the heat map in the [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#legendsettings) object by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#visible) property to **true** and injecting the `Legend` module into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs4" %}

## Add data label

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#showlabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellsettings) object.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs5" %}

## Add custom cell palette

The default palette settings of the heat map cells can be customized by using the [paletteSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#palettesettings) property. Using the [palette](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings/#palette) property in `paletteSettings` object, you can change the color set for the cells. You can change the color mode of the cells to fixed or gradient mode using the [type](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings/#type) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs6" %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#showtooltip) property to **true** and injecting the `Tooltip` module into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs7" %}
