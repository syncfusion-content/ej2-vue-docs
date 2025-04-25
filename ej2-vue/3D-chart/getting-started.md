---
layout: post
title: Getting started with Vue 3D Chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue 3D Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Vue 3D chart component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue 3D Chart component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the 3D Chart component.

```javascript
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-charts
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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue 3D Charts component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The **--save** will instruct NPM to include the chart package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue 3D Chart component:

1\. First, import and register the 3D Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { Chart3DComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the 3D Chart component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-chart3d id="container"> </ejs-chart3d>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs1" %}

## Module injection

3D Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic 3D Chart to visualize sales data for a particular year. For this application we are going to use column series, tooltip, data label, category axis and legend feature of the 3D Chart. Please find relevant feature service name and description as follows.

* `ColumnSeries3D` - Inject this provider to use column series.
* `Legend3D` - Inject this provider to use legend feature.
* `Tooltip3D` - Inject this provider to use tooltip feature.
* `DataLabel3D` - Inject this provider to use datalabel feature.
* `Category3D`  - Inject this provider to use category feature.

These modules should be injected to the provide section as follows,

 ```javascript
import { Chart3DComponent, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent
  },
  provide: {
    chart3d: [ColumnSeries3D]
  }
};
</script>
 ```

## Populate 3D chart with data

This section explains how to plot below JSON data to the 3D Chart.

```javascript
export default {
  data() {
    return {
        seriesData: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ]
    };
  }
};
```

* Add a series object to the 3D Chart by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/valueType/) for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs2" %}

* The sales data are in thousands, so format the vertical axis label by adding <b>$</b> as a prefix and <b>K</b> as a suffix to each label. This can be achieved by setting the ${value}K to the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#labelformat) property of axis. Here, `{value}` act as a placeholder for each axis label.

## Add 3D chart title

You can add a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#visible) property to true in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#legendsettings) object and by injecting the `Legend3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs4" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#visible) property to true in the [`dataLabel`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#datalabel) object and by injecting `DataLabel3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#enable) property as true in [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#tooltip) object and by injecting `Tooltip3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs6" %}

> You can refer to our `Vue 3D Charts` feature tour page for its groundbreaking feature representations. You can also explore our [Vue 3D Charts example](https://ej2.syncfusion.com/vue/demos/#/material3/three-dimension-chart/column.html) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.