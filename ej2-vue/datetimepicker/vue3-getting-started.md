---
layout: post
title: Getting started vue3 with Vue DateTimePicker Component | Syncfusion
description:  Checkout and learn about getting started vue3 with Syncfusion Essential Vue DateTimePicker component, its elements and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue DateTimePicker Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue DateTimePicker component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

This article uses the [Vue DateTimePicker component](https://www.syncfusion.com/vue-components/vue-datetimepicker) as an example. To use the Vue DateTimePicker component in the project, the `@syncfusion/ej2-vue-calendars` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-calendars --save
```

or

```bash
yarn add @syncfusion/ej2-vue-calendars
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the DateTimePicker component and its dependents were imported into the `<style>` section of **src/App.vue** file.

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

## Add Syncfusion Vue component

Follow the below steps to add the Vue DateTimePicker component using `Composition API` or `Options API`:

  1.First, import and register the DateTimePicker component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { DateTimePickerComponent as EjsDatetimepicker } from "@syncfusion/ej2-vue-calendars"; 
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";
//Component registeration
export default {
    name: "App",
    components: {
        'ejs-datetimepicker' : DateTimePickerComponent,
    }
}

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the DateTimePicker component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class="control_wrapper">
        <ejs-datetimepicker></ejs-datetimepicker>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-datetimepicker></ejs-datetimepicker>
    </div>
</template>
<script setup>
  import { DateTimePickerComponent as EjsDatetimepicker } from "@syncfusion/ej2-vue-calendars"; 
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
        <ejs-datetimepicker></ejs-datetimepicker>
    </div>
</template>
<script>
import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-datetimepicker": DateTimePickerComponent
    },
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

![DateTimePicker initial rendering](./images/vue-datetimepicker-datetime.png)

## Setting the value,min and max

The minimum and maximum date time can be defined with the help of `min` and `max` property. The following example demonstrates to set the `min` and `max` on initializing the DateTimePicker. To know more about range restriction in DateTimePicker, please refer this [page](./date-time-range).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class='wrapper'>
        <ejs-datetimepicker :placeholder="data[0].waterMark" :min="data[0].minDate" :max="data[0].maxDate"  :value="data[0].val"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script setup>
import { DateTimePickerComponent as EjsDatetimepicker } from "@syncfusion/ej2-vue-calendars"; 
   const data = [{ waterMark : 'Select a datetime',
                   minDate : new Date('5/5/2019 2:00 AM'),
                   maxDate : new Date('5/25/2019 2:00 AM'),
                   val : new Date('5/10/2019 12:00 AM')}];
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
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div class='wrapper'>
        <ejs-datetimepicker :placeholder="waterMark" :min="minDate" :max="maxDate"  :value="val"></ejs-datetimepicker>
    </div>
  </div>
</template>
<script>
import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-datetimepicker": DateTimePickerComponent
    },
    data () {
        return {
            waterMark : 'Select a datetime',
            minDate : new Date('5/5/2019 2:00 AM'),
            maxDate : new Date('5/25/2019 2:00 AM'),
            val : new Date('5/10/2019 12:00 AM')
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

![DateTimePicker with min and max dates](./images/vue-datetimepicker-range.png)

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.

## See Also

* [Render DateTimePicker with specific culture](./globalization)
