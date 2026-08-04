---
layout: post
title: Getting Started with Vue 3D Chart Component | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion EJ2 Vue 3D Chart component with module registration, and data binding.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue 3D Chart Component in Vue 2

This section provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue 3D Chart component.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The Vue 3D Chart component is available in the `@syncfusion/ej2-vue-charts` package. The following dependencies are used by the package:

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

![Terminal showing Vue CLI creating a Vue 2 project](../appearance/images/vue2-terminal.png)

After the project is created, navigate to its directory:

```bash
cd quickstart
```

## Add the Syncfusion Vue Package

Syncfusion Vue packages are available on [npm](https://www.npmjs.com/search?q=ej2-vue).

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

## Add the Syncfusion Vue 3D Chart Component

Follow the steps below to add the Vue 3D Chart component:

**Step 1:** Import and register the 3D Chart component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { Chart3DComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** In the `template` section, define the 3D Chart component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-chart3d id="container"> </ejs-chart3d>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the complete code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the Project

Save the changes and start the development server using either npm or yarn.

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

Open the local URL displayed in the terminal, such as `http://localhost:8080`, and verify that the 3D Chart component is rendered.

{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs1" %}

## Module Registration

The 3D Chart component is divided into feature-specific modules. Register the modules required by the application using the component's `provide` option.

The following modules are used in this guide:

- `ColumnSeries3D` enables the 3D column series.
- `Category3D` enables category values on the horizontal axis.
- `DataLabel3D` enables data labels.
- `Tooltip3D` enables tooltips.
- `Legend3D` enables legend

Register `ColumnSeries3D` when the series `type` is `Column`. Register `Category3D` when `primaryXAxis.valueType` is `Category`. Register `DataLabel3D`, `Legend3D` and `Tooltip3D` only when their corresponding features are enabled.

```javascript
import {
  Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective,
  ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D 
} from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D]
  }
};
```

> **Note:** Register only the modules used by the application to keep the bundle size smaller. The `provide` key for the 3D Chart component must be `chart3d`.

## Populate the 3D Chart with Data

The 3D Chart series uses the following properties to bind data:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#datasource) specifies the array of data objects.
- [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#xname) maps the horizontal-axis field.
- [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#yname) maps the numeric value field.
- [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3dseriesmodel#type) specifies the series type.
- [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3daxismodel#valuetype) specifies the type of values used on an axis.

```javascript
export default {
  data() {
    return {
        seriesData: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ]
    };
  }
};
```

Because the `month` field in this example contains category values, set `primaryXAxis.valueType` to `Category` and register the `Category3D` module. The default axis value type is `Numeric`.

The sales values are expressed in thousands. Set `primaryYAxis.labelFormat` to `'${value}K'` to display values with a dollar-sign prefix and a `K` suffix.

Each data object must contain the fields assigned to `xName` and `yName`. The field assigned to `yName` must contain a numeric value.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/chart3d/getting-started/sample-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/getting-started/sample-cs2" %}

## Troubleshooting

- **The 3D Chart is not rendered.** Verify that `Chart3DComponent`, `Chart3DSeriesCollectionDirective`, and `Chart3DSeriesDirective` are imported and registered. Check the browser console for component, module, data, or licensing errors.
- **The column series is not displayed.** Import `ColumnSeries3D` and add it to the `chart3d` array in the `provide` option.
- **Category values are not displayed correctly.** Set `primaryXAxis.valueType` to `Category`, import `Category3D`, and add it to the `chart3d` array.
- **No data is displayed.** Verify that `dataSource` contains data, `xName` and `yName` match the fields in each data object, and the field assigned to `yName` contains numeric values.
- **Module registration is not recognized.** Ensure that the `provide` option uses the exact `chart3d` key.
- **A package or Vue version error occurs.** Confirm that the installed `@syncfusion/ej2-vue-charts` release supports Vue 2 and that all Syncfusion packages use compatible versions.

## See Also

- [Vue 3D Chart API reference](https://ej2.syncfusion.com/vue/documentation/api/chart3d)

> You can refer to our `Vue 3D Charts` feature tour page for its groundbreaking feature representations. You can also explore our [Vue 3D Charts example](https://ej2.syncfusion.com/vue/demos/#/material3/three-dimension-chart/column.html) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.