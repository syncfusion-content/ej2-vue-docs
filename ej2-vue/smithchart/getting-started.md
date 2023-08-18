---
layout: post
title: Getting started with Vue Smithchart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Smithchart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Smithchart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Smithchart component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of minimum dependencies are required to use the Smith chart:

```javascript
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

This article uses the [Vue Smithchart component](https://www.syncfusion.com/vue-components/vue-smith-chart) as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

## Add Syncfusion Vue component

Follow the below steps to add the Vue Smithchart component:

1\. First, import and register the Smithchart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight htm tabtitle="~src/App.vue" %}

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

2\. In the `template` section, define the Smithchart component.

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

The following example shows a basic Smith chart.

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
```

## Module Injection

The smith chart component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `provide` option on component creation. The module available in smith chart and its descriptions is as follows.

* SmithchartLegend - Inject this provider to use legend feature.
* TooltipRender - Inject this provider to use tooltip feature.

In the current application, the above basic Smith chart is modified to visualize transmission lines. For this application, the tooltip and legend features of the Smith chart are used. The feature modules available in the Smith chart and their descriptions are as follows.

Now, import the above mentioned modules from the Smithchart package, and inject it into the Smith chart control using the `provide` option.

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
provide:{
    smithchart:[Legend, TooltipRender]
}
}
</script>
```

## Add series to Smith chart

The Smith chart has the following two type of specification for adding series:

* dataSource - Data object can be bound directly by specifying the resistance and reactance values.
* points - Collection of resistance and reactance values can be bound directly to render the series.

The following two ways demonstrate adding two series to the Smith chart.

* First series Transmission1 shows dataSource bound series.
* Second series Transmission2 shows points bound series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

## Add title to Smith chart

The following APIs are used in the Smith chart:

* `title` - Adds title to the Smith chart.
* `text` - Sets text to the title.
* `visible` - Toggles the title.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs2" %}

## Enable marker to the Smith chart

To use marker in series and its customization in Smith chart, use series `marker` API. To display marker for a particular series, specify the `marker visible` to true. The following sample marker is enabled for the first series only.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs3" %}

## Enable data label to marker

To use marker data label and its customization in Smith chart, use marker `dataLabel`. To display data label for a particular series marker, specify the `dataLabel visible` to true in that series `marker`. The following sample data label is enabled for the first series.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs4" %}

## Enable legend for Smith chart

The legend feature is used to denote the corresponding series. To enable the legend, inject the `SmithchartLegend` module using the `provide` option and set `visible` to true in `legendSettings`. The following sample shows enabling legend for Smith chart. The series name can be customized using the series `name`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs5" %}

## Enable tooltip for the Smith chart series

The tooltip feature is used to show the values of the current point. To enable the tooltip, inject the `TooltipRender` module using the `provide` option and set `visible` to true. The following sample shows enabling tooltip for Smith chart series collection.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs6" %}