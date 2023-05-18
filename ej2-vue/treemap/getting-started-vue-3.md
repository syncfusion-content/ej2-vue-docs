---
layout: post
title: Vue 3 getting started with the TreeMap component | Syncfusion
description:  Checkout and learn about Vue 3 getting started with the Vue TreeMap component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TreeMap Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue TreeMap component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

This article uses the [Vue TreeMap component](https://www.syncfusion.com/vue-components/vue-treemap) as an example. To use the Vue TreeMap component in the project, the `@syncfusion/ej2-vue-treemap` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-treemap --save
```

or

```bash
yarn add @syncfusion/ej2-vue-treemap
```

## Add Syncfusion Vue component

Follow the below steps to add the Vue TreeMap component using `Composition API` or `Options API`:

1.First, import and register the TreeMap component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { TreeMapComponent as EjsTreemap, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
import { TreeMap } from '@syncfusion/ej2-treemap';
TreeMap.Inject(TreeMapLegend);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
//Component registration
export default {
  name: "App",
  components: {
      'ejs-treemap': TreeMapComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the TreeMap component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/treemap/#datasource), [weightValuePath](https://ej2.syncfusion.com/vue/documentation/api/treemap/#weightvaluepath), [leafItemSettings](https://ej2.syncfusion.com/vue/documentation/api/treemap/#leafitemsettings) and other property definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-treemap id="treemap" :dataSource="dataSource" :weightValuePath="weightValuePath" :leafItemSettings="leafItemSettings" :equalColorValuePath="equalColorValuePath" :legendSettings="legendSettings"></ejs-treemap>
</template>

{% endhighlight %}
{% endtabs %}

3.In the `script` section, declare the values for the properties defined in the `template` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    const dataSource= [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 }
    ];
    const weightValuePath = 'Count';
    const equalColorValuePath = "Count";
    const leafItemSettings = {
          labelPath: "State",
          colorMapping: [
              { value: "25", color: "#634D6F" },
              { value: "12", color: "#B34D6D" },
              { value: "9", color: "#557C5C" },
              { value: "7", color: "#44537F" },
              { value: "6", color: "#637392" },
              { value: "3", color: "#7C754D" },
              { value: "2", color: "#2E7A64" },
              { value: "1", color: "#95659A" }
            ]
          };
    const legendSettings = {
            visible: true
    };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    dataSource: [
      { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
      { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
      { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
      { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
      { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
      { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
      { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
      { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
      { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
      { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
      { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
      { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
      { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
      { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 }
    ],
    weightValuePath: 'Count',
    equalColorValuePath: "Count",
    leafItemSettings: {
      labelPath: "State",
      colorMapping: [
        { value: "25", color: "#634D6F" },
        { value: "12", color: "#B34D6D" },
        { value: "9", color: "#557C5C" },
        { value: "7", color: "#44537F" },
        { value: "6", color: "#637392" },
        { value: "3", color: "#7C754D" },
        { value: "2", color: "#2E7A64" },
        { value: "1", color: "#95659A" }
      ]
    },
    legendSettings: {
      visible: true
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
     <ejs-treemap id="treemap" :dataSource="dataSource" :weightValuePath="weightValuePath" :leafItemSettings="leafItemSettings" :equalColorValuePath="equalColorValuePath" :legendSettings="legendSettings"></ejs-treemap>
</template>

<script setup>
import { TreeMapComponent as EjsTreemap, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
import { TreeMap } from '@syncfusion/ej2-treemap';
TreeMap.Inject(TreeMapLegend);
const dataSource= [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 }
  ];
  const weightValuePath = 'Count';
  const equalColorValuePath = "Count";
  const leafItemSettings = {
        labelPath: "State",
        colorMapping: [
            { value: "25", color: "#634D6F" },
            { value: "12", color: "#B34D6D" },
            { value: "9", color: "#557C5C" },
            { value: "7", color: "#44537F" },
            { value: "6", color: "#637392" },
            { value: "3", color: "#7C754D" },
            { value: "2", color: "#2E7A64" },
            { value: "1", color: "#95659A" }
          ]
        };
  const legendSettings = {
          visible: true
  };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
     <ejs-treemap id="treemap" :dataSource="dataSource" :weightValuePath="weightValuePath" :leafItemSettings="leafItemSettings" :equalColorValuePath="equalColorValuePath" :legendSettings="legendSettings"></ejs-treemap>
</template>

<script>
  import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
        'ejs-treemap': TreeMapComponent
    },
    // Bound properties declarations
    data() {
      return {
        dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 }
          ],
          weightValuePath: 'Count',
          equalColorValuePath: "Count",
          leafItemSettings: {
            labelPath: "State",
            colorMapping: [
              { value: "25", color: "#634D6F" },
              { value: "12", color: "#B34D6D" },
              { value: "9", color: "#557C5C" },
              { value: "7", color: "#44537F" },
              { value: "6", color: "#637392" },
              { value: "3", color: "#7C754D" },
              { value: "2", color: "#2E7A64" },
              { value: "1", color: "#95659A" }
            ]
          },
          legendSettings: {
            visible: true
          }
      };
    },
    provide: {
      treemap:[TreeMapLegend]
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

![vue-3-js-TreeMap](./images/vue3-treemap-demo.png)

> **Sample**: [vue3-treemap-getting-started](https://github.com/SyncfusionExamples/vue3-treemap-getting-started).

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue3-tutorial/#migration-from-vue-2-to-vue-3) documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options)
