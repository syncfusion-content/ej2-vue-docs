---
layout: post
title: Getting started with Vue Sparkline component | Syncfusion
description:  Checkout and learn about Getting started with Vue Sparkline component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Sparkline Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Sparkline component.

To get start quickly with Vue Sparkline, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=XdDcvJ0ZJrE" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of minimum dependencies are required to use the sparkline:

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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Sparkline component](https://www.syncfusion.com/vue-components/vue-sparkline) as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion Vue component

Follow the below steps to add the Vue Sparkline component:

1\. First, import and register the Sparkline component in the `script` section of the **src/App.vue** file.

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

2\. In the `template` section, define the Sparkline component.

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

Since the data source has not been specified to the sparkline, no shape will be rendered. Only an empty SVG element is appended to the sparkline container.

## Module Injection

The sparkline component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `provide` option on component creation. The module available in sparkline and its descriptions is as follows.

* SparklineTooltip - Inject this provider to use tooltip series.

In the current application, the above basic sparkline is modified to visualize the types of sparkline.

In this application, tooltip feature of the sparkline is used. Now, import the SparklineTooltip module from the sparkline package, and inject it into the sparkline control using the `provide` option.

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

The [`dataSource`] property is used for binding data source to the sparkline. This property takes the collection value as input. For example, the list of objects can be provided as input.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs14" %}

## Change the type of Sparkline

You can change the sparkline type by setting the [`type`] property to [`Line`], [`Column`], [`WinLoss`], [`Pie`], or [`Area`]. Here, the sparkline type has been set to [`area`].

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs15" %}

## Enable tooltip for Sparkline

The sparkline displays additional information through tooltip when the mouse is hovered over the sparkline. You can enable tooltip by setting the [`visible`] property to true in [`tooltipSettings`] and injecting `SparklineTooltip` module using the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs16" %}
