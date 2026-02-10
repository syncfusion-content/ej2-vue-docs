---
layout: post
title: Getting started with Vue 3D Circular Chart | Syncfusion
description: Quickstart for Vue 2: integrate the Syncfusion 3D Circular Chart (Essential JS 2). Covers setup, registration, and example usage.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with 3D Circular Chart (Vue 2)

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Circular Chart component.

To get started quickly with 3D Circular Charts, watch the following introduction video:

{% youtube "https://www.youtube.com/watch?v=hGpINPEOi1E" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the 3D Circular Chart component.

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

![Terminal showing Vue CLI creating a Vue 2 project](images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue 3D Circular Chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The `--save` flag adds the package to the `dependencies` section of `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the 3D Circular Chart component:

1. First, import and register the 3D Circular Chart component in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the 3D Circular Chart component with the `dataSource` property.

{% tabs %}
{% highlight html tabtitle="~src/App.vue" %}

<template>
    <div id="app">
         <ejs-circularchart3d id="container">
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3. Declare the value for the `dataSource` property in the `script` section.

Ensure `seriesData` is defined as an explicit array of data objects. Replace the placeholder `data` reference in the example with a concrete array (see the included example snippet for a full `seriesData` definition).

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

## Adding the 3D Circular Chart

- Use the `<ejs-circularchart3d>` selector in the template section of `App.vue` to add a 3D Circular Chart.

The example below shows a basic pie series.

By default, a pie series is rendered when JSON data is assigned to the series using the `dataSource` property. Map the field names in the JSON data to the `xName` and `yName` properties of the series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/circular-chart/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}
        

{% previewsample "page.domainurl/code-snippet/circular-chart/getting-started" %}

## Verify the chart

After starting the dev server, confirm the 3D Circular Chart renders correctly:

- Start the dev server with `npm run serve` or `yarn run serve`.
- Open the project URL shown in the terminal and verify the chart displays.
- If the chart does not render, inspect the browser console for errors related to missing modules, incorrect imports, or undefined data values.

## Troubleshooting (common issues)

- Chart not rendering: ensure the 3D series modules and directives are registered and that `seriesData` contains a valid array of objects.
- Undefined `data` reference: replace the `data` placeholder with an explicit array of `{ x: 'Category', y: 10 }` objects.
- Version mismatch: confirm `@syncfusion/ej2-vue-charts` is compatible with Vue 2 used in the project.

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

> You can refer to our `Vue 3D Circular Chart` feature tour page for its groundbreaking feature representations. You can also explore our `Vue 3D Circular Chart example` that shows various 3D Circular Chart types and how to represent time-dependent data, showing trends in data at equal intervals.