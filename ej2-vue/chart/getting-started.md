---
layout: post
title: Getting Started with Vue Chart Component | Syncfusion
description: Set up a Vue 2 app and integrate Syncfusion EJ2 Vue Chart with setup steps, module registration, data binding, and a full working example.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Chart Component in Vue 2

This section provides a step-by-step guide to creating a Vue 2 application using [`Vue CLI`](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Chart component. It helps users quickly configure a project and render an interactive chart.

> **Ready to streamline your Syncfusion Vue development?**  
> Discover the full potential of Syncfusion Vue components with the Syncfusion AI Coding Assistant. It simplifies integration, configuration, and feature discovery through intelligent, context-aware code suggestions and is available in popular AI-powered IDEs such as VS Code, Cursor, and Syncfusion CodeStudio.  
> [`Explore Syncfusion AI Coding Assistant`](https://ej2.syncfusion.com/vue/documentation/ai-coding-assistant/overview)

To get started quickly with Vue Charts, refer to the following introductory video:

{% youtube "https://www.youtube.com/watch?v=RplZL-3B1G4&t=3s" %}

## Prerequisites

Ensure that the development environment meets the required criteria listed in [`System requirements for Syncfusion Vue UI components`](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following are the minimum required dependencies to use the Vue Chart component:

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

## Setting Up the Vue 2 Project

To generate a Vue 2 project using Vue CLI, first install Vue CLI globally using either npm or Yarn, and then create a new project with the [`vue create`](https://cli.vuejs.org#getting-started) command:

### Using npm

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

### Using Yarn

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue Packages

Syncfusion packages are available at [`npmjs.com`](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue Chart component` as an example. To use it in the project, install the `@syncfusion/ej2-vue-charts` package using either npm or Yarn:

### Using npm

```bash
npm install @syncfusion/ej2-vue-charts
```
### Using Yarn

```bash
yarn add @syncfusion/ej2-vue-charts
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Add Syncfusion Vue Component

Follow the steps below to add the Vue Chart component:

**Step 1:** Import and register the Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { ChartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-chart': ChartComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** In the `template` section, define the Chart component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-chart id="container"> </ejs-chart>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart/getting-started/initialize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the Project

To run the project, use either npm or Yarn:

### Using npm

```bash
npm run serve
```

### Using Yarn

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/initialize-cs1" %}

## Module Injection

In Vue, register the chart's feature modules using the component's `provide` option.

The Chart component is split into feature-specific modules. To enable a specific feature in a Vue 2
application, register the corresponding module(s) in the component's `provide` option. The following
example shows the modules used in this guide and their purpose.

* `LineSeries` - Register to enable the line series type.
* `Legend` - Register to enable the legend feature.
* `Tooltip` - Register to enable tooltip support.
* `DataLabel` - Register to enable data labels on points.
* `Category` - Register to enable category axis support.

Register these modules in the component `provide` option as shown below (Vue 2):

```html
<script>
import { 
  ChartComponent, 
  LineSeries, 
  Category, 
  Legend, 
  Tooltip, 
  DataLabel 
} from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart': ChartComponent
  },
  provide: {
    chart: [LineSeries, Category, Legend, Tooltip, DataLabel]
  }
};
</script>
```
You can also refer to the [Feature Modules](./feature-modules) page for the complete list of available modules and their supported features.

> **Tip**: Inject only the modules you actually use to keep the bundle size smaller.

## Populate Chart with Data

This section explains how to bind JSON data to the chart.

* Add a series object to the chart using the [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart/series) property. Map the fields `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#yname) properties of the series, and set the JSON data to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#datasource) property.

* Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart/valueType#valuetype) for the horizontal axis to `Category`. By default, the axis `valueType` is `Numeric`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis="primaryXAxis">
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  provide: {
    chart: [LineSeries, Category]
  },
  data() {
    return {
      seriesData: [ 
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
          ],
      primaryXAxis: {
        valueType: "Category"
      }
    };
  }
};
</script>

{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs4" %}

> You can refer to our [`Vue Charts`](https://www.syncfusion.com/vue-ui-components/vue-charts) feature tour page for its groundbreaking feature representations. You can also explore our [`Vue Charts example`](https://ej2.syncfusion.com/vue/demos/#/material/chart/line.html) that shows various chart types and how to represent time-dependent data, showing trends in data at equal intervals.