---
layout: post
title: Getting started with Vue 3D Chart component | Syncfusion
description: Checkout and learn about Getting started with Vue 3D Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the 3D Chart component (Vue 2)

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Chart component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the 3D Chart component.

```
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

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Terminal showing Vue CLI creating a Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue 3D Chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running:

```bash
npm install @syncfusion/ej2-vue-charts
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the 3D Chart component:

1. First, import and register the 3D Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-chart3d id="container">
      <e-chart3d-series-collection>
        <e-chart3d-series type="Column"></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>

<script>
import { 
  Chart3DComponent, 
  Chart3DSeriesCollectionDirective, 
  Chart3DSeriesDirective 
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
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

## Module registration

The 3D Chart component is organized into feature-specific modules. In Vue, enable a feature by registering its module(s) in the component's `provide` option. The following features are demonstrated in the examples:

* `ColumnSeries3D` — Module for column series.
* `Legend3D` — Module for legend support.
* `Tooltip3D` — Module for tooltip support.
* `DataLabel3D` — Module for data labels.
* `Category3D` — Module for category axis support.

The sample code below shows how to register the required modules in the component `provide` option:

```javascript
import { 
  Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective,
  Chart3D, ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D 
} from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  provide: {
    chart3d: [Chart3D, ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D]
  }
};
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

* Add a series object to the 3D Chart by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/valueType) for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs2" %}

* The sales data are in thousands. Format the vertical axis labels by adding <b>$</b> as a prefix and <b>K</b> as a suffix by setting the axis `labelFormat` to '${value}K' using the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3daxismodel#labelformat) property. Here, `{value}` is a placeholder for each axis label.

## Verify the chart

After starting the dev server, confirm the 3D chart renders correctly:

- Start the dev server with `npm run serve` or `yarn run serve`.
- Open the project URL shown in the terminal and verify the chart displays.
- If the chart does not render, check the browser console for errors related to missing modules, incorrect imports, or incompatible Vue versions.

## Troubleshooting (common issues)

- Chart not rendering: ensure required 3D modules are registered in `provide` and that `seriesData` contains valid data.
- Incorrect module key: some sample code uses the `chart3d` key in `provide`; keep the key consistent with the examples used in the project.
- Version mismatch: confirm `@syncfusion/ej2-vue-charts` is compatible with the project's Vue version.

## Add 3D chart title

You can add a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dlegendsettingsmodel#visible) property to true in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel#legendsettings) object and by injecting the `Legend3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs4" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3ddatalabelsettingsmodel#visible) property to true in the [`dataLabel`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#datalabel) object and by injecting `DataLabel3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dtooltipsettingsmodel#enable) property as true in [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel#tooltip) object and by injecting `Tooltip3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs6" %}

> You can refer to our `Vue 3D Charts` feature tour page for its groundbreaking feature representations. You can also explore our [Vue 3D Charts example](https://ej2.syncfusion.com/vue/demos/#/material3/three-dimension-chart/column.html) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.