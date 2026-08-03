---
layout: post
title: Getting Started with Vue Sankey Chart Component | Syncfusion
description: Quick guide to create a Vue 2 project and integrate the Syncfusion Vue Sankey Chart component; includes setup, module registration, data binding, and examples.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---


# Getting Started with Vue Sankey Chart Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Sankey chart component.

## Prerequisites

Ensure your development environment meets the following requirements as listed in [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)


## Dependencies

The Vue Sankey component is available in the `@syncfusion/ej2-vue-charts` package. The following dependencies are used by the package:

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

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Terminal showing Vue CLI creating a Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, navigate to the project directory:

```bash
cd quickstart
```

Now, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> packages to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the `Vue Sankey Chart component` as an example. Install the `@syncfusion/ej2-vue-charts` package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-charts
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-charts
```

> **Note:** npm v5+ saves packages to `dependencies` by default; `--save` is not required.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Component

Follow the steps below to add the Sankey Chart component:

**Step 1:** Import and register the Sankey Chart component and its child directives in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { SankeyComponent, SankeyNodesCollectionDirective, SankeyNodeDirective, SankeyLinksCollectionDirective, SankeyLinkDirective } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    "ejs-sankey": SankeyComponent,
    "e-sankey-nodes-collection": SankeyNodesCollectionDirective,
    "e-sankey-node": SankeyNodeDirective,
    "e-sankey-links-collection": SankeyLinksCollectionDirective,
    "e-sankey-link": SankeyLinkDirective
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** In the `template` section, define the Sankey Chart component with nodes and links:

This section explains how to bind JSON data to the Sankey Chart. The data structure requires three properties:

- **sourceId** — The starting node name for the link
- **targetId** — The ending node name for the link
- **value** — The value that determines the width of the link

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div class="control-pane">
    <div class="control-section"  id="sankey-container">
      <ejs-sankey width="90%" height="420px">
        <e-sankey-nodes-collection>
          <e-sankey-node id="Energy Input" :label="{ text: 'Energy Input' }" />
          <e-sankey-node id="Generation" :label="{ text: 'Generation' }" />
          <e-sankey-node id="Distribution" :label="{ text: 'Distribution' }" />
          <e-sankey-node id="Consumption" :label="{ text: 'Consumption' }" />
        </e-sankey-nodes-collection>
        <e-sankey-links-collection>
          <e-sankey-link sourceId="Energy Input" targetId="Generation" :value="500" />
          <e-sankey-link sourceId="Generation" targetId="Distribution" :value="450" />
          <e-sankey-link sourceId="Distribution" targetId="Consumption" :value="400" />
        </e-sankey-links-collection>
      </ejs-sankey>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sankey/getting-started/data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the Project

To run the project, use either npm or Yarn:

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

Open your browser and navigate to `http://localhost:8080` to view the Sankey Chart.

{% previewsample "page.domainurl/code-snippet/sankey/getting-started/data-cs1" %}

## Module Registration

The Sankey Chart component is organized into feature-specific modules. In Vue, enable a feature by registering its module(s) in the component's `provide` option. The following features are demonstrated in the examples:

* `SankeyLegend` — Module for legend support.
* `SankeyTooltip` — Module for tooltip support.

The sample code below shows how to register the required modules in the component `provide` option:

```javascript
import {
  SankeyComponent,
  SankeyLegend,
  SankeyTooltip
} from '@syncfusion/ej2-vue-charts';

export default {
  components: { 'ejs-sankey': SankeyComponent },
  provide: {
    sankey: [
      SankeyLegend,
      SankeyTooltip,
    ]
  }
};
```
The Sankey Chart component supports optional feature modules. Register these modules only when the corresponding features are used.

## Troubleshooting

The following are common issues and solutions when integrating the Sankey Chart component:

- **Chart not rendering**: Ensure that `SankeyComponent` and the required child directives are imported and registered. Verify that the nodes and links are configured with matching `id`, `sourceId`, and `targetId` values.

- **Module import errors**: Confirm that all required modules are imported from `@syncfusion/ej2-vue-charts` and that the component is registered correctly using the corresponding component-name directive.

- **Data not displaying**: Verify that each link object or directive has valid `sourceId`, `targetId`, and `value` properties. Ensure that every `sourceId` and `targetId` matches an existing node `id`.

- **Version mismatch**: Confirm that the `@syncfusion/ej2-vue-charts` package version is compatible with Vue 2.6+ used in your project. Install the latest compatible version if needed.

- **Tooltip not showing**: If the tooltip feature is enabled but not displaying, verify that `SankeyTooltip` is registered in the `provide` option and the `tooltip` object has `enable: true`.