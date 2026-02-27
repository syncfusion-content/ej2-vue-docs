---
layout: post
title: Getting started with Vue Circular Gauge component | Syncfusion
description:  Checkout and learn about Getting started with Vue Circular Gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Circular Gauge Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Circular Gauge component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following are the minimum dependencies required to use the Circular Gauge component:

```
|-- @syncfusion/ej2-vue-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
       |-- @syncfusion/ej2-splitbuttons
       |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-circulargauge
```

## Setup the Vue 2 project

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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Circular Gauge component](https://www.syncfusion.com/vue-components/vue-circular-gauge) as an example. Install the package by running the following command:

```bash
npm install @syncfusion/ej2-vue-circulargauge --save
```
or

```bash
yarn add @syncfusion/ej2-vue-circulargauge
```

> The **--save** will instruct NPM to include the chart package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Circular Gauge component:

1\. First, import and register the Circular Gauge component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { CircularGaugeComponent } from '@syncfusion/ej2-vue-circulargauge';

export default {
  name: "App",
  components: {
    'ejs-circulargauge': CircularGaugeComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Circular Gauge component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
      <div class='wrapper'>
         <ejs-circulargauge ></ejs-circulargauge>
      </div>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs64/app.vue %}
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

{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs64" %}

## Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

A Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component needs to be registered so that Vue knows where to locate its implementation when it is encountered in a template.

To use directives like `e-axes`, `e-axis`, `e-pointers`, and `e-pointer` for defining gauge axes and pointers, import the Circular Gauge component along with the required child directives from the installed packages into the `<script>` section of the **src/App.vue** file. Register the Circular Gauge component along with the required child directives using the following code:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-vue-circulargauge';

// Component registration
export default {
  name: "App",
  components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The Circular Gauge and its child directives are now registered and ready to use in this application.

## Set Pointer Value

Customize the pointer value displayed on the Circular Gauge by using the [`value`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointer#value-number) property in the [`pointers`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointer) array.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs65/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs65" %}

## Adding Ranges

Ranges are used to specify or group the axis values. You can add ranges to the Circular Gauge using the [`ranges`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range) property. Each range can be customized with different colors, start and end values, and radius.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs8" %}

## Adding Annotation

Annotations are used to mark a specific area of interest in the gauge with text, HTML elements, or images. You can add annotations to the Circular Gauge using the [`annotations`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotation) property.

To use annotation feature, inject the `Annotations` module using the `provide` method.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs60/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs60" %}

## See also

* [Getting Started with the Vue Circular Gauge Component in Vue 3](https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started-vue-3)
