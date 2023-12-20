---
layout: post
title: Getting started with Vue Accumulation chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Accumulation chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Accumulation chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Accumulation chart component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The list of minimum dependencies required to use an accumulation chart are follows:

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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue Accumulation chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The **--save** will instruct NPM to include the chart package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Accumulation chart component using `Composition API` or `Options API`:

1\. First, import and register the Accumulation chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries } from "@syncfusion/ej2-vue-charts";
export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Accumulation chart component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#datasource) property.

{% tabs %}
{% highlight html tabtitle="~src/App.vue" %}

<template>
    <div id="app">
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data() {
  return {
    seriesData: data
  };
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding Chart Component

* Add the Vue Chart by using `<ejs-chart>` selector in `<template>` section of the `App.vue` file.

The below example shows a basic Charts,

* Pie Series

By default pie series will be rendered on assigning JSON data to the series by using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#yname) properties of the series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart/series/pie-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs9" %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```