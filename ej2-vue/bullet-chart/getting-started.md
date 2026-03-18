---
layout: post
title: Getting started with Vue Bullet Chart component | Syncfusion
description: Quickstart: integrate the Syncfusion Vue 2 Bullet Chart - setup with Vue CLI, module registration, and example usage.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Bullet Chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Bullet Chart component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the Bullet Chart component.

```
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

## Setup the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Terminal showing Vue CLI creating a Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Bullet Chart component](https://www.syncfusion.com/vue-components/vue-bullet-chart) as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The –save will instruct NPM to include the Bullet Chart package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue Bullet Chart component:

1. First, import and register the Bullet Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the Bullet Chart component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div>
      <ejs-bulletchart id="bulletChart"> </ejs-bulletchart>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/app.vue %}
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
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/initialize-cs1" %}

## Module Injection

Bullet Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature module using `provide` method. In the current application, we are going to use tooltip feature of the Bullet Chart.

• `BulletTooltip` - Inject this provider to use tooltip feature.

These modules should be injected to the provide method as follows,

```ts
import { BulletChartComponent, BulletTooltip } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent
  },
  provide: {
    bulletChart: [BulletTooltip]
  }
};
```

## BulletChart With Data

This section explains how to plot local data to the Bullet Chart.

```ts
let data: any[] = [
       { value: 100, target: 80 },
       { value: 200, target: 180 },
       { value: 300, target: 280 },
       { value: 400, target: 380 },
       { value: 500, target: 480 },
];
```

Now assign the local data to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#datasource) property. Map the `value` and `target` fields to [`valueField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#valuefield) and [`targetField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#targetfield) respectively.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/datasource-cs1" %}

## Add Bullet Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#title) property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using `e-bullet-range` of the `e-bullet-range-collection`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/bullet-chart/getting-started/ranges-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/ranges-cs1" %}

## Tooltip

Enable tooltip for the Bullet Chart by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel#enable) property to `true` in the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#tooltip) object and registering the `BulletTooltip` module in `provide`.

## Verify the chart

After starting the dev server, confirm the bullet chart renders correctly:

- Start the dev server with `npm run serve` or `yarn run serve`.
- Open the project URL shown in the terminal and verify the chart displays.
- If the chart does not render, inspect the browser console for errors related to missing modules, incorrect imports, or incompatible Vue versions.

## Troubleshooting (common issues)

- Chart not rendering: ensure the `BulletTooltip` and other required modules are registered in `provide` and that `dataSource` contains valid data.
- Incorrect mappings: verify `valueField` and `targetField` point to the correct keys in the data objects.
- Version mismatch: confirm `@syncfusion/ej2-vue-charts` is compatible with Vue 2 in the project.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/tooltip-cs1" %}

## See also

* [Getting Started with Vue 3 Bullet Chart](vue-3-getting-started)
* [Getting Started with Vue 3 using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue 3 using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)