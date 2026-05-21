---
layout: post
title: Getting Started with Vue Accumulation Chart Component | Syncfusion
description: Set up a Vue 2 project and add Syncfusion EJ2 Accumulation Charts, covering install steps, module registration, and practical usage examples.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Accumulation Chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Accumulation Chart component.

## Prerequisites

Ensure that the development environment meets the required criteria listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following minimum dependencies are required to use the Accumulation Chart:

```
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Setting Up the Vue 2 Project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. You can install Vue CLI using either npm or Yarn:

**npm**

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

**yarn**

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Terminal showing Vue CLI creating a Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue Accumulation Chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package using either npm or Yarn:

**npm**

```bash
npm install @syncfusion/ej2-vue-charts
```
**yarn**

```bash
yarn add @syncfusion/ej2-vue-charts
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Accumulation Chart Component

Follow the steps below to add the Vue Accumulation Chart component (Options API for Vue 2):

**Step 1:** First, import and register the Accumulation Chart component in the `script` section of the **src/App.vue** file.

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

**Step 2:** Declare the value for the `dataSource` property in the `script` section.

Ensure that `seriesData` is defined as an array of objects that contains the values to be displayed in the chart.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data() {
  return {
    seriesData: [
        { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
        { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
        { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
        { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
        { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 },
        { x: 'Nov', y: 9 }, { x: 'Dec', y: 3.5 }
    ],
  };
}
</script>

{% endhighlight %}
{% endtabs %}

**Step 3:** In the `template` section, define the Accumulation Chart component with the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#datasource) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div>
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>

{% endhighlight %}
{% endtabs %}


### Complete Example

Here is the summarized code for the above steps in the **src/App.vue** file:

The example below shows a basic pie series.

By default, a pie series is rendered when JSON data is assigned to the series using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries#yname) properties of the series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart/series/pie-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
## Run the Project

To start the development server, use either npm or Yarn:

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

Open the project URL shown in the terminal (typically `http://localhost:8080`) and verify the chart displays as expected.

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs9" %}

## Troubleshooting (Common Issues)

- **Chart not rendering**: Ensure that the required accumulation series modules are registered correctly and that `seriesData` is defined as a valid array of data objects.

- **Undefined `seriesData` reference**: Ensure that the data bound to the series is defined correctly as an array of objects such as `{ x: 'Category', y: 10 }`.

- **Version mismatch**: Verify that the installed `@syncfusion/ej2-vue-charts` package is compatible with the Vue version used in your project.


