---
layout: post
title: Getting started with Vue List box component | Syncfusion
description:  Checkout and learn about Getting started with Vue List box component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue List box Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue List box component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue List box component](https://www.syncfusion.com/vue-components/vue-listbox) as an example. Install the `@syncfusion/ej2-vue-dropdowns` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-dropdowns --save
```
or

```bash
yarn add @syncfusion/ej2-vue-dropdowns
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://crg.syncfusion.com/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the List box component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue List box component using `Composition API` or `Options API`:

1\. First, import and register the List box component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { ListBoxComponent as EjsListbox } from "@syncfusion/ej2-vue-dropdowns";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
  components: {
    'ejs-listbox': ListBoxComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the List box component with the [dataSource](https://ej2.syncfusion.com/staging/vue/documentation/api/list-box#datasource) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' ></ejs-listbox>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Binding data source

After initialization, populate the ListBox with data using the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/list-box/#datasource) property. Here, an array of object is passed to the ListBox component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' ></ejs-listbox>
    </div>
  </div>
</template>
<script setup>
import { ListBoxComponent as EjsListbox } from "@syncfusion/ej2-vue-dropdowns";
const data = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' ></ejs-listbox>
    </div>
  </div>
</template>
<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
  components: {
    'ejs-listbox': ListBoxComponent
  },
  data (){
    return {
       data: [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
]
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs9" %}
