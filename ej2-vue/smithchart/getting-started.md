---
layout: post
title: Getting started with Vue Smithchart component | Syncfusion
description:  Checkout and learn about Getting started with Vue Smithchart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create the Smith chart control and demonstrate its basic usage.

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

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications. To install Vue CLI use the following command.

```bash
npm install -g @vue/cli

npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart

npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use Smith chart component.

To install Smith chart component, use the following command

```bash
npm install @syncfusion/ej2-vue-charts –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.

* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { SmithchartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(SmithchartPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { SmithchartComponent, SmithchartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.component(SmithchartPlugin.name,  SmithchartComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Initialize Smith chart component

Add the EJ2 Vue Smith chart using `<ejs-smithchart>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the Smith chart component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
    <ejs-smithchart></ejs-smithchart>
  </div>
</template>
<script>
import Vue from 'vue';
import { SmithchartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(SmithchartPlugin);
export default Vue.extend ({});
</script>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Smith chart.

```
<template>
<ejs-smithchart id="smithchart"></ejs-smithchart>
</template>

<script>
import Vue from 'vue';
import { SmithchartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(SmithchartPlugin);

export default Vue.extend ({});
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
import Vue from 'vue';
import { SmithchartPlugin,SmithchartLegend, TooltipRender } from "@syncfusion/ej2-vue-charts";
Vue.use(SmithchartPlugin);

export default {
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
{% highlight html tabtitle="app.vue" %}
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
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs2" %}

## Enable marker to the Smith chart

To use marker in series and its customization in Smith chart, use series `marker` API. To display marker for a particular series, specify the `marker visible` to true. The following sample marker is enabled for the first series only.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs3" %}

## Enable data label to marker

To use marker data label and its customization in Smith chart, use marker `dataLabel`. To display data label for a particular series marker, specify the `dataLabel visible` to true in that series `marker`. The following sample data label is enabled for the first series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs4" %}

## Enable legend for Smith chart

The legend feature is used to denote the corresponding series. To enable the legend, inject the `SmithchartLegend` module using the `provide` option and set `visible` to true in `legendSettings`. The following sample shows enabling legend for Smith chart. The series name can be customized using the series `name`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs5" %}

## Enable tooltip for the Smith chart series

The tooltip feature is used to show the values of the current point. To enable the tooltip, inject the `TooltipRender` module using the `provide` option and set `visible` to true. The following sample shows enabling tooltip for Smith chart series collection.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs6" %}