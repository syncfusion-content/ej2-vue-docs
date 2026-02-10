---
layout: post
title: Vue 3 getting started with the 3D Circular Chart | Syncfusion
description: Quickstart: scaffold a Vite Vue 3 project and integrate the Syncfusion 3D Circular Chart; includes setup, module registration, and a working example.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Vue 3D Circular Chart component in Vue 3

This article shows how to set up a Vite JavaScript project and integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue 3D Circular Chart component using either the Composition or Options API.

The Composition API in Vue 3 provides an alternative way to organize and reuse component logic via composition functions.

The Options API is the traditional component format, organizing logic into options such as `data`, `methods`, `computed`, `watch`, and life cycle hooks.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```


Using one of the above commands will lead you through a short interactive setup:

1. Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2. Select `Vue` as the framework. It will create a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3. Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4. Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the `Vue 3D Circular Chart component` as an example. To use the Vue 3D Circular Chart component in the project, the `@syncfusion/ej2-vue-charts` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```

or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component


Follow the steps below to add the Vue 3D Circular Chart component using the Composition or Options API:

1. First, import and register the 3D Circular Chart component and its child directives in the `script` section of the **src/App.vue** file. If you are using the Composition API, add the `setup` attribute to the `script` tag.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from '@syncfusion/ej2-vue-charts';
//Component registration
export default {
  name: 'App',
  components: {
    'ejs-circularchart3d' : CircularChart3DComponent,
    'e-circularchart3d-series-collection' : CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series' : CircularChart3DSeriesDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the 3D Circular Chart component with the `dataSource` property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-circularchart3d id="container" :title='title' :tilt='tilt' :legendSettings='legendSettings'>
        <e-circularchart3d-series-collection>
            <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='dataLabel'> 
            </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
</template>

{% endhighlight %}
{% endtabs %}

3. Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const seriesData = [
    { x: 'Chrome', y: 62.92 },
    { x: 'Internet Explorer', y: 6.12 },
    { x: 'Opera', y: 3.15 },
    { x: 'Edge', y: 5.5 },
    { x: 'Safari', y: 19.97 },
    { x: 'Others', y: 2.34 }
];
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    seriesData: [
        { x: 'Chrome', y: 62.92 },
        { x: 'Internet Explorer', y: 6.12 },
        { x: 'Opera', y: 3.15 },
        { x: 'Edge', y: 5.5 },
        { x: 'Safari', y: 19.97 },
        { x: 'Others', y: 2.34 }
    ]
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-circularchart3d id="container" :title='title' :tilt='tilt' :legendSettings='legendSettings'>
        <e-circularchart3d-series-collection>
            <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='dataLabel'> 
            </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
</template>

<script setup>
import { provide } from 'vue';
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
    { x: 'Chrome', y: 62.92 },
    { x: 'Internet Explorer', y: 6.12 },
    { x: 'Opera', y: 3.15 },
    { x: 'Edge', y: 5.5 },
    { x: 'Safari', y: 19.97 },
    { x: 'Others', y: 2.34 }
];
const title = 'Browser Market Shares in November 2023';
const tilt = -45;
const legendSettings = { visible: true, position: 'Right' };
const dataLabel = {
      visible: true,
      name: 'x',
      position: 'Outside',
      font: {
        fontWeight: '600'
      },
      connectorStyle: { length: '40px' }
};
const circularchart3d = [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D];
provide('circularchart3d', circularchart3d);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-circularchart3d id="container" :title='title' :tilt='tilt' :legendSettings='legendSettings'>
        <e-circularchart3d-series-collection>
            <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='dataLabel'> 
            </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
</template>

<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

export default {
    name: 'App',
    components: {
        'ejs-circularchart3d' : CircularChart3DComponent,
        'e-circularchart3d-series-collection' : CircularChart3DSeriesCollectionDirective,
        'e-circularchart3d-series' : CircularChart3DSeriesDirective
    },
    data() {
        return {
          seriesData: [
              { x: 'Chrome', y: 62.92 },
              { x: 'Internet Explorer', y: 6.12 },
              { x: 'Opera', y: 3.15 },
              { x: 'Edge', y: 5.5 },
              { x: 'Safari', y: 19.97 },
              { x: 'Others', y: 2.34 }
          ],
          title: 'Browser Market Shares in November 2023',
          tilt: -45,
          legendSettings: { visible: true, position: 'Right' },
          dataLabel: {
            visible: true,
            name: 'x',
            position: 'Outside',
            font: {
              fontWeight: '600'
            },
            connectorStyle: { length: '40px' }
          }
        };
    },
    provide: {
        circularchart3d: [ PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D ]
    },
};
</script>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue3-circular-chart-3d-demo](images/vue3-circular-chart-3d-demo.png)

> **Sample**: `vue3-circular-chart-3d-getting-started`.
For migrating from Vue 2 to Vue 3, refer to the `migration` documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)