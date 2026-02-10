---
layout: post
title: Getting started with Vue Sparkline component | Syncfusion
description: Checkout and learn how to set up and use the Vue Sparkline component from Syncfusion Essential JS 2.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Sparkline Component in Vue 2

This article provides a step-by-step guide for creating a Vue 2 project with [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Sparkline component.

To get started quickly with Vue Sparkline, watch this video:

{% youtube "https://www.youtube.com/watch?v=XdDcvJ0ZJrE" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following minimum dependencies are required to use the sparkline:

```js
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-sparkline
    |-- @syncfusion/ej2-vue-base
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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available on npm. The Vue Sparkline component is provided in the `@syncfusion/ej2-vue-charts` package, which includes the necessary Sparkline modules. For advanced or custom integrations, developers can install the lower-level `@syncfusion/ej2-sparkline` package together with `@syncfusion/ej2-vue-base`.

This article uses the Vue Sparkline component as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow these steps to add the Vue Sparkline component:

1. Import and register the Sparkline component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { SparklineComponent } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-sparkline': SparklineComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the Sparkline component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
    <ejs-sparkline></ejs-sparkline>
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

The following example shows a basic Sparkline.

```
<template>
<ejs-sparkline id="sparkline"></ejs-sparkline>
</template>

<script>
import { SparklineComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-sparkline': SparklineComponent
  }
}
</script>
```

Since no data source is provided, the sparkline renders an empty SVG element.

## Module Injection

The Sparkline component is split into feature modules. To enable a feature, import its module and provide it to the component using the `provide` option. Available modules include:

- SparklineTooltip — enables tooltip display for points and series.

The example below demonstrates enabling the tooltip feature by importing `SparklineTooltip` and providing it to the component.

```
<template>
    <div class="control_wrapper">
        <ejs-sparkline id="sparkline"></ejs-sparkline>
    </div>
</template>
<script>
import { SparklineComponent, SparklineTooltip } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-sparkline': SparklineComponent
  },
  data: function() {
    return {
    }
  },
provide:{
    sparkline:[SparklineTooltip]
}
}
</script>
```

## Bind data source to Sparkline

Use the `dataSource` property to bind data to the sparkline. This property accepts a collection (for example, an array of objects) as input.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs14" %}

## Change the type of Sparkline

Change the sparkline type by setting the `type` property to `Line`, `Column`, `WinLoss`, `Pie`, or `Area`. The example below uses the `area` type.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs15" %}

## Enable tooltip for Sparkline

The sparkline displays additional information in a tooltip when hovering over points. Enable tooltips by setting `tooltipSettings.visible` to `true` and injecting the `SparklineTooltip` module via the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs16" %}
