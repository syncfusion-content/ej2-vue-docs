---
layout: post
title: Vue 3 Getting Started with the Sparkline Component | Syncfusion
description: Create a Vite-based Vue 3 project and integrate the Syncfusion Essential JS 2 Vue Sparkline component using the Composition API or Options API.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Sparkline Component in Vue 3

This article provides a step-by-step guide to creating a [Vite](https://vite.dev/) JavaScript project and integrating the Syncfusion<sup>®</sup> Vue Sparkline component using either the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or the [Options API](https://vuejs.org/guide/introduction.html#options-api).

The **Composition API** groups related logic into reusable functions. The **Options API** organizes component logic with options such as `data`, `methods`, and life cycle hooks. Choose the API that best fits the application's structure.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).


## Set Up the Vite Project

Create a Vite project using either npm or yarn.

**npm**

```bash
npm create vite@latest my-app -- --template vue
```

**yarn**

```bash
yarn create vite my-app --template vue
```

If Vite prompts you to install dependencies and start the project immediately, select **No**. The Syncfusion package is installed in a later step.

Navigate to the project directory:

```bash
cd my-app
```

Install the project dependencies.

**npm**

```bash
npm install
```

**yarn**

```bash
yarn install
```

> **Note:** To create a TypeScript project, use `npm create vite@latest my-app -- --template vue-ts` or `yarn create vite my-app --template vue-ts`.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Package

Syncfusion Vue packages are available on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the `@syncfusion/ej2-vue-charts` package. Use a package release compatible with Vue 3 and the Node.js version used by the project.

**npm**

```bash
npm install @syncfusion/ej2-vue-charts
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-charts
```

> **Note:** For TypeScript projects, refer to [Vue 3 with the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition) or [Vue 3 with the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options).

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Sparkline Component

Follow these steps to add the Vue Sparkline component using the Composition API or Options API.

**Step 1:** Import and Register the Component

Import the Sparkline component in **src/App.vue**.

In the Composition API example, alias the component import to the name used by the custom element in the template. Components imported in `<script setup>` are available directly in the template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import {
  SparklineComponent as EjsSparkline,
} from '@syncfusion/ej2-vue-charts';

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import {
  SparklineComponent,
} from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-sparkline': SparklineComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Declare the Data and Configuration

Define the data source and Sparkline configuration values in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const dataSource = [
  { year: '2005', population: 20090440 },
  { year: '2006', population: 20264080 },
  { year: '2007', population: 20434180 },
  { year: '2008', population: 21007310 },
  { year: '2009', population: 21262640 },
  { year: '2010', population: 21515750 },
  { year: '2011', population: 21766710 },
  { year: '2012', population: 22015580 },
  { year: '2013', population: 22262500 },
  { year: '2014', population: 22507620 }
];

const type = 'Area';
const valueType = 'Category';
const xName = 'year';
const height = '200px';
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  data() {
    return {
      dataSource: [
        { year: '2005', population: 20090440 },
        { year: '2006', population: 20264080 },
        { year: '2007', population: 20434180 },
        { year: '2008', population: 21007310 },
        { year: '2009', population: 21262640 },
        { year: '2010', population: 21515750 },
        { year: '2011', population: 21766710 },
        { year: '2012', population: 22015580 },
        { year: '2013', population: 22262500 },
        { year: '2014', population: 22507620 }
      ],
      type: 'Area',
      valueType: 'Category',
      xName: 'year',
      height:'200px',
    };
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 3:** Define the Sparkline in the Template

Add the Sparkline component to the `template` section of **src/App.vue**.

The example uses the following properties:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index#datasource) specifies an array of data objects or a `DataManager` instance.
- [`xName`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index#xname) maps the horizontal-value field.
- [`yName`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index#yname) maps the numeric-value field.
- [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index#valuetype) specifies how the x-values are interpreted.
- [`type`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index#type) specifies the Sparkline type. Supported values include `Line`, `Column`, `WinLoss`, `Pie`, and `Area`; the default is `Line`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-sparkline
      id="sparkline"
      :dataSource="dataSource"
      :xName="xName"
      :yName="yName"
      :valueType="valueType"
      :type="type"
      :height='height'
    ></ejs-sparkline>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Each data object must contain the fields assigned to `xName` and `yName`. The field assigned to `yName` must contain a numeric value. Set `valueType` to `Category` when the field assigned to `xName` contains category strings.

Replace the contents of **src/App.vue** with either the Composition API or Options API example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-sparkline
      id="sparkline"
      :dataSource="dataSource"
      :xName="xName"
      :yName="yName"
      :valueType="valueType"
      :type="type"
      :height='height'
    ></ejs-sparkline>
  </div>
</template>

<script setup>
import {
  SparklineComponent as EjsSparkline
} from '@syncfusion/ej2-vue-charts';

const dataSource = [
  { year: '2005', population: 20090440 },
  { year: '2006', population: 20264080 },
  { year: '2007', population: 20434180 },
  { year: '2008', population: 21007310 },
  { year: '2009', population: 21262640 },
  { year: '2010', population: 21515750 },
  { year: '2011', population: 21766710 },
  { year: '2012', population: 22015580 },
  { year: '2013', population: 22262500 },
  { year: '2014', population: 22507620 }
];

const type = 'Area';
const valueType = 'Category';
const xName = 'year';
const yName = 'population';
const height = '200px';

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-sparkline
      id="sparkline"
      :dataSource="dataSource"
      :xName="xName"
      :yName="yName"
      :valueType="valueType"
      :type="type"
      :height='height'
    ></ejs-sparkline>
  </div>
</template>

<script>
import {
  SparklineComponent
} from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-sparkline': SparklineComponent
  },
  data() {
    return {
      dataSource: [
        { year: '2005', population: 20090440 },
        { year: '2006', population: 20264080 },
        { year: '2007', population: 20434180 },
        { year: '2008', population: 21007310 },
        { year: '2009', population: 21262640 },
        { year: '2010', population: 21515750 },
        { year: '2011', population: 21766710 },
        { year: '2012', population: 22015580 },
        { year: '2013', population: 22262500 },
        { year: '2014', population: 22507620 }
      ],
      type: 'Area',
      valueType: 'Category',
      xName: 'year',
      yName: 'population',
      height:'200px',
    };
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Run the Project

Save **src/App.vue**, and then start the development server using either npm or yarn.

**npm**

```bash
npm run dev
```

**yarn**

```bash
yarn run dev
```

Open the local URL displayed in the terminal, commonly `http://localhost:5173`, and verify that an area Sparkline displays population values from 2005 through 2014.

![vue3-sparkline-charts-demo](./images/vue3-sparkline-charts-demo.png)

> **Sample:** Explore the [Vite-based Vue Sparkline getting-started sample](https://github.com/SyncfusionExamples/getting-started-with-the-vue-sparkline-chart-component).

For information about migrating an application from Vue 2 to Vue 3, see the [Vue 3 Migration Guide](https://v3-migration.vuejs.org/).

## Troubleshooting

- **The Sparkline is not rendered.** Verify that the component import is aliased correctly in the Composition API or registered in `components` in the Options API. 
- **No data is displayed.** Verify that `dataSource` contains records, `xName` and `yName` match fields in every data object, and the field mapped by `yName` contains numeric values.
- **Category values are not interpreted correctly.** Set `valueType` to `Category` when the field mapped by `xName` contains category strings.
- **The requested type is not displayed.** Use one of the supported case-sensitive values: `Line`, `Column`, `WinLoss`, `Pie`, or `Area`.
- **An import or runtime error is displayed.** Verify that `@syncfusion/ej2-vue-charts` is installed and that its version supports the project's Vue and Node.js versions.

For additional assistance, refer to the [Vue Sparkline API documentation](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index).

## See Also

- [Vue 3 Sparkline getting-started documentation](https://ej2.syncfusion.com/vue/documentation/sparkline/vue-3-getting-started)
- [Vue Sparkline user interaction](https://ej2.syncfusion.com/vue/documentation/sparkline/user-interaction)
- [Vue Sparkline examples](https://ej2.syncfusion.com/vue/demos/#/material3/sparkline/default.html)
- [Getting Started with Vue UI Components using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue UI Components using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
