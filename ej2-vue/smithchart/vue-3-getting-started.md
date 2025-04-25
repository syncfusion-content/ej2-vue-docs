---
layout: post
title: Vue 3 getting started with the Smithchart component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Smithchart component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Smith Chart Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Smith Chart component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

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

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

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

This article uses the [Vue Smith Chart component](https://www.syncfusion.com/vue-components/vue-smith-chart) as an example. To use the Vue Smith Chart component in the project, the `@syncfusion/ej2-vue-charts` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```

or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Smith Chart component using `Composition API` or `Options API`:

1.First, import and register the Smith Chart component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { SmithchartComponent as EjsSmithchart, SmithchartLegend, TooltipRender, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries } from "@syncfusion/ej2-vue-charts";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { SmithchartComponent, SmithchartLegend, TooltipRender, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-smithchart": SmithchartComponent,
    "e-seriesCollection": SeriesCollectionDirective,
    "e-series" : SeriesDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the Smith Chart component with the [dataSource] property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-smithchart id="smithchart" :title='title' :legendSettings='legendSettings'>
        <e-seriesCollection>
            <e-series :points='dataSource' :marker='marker' :tooltip='tooltip' :name='name' :reactance='reactance' :resistance='resistance'></e-series>
            <e-series :points='points' :tooltip='tooltip' :name='name1'></e-series>
        </e-seriesCollection>
    </ejs-smithchart>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const dataSource = [
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
        { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
    ];
const points = [
        { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
        { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
        { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
        { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
        { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
        { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
    ];
const tooltip = { visible: true };
const legendSettings = { visible: true };
const marker = {
        visible: true,
        dataLabel: {
            visible: true
        }
    };
const title = { text: 'Transmission lines applied for both impedance and admittance'};
const name = 'Transmission1';
const name1 = 'Transmission2';
const reactance = 'reactance';
const resistance = 'resistance';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
    return {
        dataSource: [
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
            { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
        ],
        points: [
            { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
            { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
            { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
            { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
        ],
        tooltip: {
            visible: true
        },
        legendSettings: {
            visible: true
        },
        marker: {
            visible: true,
            dataLabel: {
              visible: true
            }
        },
        title: { text: 'Transmission lines applied for both impedance and admittance'},
        name: 'Transmission1',
        name1: 'Transmission2',
        reactance: 'reactance',
        resistance: 'resistance'
    };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-smithchart id="smithchart" :title='title' :legendSettings='legendSettings'>
        <e-seriesCollection>
            <e-series :points='dataSource' :marker='marker' :tooltip='tooltip' :name='name' :reactance='reactance' :resistance='resistance'></e-series>
            <e-series :points='points' :tooltip='tooltip' :name='name1'></e-series>
        </e-seriesCollection>
    </ejs-smithchart>
</template>

<script setup>
import { provide } from 'vue';
import { SmithchartComponent as EjsSmithchart, SmithchartLegend, TooltipRender, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries } from "@syncfusion/ej2-vue-charts";

const dataSource = [
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
        { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
    ];
const points = [
        { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
        { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
        { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
        { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
        { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
        { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
    ];
const tooltip = { visible: true };
const legendSettings = { visible: true };
const marker = {
        visible: true,
        dataLabel: {
            visible: true
        }
    };
const title = { text: 'Transmission lines applied for both impedance and admittance'};
const name = 'Transmission1';
const name1 = 'Transmission2';
const reactance = 'reactance';
const resistance = 'resistance';
const smithchart = [SmithchartLegend, TooltipRender];
provide('smithchart', smithchart);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-smithchart id="smithchart" :title='title' :legendSettings='legendSettings'>
        <e-seriesCollection>
            <e-series :points='dataSource' :marker='marker' :tooltip='tooltip' :name='name' :reactance='reactance' :resistance='resistance'></e-series>
            <e-series :points='points' :tooltip='tooltip' :name='name1'></e-series>
        </e-seriesCollection>
    </ejs-smithchart>
</template>

<script>
import { SmithchartComponent, SmithchartLegend, TooltipRender, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-smithchart": SmithchartComponent,
    "e-seriesCollection": SeriesCollectionDirective,
    "e-series" : SeriesDirective
  },
    data() {
    return {
        dataSource: [
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
            { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
            { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
            { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
        ],
        points: [
            { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
            { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
            { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
            { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
        ],
        tooltip: {
            visible: true
        },
        legendSettings: {
            visible: true
        },
        marker: {
            visible: true,
            dataLabel: {
              visible: true
            }
        },
        title: { text: 'Transmission lines applied for both impedance and admittance'},
        name: 'Transmission1',
        name1: 'Transmission2',
        reactance: 'reactance',
        resistance: 'resistance'
    };
 },
    provide: {
        smithchart:[SmithchartLegend, TooltipRender]
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

![vue3-smith-chart-demo](./images/vue3-smith-chart-demo.png)

> **Sample**: [vue-3-smith-chart-getting-started](https://github.com/SyncfusionExamples/vue3-smith-chart-getting-started).
For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue3-tutorial/#migration-from-vue-2-to-vue-3) documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)