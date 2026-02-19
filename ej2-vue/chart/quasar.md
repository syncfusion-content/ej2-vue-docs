---
layout: post
title: Quasar + Vue Chart Getting Started | Syncfusion
description: Quickstart for Quasar and Vue 3 integrate the Syncfusion Vue Chart (Essential JS 2) using the Composition API.
control: Quasar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Chart Component in the Quasar Framework

This section provides a step-by-step guide to creating a [`Quasar`](https://quasar.dev) application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Chart component using the [`Composition API`](https://vuejs.org/guide/introduction.html#composition-api). It helps developers set up a responsive, high-performance charting solution within the Quasar ecosystem.

The Quasar Framework is a Vue.js–based open-source framework that enables developers to build modern, high-performance applications for web, mobile, and desktop from a single code base.

## Prerequisites

Ensure that the development environment meets the requirements listed in  
[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Chart components](../system-requirements).

## Set up the Quasar project

To create a new Quasar project, run the following command:

```bash
npm init quasar
```

The command prompts for project options; example prompts appear below:

![Quasar CLI project setup prompt](./images/quasar-setup1.png)

The generator installs dependencies when prompted. Confirm installation to proceed, as shown below:

![Confirm dependency installation prompt](./images/quasar-setup2.png)

Navigate to the project directory:

```bash
cd quasar-project
```

Now that `quasar-project` is ready, add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Chart component to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Chart component packages are available at [`npmjs.com`](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [`Vue Chart component`](https://www.syncfusion.com/vue-components/vue-charts) as an example. To use the Vue Chart component in the project, install the `@syncfusion/ej2-vue-charts` package using:

```bash
npm install @syncfusion/ej2-vue-charts
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

Optional but recommended: To ensure proper styling, add one of the Syncfusion themes (for example, Material) to your Quasar config (for example, in `quasar.config.js` under the `css` array) or include the styles in a boot file:

```javascript
// quasar.config.js
css: [
    '@syncfusion/ej2-base/styles/material.css',
    '@syncfusion/ej2-buttons/styles/material.css',
    '@syncfusion/ej2-charts/styles/material.css',
    // add other needed EJ2 component styles
]
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue Chart component:

1. First, add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`, and import the Chart component in the `script` section of **src/app.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<script setup>
import { provide } from 'vue';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";
</script>

{% endhighlight %}
{% endtabs %}
   
2. In the `template` section, define the Chart component with the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#datasource) property.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<template>
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
        <e-series-collection>
            <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
        </e-series-collection>
    </ejs-chart>
</template>

{% endhighlight %}
{% endtabs %}

3. Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<script setup>
let seriesData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/app.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<template>
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
        <e-series-collection>
            <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
        </e-series-collection>
    </ejs-chart>
</template>

<script setup>
import { provide } from 'vue';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";

let seriesData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let title = 'Sales Analysis';
let primaryXAxis = {valueType: 'Category'};

// Register required modules (idiomatic one-liner)
provide('chart', [LineSeries, Legend, Category]);
</script>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

The output will appear as follows:

![Quasar CLI chart output showing a line chart titled Sales Analysis](./images/quasar-output.png)