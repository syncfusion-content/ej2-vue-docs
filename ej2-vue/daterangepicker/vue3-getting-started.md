---
layout: post
title: Getting started vue3 with Vue Daterangepicker component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Daterangepicker component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue DateRangePicker Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue DateRangePicker component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

This article uses the [Vue DateRangePicker component](https://www.syncfusion.com/vue-components/vue-daterangepicker) as an example. To use the Vue DateRangePicker component in the project, the `@syncfusion/ej2-vue-calendars` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-calendars --save
```

or

```bash
yarn add @syncfusion/ej2-vue-calendars
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the DateRangePicker component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue DateRangePicker component using `Composition API` or `Options API`:

  1.First, import and register the DateRangePicker component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { DateRangePickerComponent as EjsDaterangepicker } from "@syncfusion/ej2-vue-calendars";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { DateRangePickerComponent } from "@syncfusion/ej2-vue-calendars";
//Component registeration
export default {
    name: "App",
    components: {
        'ejs-daterangepicker' : DateRangePickerComponent
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the DateRangePicker component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class="control_wrapper">
        <ejs-daterangepicker></ejs-daterangepicker>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-daterangepicker></ejs-daterangepicker>
    </div>
</template>
<script setup>
  import { DateRangePickerComponent as EjsDaterangepicker } from "@syncfusion/ej2-vue-calendars";
</script>
<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
    @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
    .control_wrapper {
        max-width: 250px;
        margin: 0 auto;
    }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-daterangepicker></ejs-daterangepicker>
    </div>
</template>
<script>
import { DateRangePickerComponent } from "@syncfusion/ej2-vue-calendars";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-daterangepicker": DateRangePickerComponent
    }
}
</script>
<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
    @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
    .control_wrapper {
        max-width: 250px;
        margin: 0 auto;
    }
</style>
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

![DateRangePicker initial rendering](./images/daterange.png)

## Setting the start date and end date

The start and end date in a range can be defined with the help of startDate and endDate property. The following example demonstrates to set the start and end date on initializing the DateRangePicker. To know more about range restriction in DateRangePicker, please refer this [page](./range-restriction).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :startDate="startVal" :endDate="endVal"
       :placeholder="waterMark"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script setup>
  import { DateRangePickerComponent as EjsDaterangepicker } from "@syncfusion/ej2-vue-calendars";
  const startVal = new Date("11/12/2019 12:00 PM");
  const endVal = new Date("11/25/2019 5:00 PM");
  const waterMark = 'Select a Range';
</script>
<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
    @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
    .control_wrapper {
        max-width: 250px;
        margin: 0 auto;
    }
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :startDate="startVal" :endDate="endVal" :placeholder="waterMark"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script>
import { DateRangePickerComponent } from "@syncfusion/ej2-vue-calendars";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-daterangepicker": DateRangePickerComponent
    },
    data () {
        return {
            startVal : new Date("11/12/2019 12:00 PM"),
            endVal : new Date("11/25/2019 5:00 PM"),
            waterMark : 'Select a Range'
        }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
</style>

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![DateRangePicker with start and end date](./images/range.png)

## See Also

* [Render DateRangePicker with pre-defined ranges](./customization#preset-ranges)
* [Render DateRangePicker with specific culture](./globalization)