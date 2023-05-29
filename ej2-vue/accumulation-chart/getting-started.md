---
layout: post
title: Getting started with Vue Accumulation chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Accumulation chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

In EJ2, Accumulation chart is implemented as a separate control to avoid axis related logics. Dependencies
for accumulation chart is same as chart control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

## Installation and Configuration

## Setup Vue Environment

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

## Create a Vue Application

Start a new Vue application using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install
```

## Adding Syncfusion Chart package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install chart component, use the following command

```bash
npm install @syncfusion/ej2-vue-charts --save
```

> The **--save** will instruct NPM to include the chart package inside of the `dependencies` section of the `package.json`.

## Registering Chart Component

You can register the chart component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { AccumulationChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(AccumulationChartPlugin);
```

> Registering `ChartPlugin` in vue, will register the chart component along with its required child directives globally.

## Adding Chart Component

* Add the Vue Chart by using `<ejs-chart>` selector in `<template>` section of the `App.vue` file.

The below example shows a basic Charts,

* Pie Series

By default pie series will be rendered on assigning JSON data to the series by using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#yname) properties of the series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs9" %}

* Now run the application in the browser using the below command.

    ```
    npm run dev
    ```