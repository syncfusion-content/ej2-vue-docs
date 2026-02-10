---
layout: post
title: Vue 3 getting started with the Sparkline component | Syncfusion
description: Quick guide to set up and use the Vue Sparkline component with Vue 3 (Vite), including data binding and tooltip configuration.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Sparkline Component in Vue 3

This article provides a step-by-step guide for creating a [Vite](https://vitejs.dev) project (JavaScript) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Sparkline component using either the Composition API or the Options API.

The Composition API is function-based and groups related logic into reusable composition functions. The Options API organizes component logic into options such as `data`, `methods`, `computed`, and life cycle hooks. Both approaches are supported; choose the one that best fits the project.

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

Follow the prompts to configure the project as shown below:

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

4. After project creation, install dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

With the project created, add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available on npm. The Vue Sparkline component is included in the `@syncfusion/ej2-vue-charts` package. For advanced or custom integrations, the lower-level packages `@syncfusion/ej2-sparkline` and `@syncfusion/ej2-vue-base` can be installed instead.

This article uses the Vue Sparkline component as an example. Install the `@syncfusion/ej2-vue-charts` package using one of the commands below:

```bash
npm install @syncfusion/ej2-vue-charts --save
```

or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Sparkline component using `Composition API` or `Options API`:

1.First, import and register the Sparkline component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { SparklineComponent as EjsSparkline, SparklineTooltip } from "@syncfusion/ej2-vue-charts";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-vue-charts";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-sparkline": SparklineComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the Sparkline component with the [dataSource](https://helpej2.syncfusion.com/vue/documentation/api/sparkline#datasource) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-sparkline id="sparkline" :dataSource='dataSource' :height='height' :xName='xName' :yName='yName' :type='type' :tooltipSettings='tooltipSettings'></ejs-sparkline>
</template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const dataSource = [
        { x: 0, xval: '2005', yval: 20090440 },
        { x: 1, xval: '2006', yval: 20264080 },
        { x: 2, xval: '2007', yval: 20434180 },
        { x: 3, xval: '2008', yval: 21007310 },
        { x: 4, xval: '2009', yval: 21262640 },
        { x: 5, xval: '2010', yval: 21515750 },
        { x: 6, xval: '2011', yval: 21766710 },
        { x: 7, xval: '2012', yval: 22015580 },
        { x: 8, xval: '2013', yval: 22262500 },
        { x: 9, xval: '2014', yval: 22507620 }
    ];
const type = 'Area';
const xName = 'xval';
const yName = 'yval';
const height = '200px';
const tooltipSettings = {
        visible: true,
        format: '${xval} : ${yval}'
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
    return {
        dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 }
        ],
        type:'Area',
        xName:'xval',
        yName:'yval',
        height:'200px',
        tooltipSettings: {
            visible: true,
            format: '${xval} : ${yval}'
        }
    };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-sparkline id="sparkline" :dataSource='dataSource' :height='height' :xName='xName' :yName='yName' :type='type' :tooltipSettings='tooltipSettings'></ejs-sparkline>
</template>

<script setup>
import { provide } from 'vue';
import { SparklineComponent as EjsSparkline, SparklineTooltip } from "@syncfusion/ej2-vue-charts";

const dataSource = [
        { x: 0, xval: '2005', yval: 20090440 },
        { x: 1, xval: '2006', yval: 20264080 },
        { x: 2, xval: '2007', yval: 20434180 },
        { x: 3, xval: '2008', yval: 21007310 },
        { x: 4, xval: '2009', yval: 21262640 },
        { x: 5, xval: '2010', yval: 21515750 },
        { x: 6, xval: '2011', yval: 21766710 },
        { x: 7, xval: '2012', yval: 22015580 },
        { x: 8, xval: '2013', yval: 22262500 },
        { x: 9, xval: '2014', yval: 22507620 }
    ];
const type = 'Area';
const xName = 'xval';
const yName = 'yval';
const height = '200px';
const tooltipSettings = {
        visible: true,
        format: '${xval} : ${yval}'
};
const sparkline = [SparklineTooltip];
provide('sparkline', sparkline);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-sparkline id="sparkline" :dataSource='dataSource' :height='height' :xName='xName' :yName='yName' :type='type' :tooltipSettings='tooltipSettings'></ejs-sparkline>
</template>

<script>
import { SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-vue-charts";
//Component registration
export default {
  name: "App",
  components: {
    "ejs-sparkline": SparklineComponent
  },
    data() {
    return {
        dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 }
        ],
        type:'Area',
        xName:'xval',
        yName:'yval',
        height:'200px',
        tooltipSettings: {
            visible: true,
            format: '${xval} : ${yval}'
        }
    };
 },
    provide: {
        sparkline:[SparklineTooltip]
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

![vue3-sparkline-charts-demo](./images/vue3-sparkline-charts-demo.png)

> **Sample**: [vue-3-sparkline-charts-getting-started](https://github.com/SyncfusionExamples/vue3-sparkline-charts-getting-started).
For migrating from Vue 2 to Vue 3, refer to the `migration` documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)