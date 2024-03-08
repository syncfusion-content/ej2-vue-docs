---
layout: post
title: Getting started with Vue Circular Chart 3D | Syncfusion
description:  Checkout and learn about Getting started with Vue Circular Chart 3D component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Vue Circular Chart 3D component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Circular Chart 3D component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the Circular Chart 3D component.

```javascript
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
```

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

![Vue 2 project](images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue Circular Chart 3D component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The **--save** will instruct NPM to include the chart package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion Vue component

Follow the below steps to add the Vue Circular Chart 3D component:

1\. First, import and register the Circular Chart 3D component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Circular Chart 3D component with the `dataSource` property.

{% tabs %}
{% highlight html tabtitle="~src/App.vue" %}

<template>
    <div id="app">
         <ejs-circularchart3d id="container">
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data() {
  return {
    seriesData: data
  };
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding Circular Chart 3D Component

* Add the Vue Circular Chart 3D by using `<ejs-circularchart3d>` selector in `<template>` section of the `App.vue` file.

The below example shows a basic Circular Chart 3D,

* Pie Series

By default pie series will be rendered on assigning JSON data to the series by using `dataSource` property. Map the field names in the JSON data to the `xName` and `yName` properties of the series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/circular-chart/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/getting-started" %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

> You can refer to our `Vue Circular Chart 3D` feature tour page for its groundbreaking feature representations. You can also explore our `Vue Circular Chart 3D example` that shows various Circular Chart 3D types and how to represent time-dependent data, showing trends in data at equal intervals.