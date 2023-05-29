---
layout: post
title: Getting started with Vue Stock chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Stock chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

Getting started file explains how to create a simple Stock Chart and demonstrate the basic usage of the Stock Chart control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of minimum dependencies required to use stock chart are follows:

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
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

## Registering Stock Chart Component

You can register the Stock chart component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { StockChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(StockChartPlugin);
```

> Registering `StockChartPlugin` in vue, will register the stock chart component along with its required child directives globally.

## Adding Stock chart to the Project

* Add the Vue Stock Chart by using `<ejs-stockchart>` selector in `<template>` section of the `App.vue` file.
The below example shows a basic stock chart,

    ```
    <template>
      <div id="app">
          <ejs-stockchart></ejs-stockchart>
      </div>
    </template>
    <script>
    import Vue from 'vue';
    import { StockChartPlugin } from '@syncfusion/ej2-vue-charts';

    Vue.use(StockChartPlugin);
    export default {
      data () {
        return {
        }
      }
    }
    </script>
    ```

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

* Now run the application in the browser using the below command.

    ```
    npm run dev
    ```

## Module Injection

To create stock chart with additional features, inject the required modules. The following modules are used to extend stock chart’s basic functionality.

•`CandleSeries` - Inject this module to use candle series.
•`DateTime` - Inject this module to use date time axis.
•`RangeTooltip` - Inject this module to show the tooltip.

These modules should be injected to the provide section as follows,

 ```javascript
import Vue from "vue";
import { StockChartPlugin, CandleSeries, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

export default {
  provide: {
    stockChart: [CandleSeries, DateTime, RangeTooltip]
  }
};
</script>
 ```

## Populate Stock Chart with Data

 This section explains how to plot below JSON data to the  Stock Chart. Please find the below imported datasource.

```javascript
export default {
  data() {
    return {
     data: [{
   x: new Date( '2012-04-02' ),
    open : 85.9757,
    high : 90.6657,
    low : 85.7685,
    close : 90.5257,
    volume : 660187068
  },
  {
   x: new Date( '2012-04-09' ),
    open : 89.4471,
    high : 92,
    low : 86.2157,
    close : 86.4614,
    volume : 912634864
  },
  {
   x: new Date( '2012-04-16' ),
    open : 87.1514,
    high : 88.6071,
    low : 81.4885,
    close : 81.8543,
    volume : 1221746066
  },
  {
   x: new Date( '2012-04-23' ),
    open : 81.5157,
    high : 88.2857,
    low : 79.2857,
    close : 86.1428,
    volume : 965935749
  },
  {
   x: new Date( '2012-04-30' ),
    open : 85.4,
    high : 85.4857,
    low : 80.7385,
    close : 80.75,
    volume : 615249365
  }];
};
}
};
```

 Add a series object to the Stock chart by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart#series) property and then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxis/#valuetype) for horizontal axis to Category. By default, the axis valueType is Numeric.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/getting-started-cs1" %}

## Add Stock Chart Title

 You can add a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartModel/#title-string) property to the Stock Chart to provide quick information to the user about the data plotted in the Chart.

 {% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/getting-started-cs2" %}

## Add Crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/getting-started-cs3" %}

## Add Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the
closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `Crosshair` and `Tooltip` into the `provide`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#enable) property of the crosshair to true and [`shared`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettings.html#shared-boolean) property in `tooltip` to true in chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/getting-started-cs4" %}

> You can refer to our [Vue Stock Chart](https://www.syncfusion.com/vue-ui-components/vue-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Stock Chart example](https://ej2.syncfusion.com/vue/demos/#/material/stock-chart) that shows you how to present and manipulate data.