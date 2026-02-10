---
layout: post
title: Vue 3 getting started with the Linear Gauge component | Syncfusion
description:  Checkout and learn about Vue 3 getting started with the Vue Linear Gauge component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Linear Gauge Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Linear Gauge component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

Before you begin, ensure your development environment meets the following requirements:

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

The recommended approach to begin with Vue is to scaffold a project using [Vite](https://vitejs.dev). To create a new Vite project, use one of the commands specific to either npm or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

The above commands will prompt you to configure the project. Follow these steps:

1. Define the project name: Specify the name of the project as `my-project` for this article.

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

3. Choose `JavaScript` as the framework variant to build the Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4. After creating `my-project`, run the following command to install dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue Linear Gauge component](https://www.syncfusion.com/vue-components/vue-linear-gauge) as an example. To use the Vue Linear Gauge component in the project, install the package using the following command:

```bash
npm install @syncfusion/ej2-vue-lineargauge --save
```

or

```bash
yarn add @syncfusion/ej2-vue-lineargauge
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue Linear Gauge component using `Composition API` or `Options API`:

1.First, import and register the Linear Gauge component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, RangesDirective as ERanges, RangeDirective as ERange } from '@syncfusion/ej2-vue-lineargauge';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-lineargauge';
//Component registration
export default {
  name: "App",
  components: {
        'ejs-lineargauge' : LinearGaugeComponent,
        'e-axes' : AxesDirective,
        'e-axis' : AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer' : PointerDirective,
        'e-ranges' : RangesDirective,
        'e-range' : RangeDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}
   
2.In the `template` section, define the Linear Gauge component with the axis, pointer and range property definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-lineargauge :title ='title' orientation='Horizontal'>
        <e-axes>
            <e-axis minimum=0 maximum=200>
                <e-pointers>
                    <e-pointer value=140 color='red'></e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=80 startWidth=15 endWidth=15></e-range>
                    <e-range start=80 end=120 startWidth=15 endWidth=15></e-range>
                    <e-range start=120 end=140 startWidth=15 endWidth=15></e-range>
                    <e-range start=140 end=200 startWidth=15 endWidth=15></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
</template>

{% endhighlight %}
{% endtabs %}

3.In the `script` section, declare the values for the properties defined in the `template` section.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
    const title = "Linear Gauge";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    title: 'Linear Gauge'
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the complete code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <ejs-lineargauge :title ='title' orientation='Horizontal'>
        <e-axes>
            <e-axis minimum=0 maximum=200>
                <e-pointers>
                    <e-pointer value=140 color='red'></e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=80 startWidth=15 endWidth=15></e-range>
                    <e-range start=80 end=120 startWidth=15 endWidth=15></e-range>
                    <e-range start=120 end=140 startWidth=15 endWidth=15></e-range>
                    <e-range start=140 end=200 startWidth=15 endWidth=15></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
</template>

<script setup>
import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, RangesDirective as ERanges, RangeDirective as ERange } from '@syncfusion/ej2-vue-lineargauge';
const title = "Linear Gauge";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <ejs-lineargauge :title ='title' orientation='Horizontal'>
        <e-axes>
            <e-axis minimum=0 maximum=200>
                <e-pointers>
                    <e-pointer value=140 color='red'></e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=80 startWidth=15 endWidth=15></e-range>
                    <e-range start=80 end=120 startWidth=15 endWidth=15></e-range>
                    <e-range start=120 end=140 startWidth=15 endWidth=15></e-range>
                    <e-range start=140 end=200 startWidth=15 endWidth=15></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
</template>

<script>
  import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-lineargauge';
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
        'ejs-lineargauge' : LinearGaugeComponent,
        'e-axes' : AxesDirective,
        'e-axis' : AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer' : PointerDirective,
        'e-ranges' : RangesDirective,
        'e-range' : RangeDirective
    },
    // Bound properties declarations
    data() {
      return {
        title: 'Linear Gauge'
      };
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

![vue-3-js-Linear-gauge](./images/vue3-lg-demo.png)

> **Sample**: [vue3-linear-gauge-getting-started](https://github.com/SyncfusionExamples/vue3-lineargauge-getting-started).

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options)
