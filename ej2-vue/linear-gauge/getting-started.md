---
layout: post
title: Getting started with Vue Linear Gauge component | Syncfusion
description:  Checkout and learn about Getting started with Vue Linear Gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Linear Gauge Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Linear Gauge component.

## Prerequisites

Before you begin, ensure your development environment meets the following requirements:

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The following dependencies are required to use the Linear Gauge component in your application:

```javascript
|-- @syncfusion/ej2-vue-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-lineargauge
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

![Vue 2 project terminal showing default project setup](images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Linear Gauge component](https://www.syncfusion.com/vue-components/vue-linear-gauge) as an example. Install the package by running the following command:

```bash
npm install @syncfusion/ej2-vue-lineargauge --save
```
or

```bash
yarn add @syncfusion/ej2-vue-lineargauge
```



## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Linear Gauge component

Follow the steps below to add the Vue Linear Gauge component:

1\. First, import and register the Linear Gauge component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
import { LinearGaugeComponent as EjsLineargauge } from '@syncfusion/ej2-vue-lineargauge';

</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<script>
import { LinearGaugeComponent } from '@syncfusion/ej2-vue-lineargauge';

export default {
  name: "App",
  components: {
    'ejs-lineargauge': LinearGaugeComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Linear Gauge component.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-lineargauge> </ejs-lineargauge>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

A Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component needs to be registered so that Vue knows where to locate its implementation when it is encountered in a template.

To use directives like `e-axes` and `e-axis` for defining gauge axes, import the Linear Gauge component along with the required child directives from the installed packages into the `<script>` section of the **src/App.vue** file. Register the Linear Gauge component along with the required child directives using the following code:

```javascript
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-vue-lineargauge';

// Component registration
export default {
  name: "App",
  components: {
    'ejs-lineargauge' : LinearGaugeComponent,
    'e-axes' : AxesDirective,
    'e-axis' : AxisDirective
  }
}
```

The Linear Gauge and axes directives are now registered and ready to use in this application.

## Defining axis

The Linear Gauge requires at least one axis to be defined. You can define the axis using the `e-axis` directive. Here is the complete code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs34/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs34/app.vue %}
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

{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs34" %}

## Module injection

To create Vue Linear Gauge with additional features, inject the required modules. The following modules are used to extend Linear Gauge's basic functionality.

* **Annotations** - Inject this module to use annotation features for displaying custom text or markers on the gauge.
* **GaugeTooltip** - Inject this module to enable tooltip functionality for displaying information when interacting with the gauge.

```javascript
import { LinearGaugeComponent, Annotations, GaugeTooltip } from '@syncfusion/ej2-vue-lineargauge';

export default {
  components: { 'ejs-lineargauge': LinearGaugeComponent },
  provide: {
    lineargauge: [Annotations, GaugeTooltip]
  }
}
```

## Adding the Linear Gauge title

The title can be added to the Linear Gauge component using the [`title`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/linearGaugeModel#title) property in the Linear Gauge.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs35" %}

## Axis range

The range of the axis can be set using the [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/axis#minimum-number) and [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/axis#maximum-number) properties in the Linear Gauge.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs36" %}

### Customizing the axis labels

To denote the axis labels with temperature units, add the °C as a suffix to each label. This can be achieved by setting **{value}°C** to the [`format`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/labelModel#format-string) property in the [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/axis#labelstyle-labelmodel) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

To change the pointer value from its default setting, set the [`value`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointer#value-number) property in the [`pointers`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel) object of the axis.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs37" %}

## Set pointer value

The pointer value can be customized using the [`value`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointer#value-number) property in the [`pointers`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointer) object of the axis.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs38" %}

> You can refer to our [Vue Linear Gauge](https://www.syncfusion.com/vue-components/vue-linear-gauge) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Linear Gauge example](https://ej2.syncfusion.com/vue/demos/#/material/linear-gauge/default.html) that shows how to render the Linear Gauge in Vue.

## See also

* [Getting Started with the Vue Linear Gauge Component in Vue 3](https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started-vue-3)