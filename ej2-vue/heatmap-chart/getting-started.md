---
layout: post
title: Getting Started with the Vue HeatMap Component in Vue 2 | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion Vue HeatMap Component with data binding and module registration.
control: HeatMap
platform: ej2-vue
documentation: ug
framework-version: 2
domainurl: ##DomainURL##
---

# Getting Started with the Vue HeatMap Component in Vue 2

This article provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue HeatMap component.

> **Note:** This guide covers Vue 2. Vue CLI is in maintenance mode, so use Node.js, Vue CLI, and Syncfusion package releases that remain compatible with the Vue 2 project.

The HeatMap represents two-dimensional data through color variations. Each matrix value is rendered as a cell whose color indicates its magnitude. The component supports SVG and canvas rendering, categorical and numerical axes, legends, data labels, custom palettes, and tooltips.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following packages are used by the Vue HeatMap package:

```
|-- @syncfusion/ej2-vue-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
```

Only `@syncfusion/ej2-vue-heatmap` must be installed directly. Its required dependencies are installed automatically. Use a release that supports Vue 2 and the selected Node.js version.

## Set Up the Vue 2 Project

Install Vue CLI and create a Vue 2 project.

**npm**

```bash
npm install -g @vue/cli
vue create quickstart
```

**yarn**

```bash
yarn global add @vue/cli
vue create quickstart
```

When prompted, select the `Default ([Vue 2] babel, eslint)` option from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Navigate to the project:

```bash
cd quickstart
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue HeatMap Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-heatmap
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-heatmap
```

> **Note:** npm v5 and later save installed packages to `dependencies` automatically.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue HeatMap Component

Initialize an empty HeatMap first. Data binding is added in the next section.

**Step 1:** Import and register the component in **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { HeatMapComponent } from '@syncfusion/ej2-vue-heatmap';

export default {
  name: 'App',
  components: {
    'ejs-heatmap': HeatMapComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Add an empty HeatMap to the template.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-heatmap id="heatmap"></ejs-heatmap>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

At this stage, no cells are displayed because no data has been bound.

## Populate the HeatMap with Data

Bind a two-dimensional numeric array to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/heatmap#datasource). Each value represents one cell and determines its color.

```javascript
dataSource: [
  [73, 39, 26, 39, 94, 0],
  [93, 58, 53, 38, 26, 68],
  [99, 28, 22, 4, 66, 90],
  [14, 26, 97, 69, 69, 3],
  [7, 46, 47, 47, 88, 6],
  [41, 55, 73, 23, 3, 79],
  [56, 69, 21, 86, 3, 33],
  [45, 7, 53, 81, 95, 79],
  [60, 77, 74, 68, 88, 51],
  [25, 25, 10, 12, 78, 14],
  [25, 56, 55, 58, 12, 82],
  [74, 33, 88, 23, 86, 59]
]
```

Bind it in the template:

```html
<ejs-heatmap :dataSource="dataSource"></ejs-heatmap>
```

Here is the complete code for the above steps. Replace **src/App.vue** with the following complete example:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/heatmap-chart/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the Project

To run the project, use either npm or yarn:

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

- Open the project URL shown in the terminal (usually `http://localhost:8080`) and verify the HeatMap displays with data.

{% previewsample "page.domainurl/code-snippet/heatmap-chart/getting-started-cs8" %}

## Module Registration

Optional features require feature modules. Register only the modules used by the application with the exact `heatmap` key.

- `Legend` enables the legend.
- `Tooltip` enables tooltips.

```html
<script>
import { HeatMapComponent, Legend, Tooltip } from '@syncfusion/ej2-vue-heatmap';

export default {
  components: {
    'ejs-heatmap': HeatMapComponent
  },
  provide: {
    heatmap: [Legend, Tooltip]
  }
};
</script>
```

Registration makes a feature available. The related properties must also be configured.

## Troubleshooting

- **The HeatMap is not rendered.** Verify that `HeatMapComponent` is imported and registered and that the browser console contains no component, package, or licensing errors.
- **The HeatMap is blank.** Verify that `dataSource` is a nonempty two-dimensional array containing numeric values.
- **A module-not-found error occurs.** Verify that `@syncfusion/ej2-vue-heatmap` is installed and restart the development server.
- **A package or Vue version error occurs.** Confirm that the package release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue HeatMap API documentation](https://ej2.syncfusion.com/vue/documentation/api/heatmap).

## See Also

- [Vue HeatMap overview](https://www.syncfusion.com/vue-components/vue-heatmap-chart)
- [Vue HeatMap axis](https://ej2.syncfusion.com/vue/documentation/heatmap-chart/axis)
- [Vue HeatMap legend](https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend)
- [Vue HeatMap palette](https://ej2.syncfusion.com/vue/documentation/heatmap-chart/palette)
- [Vue HeatMap tooltip](https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip)
- [Vue HeatMap Demos](https://ej2.syncfusion.com/vue/demos/#/material3/heatmap/default-functionalities.html)