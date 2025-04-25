---
layout: post
title: Vue 3 getting started with the HeatMap component | Syncfusion
description:  Checkout and learn about Vue 3 getting started with the Vue HeatMap component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue HeatMap Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue HeatMap component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

You can explore some useful features in the HeatMap component using the video below.

{% youtube "https://www.youtube.com/watch?v=lABYJ2mvDns&t=6s" %}

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

This article uses the [Vue HeatMap component](https://www.syncfusion.com/vue-components/vue-heatmap-chart) as an example. To use the Vue HeatMap component in the project, the `@syncfusion/ej2-vue-heatmap` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-heatmap --save
```

or

```bash
yarn add @syncfusion/ej2-vue-heatmap
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue HeatMap component using `Composition API` or `Options API`:

1.First, import and register the HeatMap component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { HeatMapComponent  as EjsHeatmap, Tooltip, Legend }  from "@syncfusion/ej2-vue-heatmap";
import { HeatMap } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
//Component registration
export default {
  name: "App",
  components: {
    'ejs-heatmap': HeatMapComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the HeatMap component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/heatmap#datasource), [xAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap#xaxis), [yAxis](https://ej2.syncfusion.com/vue/documentation/api/heatmap#yaxis) and other property definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-heatmap id="heatmap" :dataSource='dataSource' :xAxis='xAxis' :yAxis='yAxis' :titleSettings='titleSettings' :legendSettings='legendSettings' :cellSettings='cellSettings' :showTooltip='showTooltip'></ejs-heatmap>
</template>

{% endhighlight %}
{% endtabs %}

3.In the `script` section, declare the values for the properties defined in the `template` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    const xAxis = {
          labels: ['Nancy', 'Andrew','Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
    };
    const yAxis = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    };
    const cellSettings = {
        showLabel: true,
    };
    const titleSettings = {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    };
    const dataSource = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
    ];
    const legendSettings = {
      visible:true,
      position: 'Right',
      showLabel: true,
      height: "150"
    };
    const showTooltip = true;
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    xAxis: {
      labels: ['Nancy', 'Andrew','Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
    },
    yAxis:{
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    },
    cellSettings: {
        showLabel: true,
    },
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    },
    dataSource: [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
    ],
    legendSettings: {
        visible:true,
        position: 'Right',
        showLabel: true,
        height: "150"
    },
    showTooltip:true
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-heatmap id="heatmap" :dataSource='dataSource' :xAxis='xAxis' :yAxis='yAxis' :titleSettings='titleSettings' :legendSettings='legendSettings' :cellSettings='cellSettings' :showTooltip='showTooltip'></ejs-heatmap>
</template>

<script setup>
import { HeatMapComponent  as EjsHeatmap, Tooltip, Legend }  from "@syncfusion/ej2-vue-heatmap";
import { HeatMap } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);
    const xAxis = {
          labels: ['Nancy', 'Andrew','Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
    };
    const yAxis = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    };
    const cellSettings = {
        showLabel: true,
    };
    const titleSettings = {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    };
    const dataSource = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
    ];
    const legendSettings = {
      visible:true,
      position: 'Right',
      showLabel: true,
      height: "150"
    };
    const showTooltip = true;
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-heatmap id="heatmap" :dataSource='dataSource' :xAxis='xAxis' :yAxis='yAxis' :titleSettings='titleSettings' :legendSettings='legendSettings' :cellSettings='cellSettings' :showTooltip='showTooltip'></ejs-heatmap>
</template>

<script>
  import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
        'ejs-heatmap': HeatMapComponent
    },
    // Bound properties declarations
    data() {
      return {
         xAxis: {
          labels: ['Nancy', 'Andrew','Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
        },
        yAxis:{
          labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        },
        cellSettings: {
            showLabel: true,
        },
        titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        dataSource: [
            [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]
        ],
        legendSettings: {
            visible:true,
            position: 'Right',
            showLabel: true,
            height: "150"
        },
        showTooltip:true
      };
    },
    provide: {
      heatmap:[Tooltip, Legend]
    }
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

![vue-3-js-HeatMap](./images/vue3-heatmap-demo.PNG)

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue3-tutorial/#migration-from-vue-2-to-vue-3) documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options)
