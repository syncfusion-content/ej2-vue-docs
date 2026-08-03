---
layout: post
title: Getting Started with Vue Stock Chart Component | Syncfusion
description: Set up a Vue 2 project and integrate Syncfusion EJ2 Vue Stock Chart with install steps, module injection, data binding, and feature examples.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Getting Started with the Vue Stock Chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Stock Chart component.

## Prerequisites

Ensure that the development environment meets the required criteria listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The Vue Stock Chart component is available in the `@syncfusion/ej2-vue-charts` package. The following dependencies are used by the package:

```
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-charts
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
    |-- @syncfusion/ej2-vue-base
```

## Set Up the Vue 2 Project

To generate a Vue 2 project using Vue CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. You can install Vue CLI using either npm or Yarn:

**npm**

```bash
npm install -g @vue/cli
vue create quickstart
```

**yarn**

```bash
yarn global add @vue/cli
vue create quickstart
```

Select **Default ([Vue 2] babel, eslint)** when prompted.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, navigate to the project directory:

```bash
cd quickstart
```

All subsequent commands should be run from the `quickstart` directory. Now, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> packages to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Stock Chart component](https://www.syncfusion.com/vue-components/vue-stock-chart) as an example. Install the `@syncfusion/ej2-vue-charts` package using either npm or Yarn:

**npm**

```bash
npm install @syncfusion/ej2-vue-charts
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-charts
```

> **Note:** npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Stock Chart component themes can be applied using CSS or SASS from [npm theme packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages), CDN, CRG or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio).

This example uses the `Material 3` theme for the Stock Chart component. To install the [Material 3](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-material3-theme

{% endhighlight %}
{% endtabs %}

The necessary CSS styles for the Stock Chart component were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/stock-chart/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Stock Chart Component

Follow the steps below to add the Vue Stock Chart component:

**Step 1:** First, import and register the Stock Chart component, its child directives and the additional features in the `script` section of the **src/App.vue** file.

**Module Injection**

To create a Stock Chart with additional features, inject the required modules. The following modules extend the Stock Chart's basic functionality:

* `CandleSeries` — Inject this module to use candle series.
* `DateTime` — Inject this module to use date time axis.

Register these modules in the `provide` option as shown below:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTime, CandleSeries } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  provide: {
    stockChart: [
      DateTime, CandleSeries
    ]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Declare the values for the `dataSource` property in the `script` section.

This section demonstrates how to bind JSON data to the Stock Chart. The data includes DateTime values for the x-axis and OHLC (Open, High, Low, Close) values.

The stock chart data requires fields for date (`date`), opening price (`open`), high price (`high`), low price (`low`), closing price (`close`), and trading volume (`volume`).

To hide the period selector and display only the Stock Chart, set [`enablePeriodSelector`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/index-default#enableperiodselector) to `false`.

```javascript
export default {
  data() {
    return {
      seriesData: [
        { date: new Date('2012-04-02'), open: 320.71, high: 324.07, low: 317.74, close: 323.78, volume: 45638000 },
        { date: new Date('2012-04-03'), open: 323.03, high: 324.30, low: 319.64, close: 321.63, volume: 40857000 },
        { date: new Date('2012-04-04'), open: 319.54, high: 319.82, low: 315.87, close: 317.89, volume: 32519000 },
        { date: new Date('2012-04-05'), open: 316.44, high: 318.53, low: 314.60, close: 316.48, volume: 46327000 },
        { date: new Date('2012-04-06'), open: 317.20, high: 320.50, low: 315.30, close: 319.80, volume: 38200000 },
        { date: new Date('2012-04-07'), open: 320.00, high: 322.90, low: 318.50, close: 321.10, volume: 35500000 },
        { date: new Date('2012-04-08'), open: 321.50, high: 325.20, low: 320.80, close: 324.70, volume: 41200000 },
        { date: new Date('2012-04-09'), open: 325.00, high: 326.80, low: 322.40, close: 323.90, volume: 39800000 },
        { date: new Date('2012-04-10'), open: 324.20, high: 327.00, low: 323.10, close: 326.10, volume: 42100000 },
        { date: new Date('2012-04-11'), open: 326.30, high: 329.20, low: 325.50, close: 328.70, volume: 44500000 },
        { date: new Date('2012-04-12'), open: 328.90, high: 330.50, low: 326.70, close: 327.80, volume: 36700000 }
        ],
      title: 'AAPL Stock Price',
      enablePeriodSelector: false
    };
  }
};
```

Add a `series` object to the Stock Chart using the [`series`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart#series) property and set the JSON array to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockseriesmodel#datasource) property.

**Step 3:** In the `template` section, define the Stock Chart component and its series collection.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :title="title" :enablePeriodSelector="enablePeriodSelector">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the complete summarized code for the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/stockchart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the Project

To run the project, use either npm or Yarn:

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

Open the URL displayed in the terminal, commonly `http://localhost:8080`, and verify that the Stock Chart is displayed correctly.

{% previewsample "page.domainurl/code-snippet/stockchart/getting-started-cs1" %}

## Troubleshooting

The following are common issues and solutions when integrating the Stock Chart component:

- **Chart not rendering**: Ensure that all required modules (`CandleSeries`, `DateTime`) are injected using the `provide` option and that `seriesData` is defined as a valid array of data objects with `date`, `open`, `high`, `low`, and `close` properties.

- **Undefined chart data**: Verify that `seriesData` is defined in the `data()` function with the correct structure and that the series configuration includes proper field mappings (`xName`, `open`, `high`, `low`, `close`).

- **Module import errors**: Confirm that all required modules are imported from `@syncfusion/ej2-vue-charts` and that component directives are registered correctly.

- **Incorrect date formatting**: Verify that date values in the data are created using `new Date()` constructor to avoid parsing errors.

> You can refer to our [Vue Stock Chart](https://www.syncfusion.com/vue-ui-components/vue-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Stock Chart example](https://ej2.syncfusion.com/vue/demos/#material3/stock-chart/default.html) that shows you how to present and manipulate data.

## See Also

* [Getting Started with Vue 3 Stock Chart](./vue-3-getting-started)