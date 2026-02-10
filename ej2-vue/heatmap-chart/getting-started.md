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

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue HeatMap component into your application.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The HeatMap component requires the following packages:

```javascript
|-- @syncfusion/ej2-vue-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
```

## Setting up the Vue 2 project

To create a new Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and initialize your project:

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

When prompted, select the `Default ([Vue 2] babel, eslint)` option from the menu.

![Vue 2 project](./images/vue2-terminal.png)

After the `quickstart` project is created with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use the Vue HeatMap component, install the required npm package.

This article uses the [Vue HeatMap component](https://www.syncfusion.com/vue-components/vue-heatmap-chart) as an example. Install the `@syncfusion/ej2-vue-heatmap` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-heatmap --save
```

or

```bash
yarn add @syncfusion/ej2-vue-heatmap
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue HeatMap component

To add the Vue HeatMap component to your project, follow these steps:

1\. Import and register the HeatMap component in the `script` section of the **src/App.vue** file.

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

2\. In the `template` section, define the HeatMap component element.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
      <ejs-heatmap id="heatmap" :dataSource='dataSource'></ejs-heatmap>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the complete code for the **src/App.vue** file after implementing the above steps:

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

**Available feature modules:**

* **Legend** - Enables the legend display to indicate the color gradient and value ranges.
* **Tooltip** - Enables interactive tooltips that display information when hovering over HeatMap cells.

## Populate the HeatMap with data

Add data to the HeatMap by binding a two-dimensional array to the `dataSource` property:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs1" %}

## Enable axis labels

Display axis labels on the HeatMap using the [xAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap#xaxis) and [yAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap#yaxis) properties. Axis labels provide context for the data values displayed in each cell.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs2" %}

## Add a HeatMap title

Include a title on the HeatMap using the [titleSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap#titlesettings) property. A title provides context and improves the clarity of the visualization.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs3" %}

## Enable the legend

Display a legend on the HeatMap by enabling the [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap#legendsettings) property. Set the [visible](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings#visible) property to **true** and ensure the `Legend` module is injected into the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs4" %}

## Add data labels

Enhance HeatMap readability by displaying data labels in each cell. Set the [showLabel](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings#showlabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap#cellsettings) object.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs5" %}

## Apply a custom cell palette

Customize the color scheme of HeatMap cells using the [paletteSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap#palettesettings) property. The [palette](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings#palette) property allows you to define custom colors, while the [type](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings#type) property controls whether colors are applied as fixed or gradient modes.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs6" %}

## Enable tooltips

Tooltips provide additional information when space constraints prevent displaying data labels. Enable tooltips by setting the [showTooltip](https://ej2.syncfusion.com/vue/documentation/api/heatmap#showtooltip) property to **true** and injecting the `Tooltip` module into the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs7" %}
