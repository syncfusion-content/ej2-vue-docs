---
layout: post
title: Getting Started with the Vue Smith Chart Component | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion Essential JS 2 Vue Smith Chart with module registration, and data binding.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Smith Chart Component in Vue 2

This article provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup>®</sup> Vue Smith Chart component.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

> **Note:** Vue CLI is in maintenance mode. This guide uses Vue CLI because it describes integration with a Vue 2 application.

## Dependencies

The following are the minimum dependencies required to use the Vue Smith Chart component:

```
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

Only the `@syncfusion/ej2-vue-charts` package must be installed directly. Its required dependencies are installed automatically.

Use a package release that supports Vue 2. Before upgrading, check the [Vue system requirements](https://ej2.syncfusion.com/vue/documentation/system-requirements) and the package release notes.

## Setting Up the Vue 2 Project

Install Vue CLI globally using either npm or yarn, and create a project with the [`vue create`](https://cli.vuejs.org/#getting-started) command.

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

When creating the project, select `Default ([Vue 2] babel, eslint)` from the menu. If this preset is unavailable, select the manual configuration option and choose Vue 2 when prompted for the Vue version.

![Vue 2 project](./images/vue2-terminal.png)

After the project is created, navigate to its directory:

```bash
cd quickstart
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Package

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are available on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the `@syncfusion/ej2-vue-charts` package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-charts
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-charts
```

> **Note:** npm v5 and later save installed packages to `dependencies` by default, so the `--save` option is not required.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Smith Chart Component

Follow these steps to add the Vue Smith Chart component.

**Step 1:** Import and locally register the Smith Chart component in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { SmithchartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-smithchart': SmithchartComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Smith Chart component in the `template` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-smithchart id="smithchart"></ejs-smithchart>
</template>

{% endhighlight %}
{% endtabs %}

At this stage, the component is registered, but no plotted data is displayed until a series is configured.

The following is the complete code for the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}

## Run the Project

Save **src/App.vue**, and then start the development server using either npm or yarn.

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

Open the local URL displayed in the terminal, commonly `http://localhost:8080`, and verify that the Smith Chart displays with the transmission-line series.

## Module Registration

The Smith Chart component uses feature-specific modules. Register only the modules required by the application with the component's `provide` option.

The following optional modules are used in this guide:

- `SmithchartLegend` enables the legend.
- `TooltipRender` enables series tooltips.

```javascript
import {
  SmithchartComponent,
  SmithchartLegend,
  TooltipRender
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-smithchart': SmithchartComponent
  },
  provide: {
    smithchart: [SmithchartLegend, TooltipRender]
  }
};
```

Register `SmithchartLegend` only when the legend is enabled. Register `TooltipRender` only when series tooltips are enabled.


## Add a Series to the Smith Chart

Import and register `SeriesCollectionDirective` and `SeriesDirective` to declare series in the Vue template.

A Smith Chart series can be populated using either [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#datasource) or [`points`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#points).

When `dataSource` is used, map the source fields with the series [`resistance`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#resistance) and [`reactance`](https://ej2.syncfusion.com/vue/documentation/api/smithchart/smithchartseriesmodel#reactance) properties. Each data object must contain numeric fields mapped by `resistance` and `reactance`.

Alternatively, assign an array of resistance and reactance objects directly to the series `points` property:

Use either `dataSource` with field mappings or `points` for a series according to the application's data model.

Replace the contents of **src/App.vue** with the following complete example:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/smithchart/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

## Troubleshooting

- **The Smith Chart is not rendered.** Verify that `SmithchartComponent` is imported and registered, the component has valid width and height values, and the browser console contains no component, data, or licensing errors.
- **The series is not displayed.** Verify that `SeriesCollectionDirective` and `SeriesDirective` are imported and registered and that the series is declared inside `e-series-collection`.
- **No data is displayed.** Verify that `dataSource` contains records, the `resistance` and `reactance` properties match fields in every data object, and both mapped fields contain numeric values.
- **The tooltip is not displayed.** Set `tooltip.visible` to `true`, bind the tooltip object to the series, and register `TooltipRender` with the exact `smithchart` key.
- **A package or Vue version error occurs.** Confirm that the installed `@syncfusion/ej2-vue-charts` release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue Smith Chart API documentation](https://ej2.syncfusion.com/vue/documentation/api/smithchart).

## See Also

- [Vue Smith Chart overview](https://www.syncfusion.com/vue-components/vue-smith-chart)
- [Vue Smith Chart series](https://ej2.syncfusion.com/vue/documentation/smithchart/smithchart-series)
- [Vue Smith Chart examples](https://ej2.syncfusion.com/vue/demos/#/material3/smith-chart/default.html)
- [Getting Started with Vue 3 using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue 3 using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
