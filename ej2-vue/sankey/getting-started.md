---
layout: post
title: Getting started with Vue Sankey Chart component | Syncfusion
description:  Quickstart: create a Vue 2 project and add the Syncfusion Vue Sankey Chart (Essential JS 2); includes setup, module registration, and examples.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: https://ej2.syncfusion.com
---


# Getting started with Vue Sankey chart component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Sankey chart component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)


## Dependencies

Below is the list of minimum dependencies required to use the Sankey Chart component.

```

|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base

```

## Setting up the Vue 2 project

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

This article uses the `Vue Sankey Chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package by running:

```bash
npm install @syncfusion/ej2-vue-charts
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> Note: npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Sankey Chart component:

1. First, import and register the Sankey Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}


<template>
  <div id="app">
    <ejs-sankey id="container"></ejs-sankey>
  </div>
</template>

<script>
import {
  SankeyComponent
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-sankey': SankeyComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the Sankey Chart component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-sankey id="container"></ejs-sankey>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/app.vue %}
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

{% previewsample "page.domainurl/code-snippet/sankey/getting-started/initialize-cs1" %}

## Module registration

The Sankey Chart component is organized into feature-specific modules. In Vue, enable a feature by registering its module(s) in the component's `provide` option. The following features are demonstrated in the examples:

* `SankeyLegend` — Module for legend support.
* `SankeyTooltip` — Module for tooltip support.
* `SankeyDataLabel` — Module for data labels.

The sample code below shows how to register the required modules in the component `provide` option:

```javascript
import {
  SankeyComponent,
  SankeyLegend,
  SankeyTooltip, SankeyDataLabel
} from '@syncfusion/ej2-vue-charts';

export default {
  components: { 'ejs-sankey': SankeyComponent },
  provide: {
    sankey: [
      SankeyLegend,
      SankeyTooltip,
      SankeyDataLabel
    ]
  }
};
```

## Populate Sankey chart with data


This section explains how to plot below JSON data to the Sankey Chart.

```javascript
export default {
  data () {
    return {
      sankeyLinks: [
        { source: 'A', target: 'B', weight: 5 },
        { source: 'A', target: 'C', weight: 3 },
        { source: 'B', target: 'D', weight: 2 },
        { source: 'C', target: 'D', weight: 4 }
      ],
    };
  }
};
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/getting-started/data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/getting-started/data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/sankey/getting-started/data-cs1" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`] property as true in [`tooltip`] object and by injecting `SankeyTooltip` into the `provide`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/getting-started/tooltip-cs1" %}

## Verify the chart

After starting the dev server, confirm the Sankey Chart renders correctly:

- Start the dev server with `npm run serve` or `yarn run serve`.
- Open the project URL shown in the terminal (typically `http://localhost:8080`) and verify the chart displays.
- If the chart does not render, inspect the browser console for errors related to missing modules, incorrect imports, or undefined data values.

## Troubleshooting (common issues)

- Chart not rendering: ensure the Sankey modules and directives are registered in `provide` and that `sankeyLinks` contains valid data.
- Version mismatch: confirm `@syncfusion/ej2-vue-charts` is compatible with Vue 2 used in the project.

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```