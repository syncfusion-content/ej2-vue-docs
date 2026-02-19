---
layout: post
title: Getting started with Vue Smith Chart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Smith Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Smith Chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Smith Chart component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following minimum dependencies are required to use the Smith Chart component:

```
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-vue-base
```

## Setup the Vue 2 project

To generate a Vue 2 project using Vue CLI, run the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the package required for the Smith Chart component.

This article uses the [Vue Smith Chart component](https://www.syncfusion.com/vue-components/vue-smith-chart) as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The **--save** option will instruct NPM to include the Progress Bar package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow these steps to add the Vue Smith Chart component:

1\. First, import and register the Smith Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~src/App.vue" %}

<script>
import { SmithchartComponent } from "@syncfusion/ej2-vue-charts";
export default {
  components: {
    'ejs-smithchart': SmithchartComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Smith Chart component.

{% tabs %}
{% highlight html tabtitle="~src/App.vue" %}

<template>
    <div id="app">
    <ejs-smithchart></ejs-smithchart>
  </div>
</template>

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

The following example shows a basic Smith Chart component instance.

```
<template>
<ejs-smithchart id="smithchart"></ejs-smithchart>
</template>

<script>
import { SmithchartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-smithchart': SmithchartComponent
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-charts/styles/material.css";
</style>
```

## Module Injection

The Smith Chart component is modular: optional features are provided as separate modules that must be imported and injected. To enable a feature, import its module and inject it using the `provide` option in the component definition (Vue 2).

Available feature modules include:

- `SmithchartLegend` — Provides the legend feature.
- `TooltipRender` — Provides the tooltip feature.

The example below shows how to import these modules and inject them into the Smith Chart via `provide`.

```
<template>
    <div class="control_wrapper">
        <ejs-smithchart id="smithchart"></ejs-smithchart>
    </div>
</template>
<script>
import { SmithchartComponent, SmithchartLegend, TooltipRender } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-smithchart': SmithchartComponent
  },
  data: function() {
    return {
    }
  },
  provide: {
    smithchart: [SmithchartLegend, TooltipRender]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-charts/styles/material.css";
</style>
```

## Add series to Smith chart

The Smith Chart supports two ways to specify series:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#datasource) — Bind a data object that specifies resistance and reactance values.
- [`points`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#points) — Provide a collection of resistance and reactance points for the series.

The following examples demonstrate two approaches to add series to the Smith Chart:

- The first series, `Transmission1`, is bound using `dataSource`.
- The second series, `Transmission2`, is defined using `points`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

## Add title to Smith chart

The following Smith Chart APIs control the chart title:

- [`title`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/titlemodel) — Configures the chart title.
- [`text`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/titlemodel#text) — Sets the title text.
- [`visible`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/titlemodel#visible) — Shows or hides the title.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs2" %}

## Enable marker to the Smith chart

To enable and customize markers for a series, use the series [`marker`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriesmarkermodel) API. Set the marker's [`visible`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriesmarkermodel#visible) property to `true` for the series that should display markers. The following sample enables the marker for the first series only.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs3" %}

## Enable data label to marker

To display and customize data labels on markers, use the marker [`dataLabel`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriesmarkerdatalabelmodel) settings. Set the data label's [`visible`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriesmarkerdatalabelmodel#visible) property to `true` within the series [`marker`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriesmarkermodel) configuration. The following sample enables data labels for the first series marker.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs4" %}

## Enable legend for Smith chart

The legend displays series identifiers. Inject the `SmithchartLegend` module using the `provide` option and enable the legend by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartlegendsettingsmodel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartlegendsettingsmodel). Series names can be customized using the series [`name`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#name) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs5" %}

## Enable tooltip for the Smith chart series

Tooltips show point values on hover. Inject the `TooltipRender` module using the `provide` option and enable tooltips by setting [`visible`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriestooltipmodel#visible) to `true` in [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/seriestooltipmodel). The following sample shows tooltip configuration for the Smith Chart series collection.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs6" %}

## See also

* [Getting Started with Vue 3 Smith Chart](vue-3-getting-started)
* [Getting Started with Vue 3 using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue 3 using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)