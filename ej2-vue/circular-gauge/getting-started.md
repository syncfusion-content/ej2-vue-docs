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

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Circular Gauge component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

Below is the list of minimum dependencies required to use the Circular Gauge.

```javascript
|-- @syncfusion/ej2-vue-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
       |-- @syncfusion/ej2-splitbuttons
       |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-circulargauge
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

This article uses the [Vue Circular gauge component](https://www.syncfusion.com/vue-components/vue-circular-gauge) as an example. Install the `@syncfusion/ej2-vue-circulargauge` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-circulargauge --save
```
or

```bash
yarn add @syncfusion/ej2-vue-circulargauge
```

## Adding Syncfusion Vue Circular Gauge component

Follow the below steps to add the Vue Circular Gauge component:

1\. First, import and register the Circular Gauge component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { CircularGaugeComponent } from '@syncfusion/ej2-vue-circulargauge';

export default {
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

## Set Pointer Value

You can change the pointer value in the above sample using [`value`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointer/#value-number) property in [`pointers`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tooltipSettings/).

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs65/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs65" %}
