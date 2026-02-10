---
layout: post
title: Vue 3 getting started with the Bullet chart component | Syncfusion
description: Quickstart: integrate the Syncfusion Vue 3 Bullet Chart - using Vite, module registration, and a working example.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Bullet Chart Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with JavaScript and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Bullet Chart component using either the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or the [Options API](https://vuejs.org/guide/introduction.html#options-api).

The Composition API organizes related logic into reusable composition functions and is recommended for larger or composition-oriented code bases. The Options API organizes component logic with `data`, `methods`, and life cycle hooks and may be preferable for smaller components or teams familiar with Vue 2 patterns.

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

Use the interactive setup and follow these steps:

1. Define the project name. For this article, use `my-project`.
```bash
? Project name: » my-project
```

2. Select `Vue` as the framework to create a Vue 3 project.

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

3. Choose `JavaScript` as the project variant.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4. After creating the project, install dependencies by running:
```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready with default settings, add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue Bullet Chart component](https://www.syncfusion.com/vue-components/vue-bullet-chart) as an example. To use the Vue Bullet Chart component in the project, the `@syncfusion/ej2-vue-charts` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```

or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Bullet Chart component using `Composition API` or `Options API`:

1.First, import and register the Bullet Chart component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { BulletChartComponent as EjsBulletchart, BulletTooltip, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from "@syncfusion/ej2-vue-charts";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { BulletChartComponent, BulletTooltip, BulletRangeCollectionDirective, BulletRangeDirective } from "@syncfusion/ej2-vue-charts";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-bulletchart": BulletChartComponent,
    "e-bullet-range-collection": BulletRangeCollectionDirective,
    "e-bullet-range": BulletRangeDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the Bullet Chart component with the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#datasource) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-bulletchart :dataSource="data" :valueField="valueField" :tooltip="tooltip" :targetField="targetField" :height="height"
        :title="title" :minimum="minimum" :maximum="maximum" :interval="interval">
        <e-bullet-range-collection>
          <e-bullet-range end="100" color="red"></e-bullet-range>
          <e-bullet-range end="200" color="blue"></e-bullet-range>
          <e-bullet-range end="300" color="green"></e-bullet-range>
        </e-bullet-range-collection>
    </ejs-bulletchart>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const data = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 180 },
    { value: 500, target: 230 }
];
const minimum = 0;
const maximum = 300;
const interval = 50;
const tooltip = { enable: true };
const title = 'Revenue';
const height = '300px';
const targetField = 'target';
const valueField = 'value';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
    return {
        data: [
            { value: 100, target: 80 },
            { value: 200, target: 180 },
            { value: 300, target: 280 },
            { value: 400, target: 180 },
            { value: 500, target: 230 }
        ],
        minimum: 0,
        maximum: 300,
        interval: 50,
        tooltip: { enable: true },
        title: 'Revenue',
        height: '300px',
        targetField: 'target',
        valueField: 'value'
    };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-bulletchart :dataSource="data" :valueField="valueField" :tooltip="tooltip" :targetField="targetField" :height="height"
        :title="title" :minimum="minimum" :maximum="maximum" :interval="interval">
        <e-bullet-range-collection>
          <e-bullet-range end="100" color="red"></e-bullet-range>
          <e-bullet-range end="200" color="blue"></e-bullet-range>
          <e-bullet-range end="300" color="green"></e-bullet-range>
        </e-bullet-range-collection>
    </ejs-bulletchart>
</template>

<script setup>
import { provide } from 'vue';
import { BulletChartComponent as EjsBulletchart, BulletTooltip, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from "@syncfusion/ej2-vue-charts";

const data = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 180 },
    { value: 500, target: 230 }
];
const minimum = 0;
const maximum = 300;
const interval = 50;
const tooltip = { enable: true };
const title = 'Revenue';
const height = '300px';
const targetField = 'target';
const valueField = 'value';
const bulletChart = [ BulletTooltip ];
provide('bulletChart', bulletChart);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-bulletchart :dataSource="data" :valueField="valueField" :tooltip="tooltip" :targetField="targetField" :height="height"
        :title="title" :minimum="minimum" :maximum="maximum" :interval="interval">
        <e-bullet-range-collection>
          <e-bullet-range end="100" color="red"></e-bullet-range>
          <e-bullet-range end="200" color="blue"></e-bullet-range>
          <e-bullet-range end="300" color="green"></e-bullet-range>
        </e-bullet-range-collection>
    </ejs-bulletchart>
</template>

<script>
import { BulletChartComponent, BulletTooltip, BulletRangeCollectionDirective, BulletRangeDirective } from "@syncfusion/ej2-vue-charts";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-bulletchart": BulletChartComponent,
    "e-bullet-range-collection": BulletRangeCollectionDirective,
    "e-bullet-range": BulletRangeDirective
  },
    data() {
    return {
        data: [
            { value: 100, target: 80 },
            { value: 200, target: 180 },
            { value: 300, target: 280 },
            { value: 400, target: 180 },
            { value: 500, target: 230 }
        ],
        minimum: 0,
        maximum: 300,
        interval: 50,
        tooltip: { enable: true },
        title: 'Revenue',
        height: '300px',
        targetField: 'target',
        valueField: 'value'
    };
 },
    provide: {
        bulletChart: [ BulletTooltip ]
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

![Vue 3 Bullet Chart sample showing bullet ranges and tooltip](./images/vue3-bullet-chart-demo.png)

## Verify the chart

After starting the development server, confirm the chart renders correctly:

- Start the development server with `npm run dev` or `yarn run dev`.
- Open the project URL shown in the terminal (commonly `http://localhost:5173`) and verify the bullet chart displays with ranges and tooltip.
- If the chart does not render, open the browser console and check for errors related to missing modules, incorrect imports, or incompatible Vue versions.

## Troubleshooting (common issues)

- Chart not rendering: ensure chart modules (for example, `BulletTooltip`) are provided via `provide` (Composition API) or `provide`/`provide:` (Options API).
- Wrong package version: confirm `@syncfusion/ej2-vue-charts` matches the project's Vue version.
- Missing child directives: ensure `BulletRangeCollectionDirective` and `BulletRangeDirective` are registered when using directives.
- Console errors: inspect import paths and verify dependencies are installed.

> **Sample**: [vue-3-bullet-chart-getting-started](https://github.com/SyncfusionExamples/vue3-bullet-chart-getting-started).
For migrating from Vue 2 to Vue 3, refer to the `migration` documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)