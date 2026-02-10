---
layout: post
title: Vue 3 getting started with the Smithchart component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Smithchart component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Vue Smithchart component in Vue 3

This article provides a step-by-step guide for creating a Vite-based Vue 3 project (JavaScript) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue `Smithchart` component. Examples demonstrate both the Composition API and the Options API; see the linked Vue documentation for details and comparisons.

Vue 3 supports both the Composition API and the Options API. The Composition API offers a composition-friendly, function-based approach, while the Options API organizes component logic using options such as `data`, `methods`, and life cycle hooks. See the Vue guide for more information.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

Recommended: Node.js LTS (v14 or later) and Vite 2.x or later. See the system requirements link above for current supported versions.

## Set up the Vite project

Scaffold a Vue 3 project using Vite. Run one of the commands below and follow the interactive prompts. Alternatively, use `npx` to avoid a global install.

```bash
npm create vite@latest
# or
npx create-vite@latest
# or
yarn create vite
```

Run the selected command and follow the prompts. Example prompt selections:

1. Project name: `my-project`

```text
? Project name: » my-project
```

2. Select framework: `Vue` (creates a Vue 3 project)

```text
? Select a framework: » Vue
```

3. Select variant: `JavaScript`

```text
? Select a variant: » JavaScript
```

After the project is created, install dependencies and start the project:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready with default settings, add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the package required for the Smithchart component.

This article uses the Vue `Smithchart` component as an example. Install the `@syncfusion/ej2-vue-charts` package:

```bash
npm install @syncfusion/ej2-vue-charts --save
```

or

```bash
yarn add @syncfusion/ej2-vue-charts
```

Note: Syncfusion components require a valid license for production use. See the Syncfusion documentation and system requirements for licensing details.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow these steps to add the Vue `Smithchart` component using the Composition API or the Options API:

1. First, import and register the `Smithchart` component and its child directives in the `script` section of the **src/App.vue** file. When using the Composition API, add the `setup` attribute to the `script` tag.

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

2. In the `template` section, define the `Smithchart` component with the `dataSource` property.

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

3. Declare the values for the `dataSource` property in the `script` section.

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
For migrating from Vue 2 to Vue 3, refer to the `migration` documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)