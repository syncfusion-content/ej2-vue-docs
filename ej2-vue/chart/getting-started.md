---
layout: post
title: Getting started with Vue Chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple chart and demonstrate the basic usage of the chart control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the chart component.

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
import { ChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(ChartPlugin);
```

> Registering `ChartPlugin` in vue, will register the chart component along with its required child directives globally.

## Adding Chart Component

* Add the Vue Chart by using `<ejs-chart>` selector in `<template>` section of the `App.vue` file.
The below example shows a basic Charts,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/initialize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/initialize-cs1" %}

* Now run the application in the browser using the below command.

```
npm run dev
```

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature service in the AppModule. In the current application, we are
going to modify the above basic chart to visualize sales data for a particular year.
For this application we are going to use  line series, tooltip, data label, category axis and legend
feature of the chart. Please find relevant
feature service name and description as follows.

* `LineSeries` - Inject this provider to use line series.
* `Legend` - Inject this provider to use legend feature.
* `Tooltip` - Inject this provider to use tooltip feature.
* `DataLabel` - Inject this provider to use datalabel feature.
* `Category`  - Inject this provider to use category feature.

These modules should be injected to the provide section as follows,

 ```javascript
import Vue from "vue";
import { ChartPlugin, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  provide: {
    chart: [LineSeries]
  }
};
</script>
 ```

## Populate Chart with Data

This section explains how to plot below JSON data to the chart.

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

* Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and
[`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart/valueType/#valuetype)for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/datasource-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs4" %}

* The sales data are in thousands, so format the vertical axis label by adding
`---
title: " Chart Getting Started | Vue "

component: "Chart"

description: "Getting started file explains how to configure and install chart packages and also how to create basic chart, module injections."
---

# Getting Started

This section explains you the steps required to create a simple chart and demonstrate the basic usage of the chart control.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the chart component.

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
import { ChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(ChartPlugin);
```

> Registering `ChartPlugin` in vue, will register the chart component along with its required child directives globally.

## Adding Chart Component

* Add the Vue Chart by using `<ejs-chart>` selector in `<template>` section of the `App.vue` file.
The below example shows a basic Charts,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/initialize-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/initialize-cs2" %}

* Now run the application in the browser using the below command.

```
npm run dev
```

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature service in the AppModule. In the current application, we are
going to modify the above basic chart to visualize sales data for a particular year.
For this application we are going to use  line series, tooltip, data label, category axis and legend
feature of the chart. Please find relevant
feature service name and description as follows.

* `LineSeries` - Inject this provider to use line series.
* `Legend` - Inject this provider to use legend feature.
* `Tooltip` - Inject this provider to use tooltip feature.
* `DataLabel` - Inject this provider to use datalabel feature.
* `Category`  - Inject this provider to use category feature.

These modules should be injected to the provide section as follows,

 ```javascript
import Vue from "vue";
import { ChartPlugin, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  provide: {
    chart: [LineSeries]
  }
};
</script>
 ```

## Populate Chart with Data

This section explains how to plot below JSON data to the chart.

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

* Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and
[`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart/valueType/#valuetype)for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/datasource-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs5" %}

## Add Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel/#title) property to the chart to provide
quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/tooltip-cs1" %}

## Enable Legend

You can use legend for the chart by setting the `visible` property to true in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/) object and by injecting the `LegendService` into the `@NgModule.providers`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/legend-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/legend-cs1" %}

## Add Data Label

You can add data labels to improve the readability of the chart.
This can be achieved by setting the visible property to true in the `dataLabel` object  and by injecting `DataLabel` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datalabel-cs1" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels
due to space constraints. You can enable tooltip by setting the enable property as true in [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/) object and by injecting `TooltipService` into the `@NgModule.providers`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/tooltip-cs2" %}

> You can refer to our [Vue Charts](https://www.syncfusion.com/vue-ui-components/vue-charts) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Charts example](https://ej2.syncfusion.com/vue/demos/#/material/chart/line.html) that shows various chart types and how to represent time-dependent data, showing trends in data at equal intervals.