---
layout: post
title: Getting started with Vue Accumulation chart component | Syncfusion
description: Checkout and learn about Getting started with Vue Accumulation Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: https://ej2.syncfusion.com
---

# Getting Started with the Vue Accumulation chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Accumulation chart component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following minimum dependencies are required to use the Accumulation Chart:

```
|- @syncfusion/ej2-vue-charts
- @syncfusion/ej2-charts
- @syncfusion/ej2-base
- @syncfusion/ej2-data
- @syncfusion/ej2-svg-base
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

This article uses the `Vue Accumulation chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running:

```bash
npm install @syncfusion/ej2-vue-charts
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue Accumulation chart component (Options API for Vue 2):

1. First, import and register the Accumulation chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries } from "@syncfusion/ej2-vue-charts";
export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },

  provide: {
    accumulationchart: [PieSeries]
  }
}

</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the Accumulation chart component with the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#datasource) property.

{% tabs %}
{% highlight html tabtitle="~src/App.vue" %}

<template>
    <div id="app" style="height: 400px;">
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' type='Pie'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3. Declare the value for the `dataSource` property in the `script` section.

Ensure that `seriesData` is defined as an array of objects. Replace the placeholder `data` reference in the example with the actual data array (see the example include below for a complete `seriesData` definition).

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data() {
  return {
    seriesData: [
      { x: 'Chrome', y: 62 },
      { x: 'Edge',   y: 18 },
      { x: 'Safari', y: 12 },
      { x: 'Firefox',y: 8  }
    ]
  };
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding the accumulation chart

- Use the `<ejs-accumulationchart>` selector in the template section of `App.vue` to add an accumulation chart.

The example below shows a basic pie series.

By default, a pie series is rendered when JSON data is assigned to the series using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#yname) properties of the series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart/series/pie-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs9" %}

## Verify the chart

After starting the dev server, confirm the accumulation chart renders correctly:

- Start the dev server with `npm run serve` or `yarn run serve`.
- Open the project URL shown in the terminal (typically `http://localhost:8080`) and verify the chart displays as expected.
- If the chart does not render, inspect the browser console for errors related to missing modules, incorrect imports, or undefined data values.

## Troubleshooting (common issues)

- Chart not rendering: ensure the accumulation series and related modules are registered and that `seriesData` contains a valid array of data objects.
- Undefined `data` reference: replace placeholder values with an explicit array (for example, an array of `{ x: 'Category', y: 10 }` objects).
- Version mismatch: confirm `@syncfusion/ej2-vue-charts` is compatible with the project's Vue version.

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```