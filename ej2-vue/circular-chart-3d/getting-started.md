 ---
layout: post
title: Getting Started with the Vue 3D Circular Chart Component | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion EJ2 Vue 3D Circular Chart with project setup, module registration, and data binding.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue 3D Circular Chart Component in Vue 2

This section provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue 3D Circular Chart component.

To get started quickly with 3D Circular Charts, watch the following introduction video:

{% youtube "https://www.youtube.com/watch?v=hGpINPEOi1E" %}

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

> **Note:** Vue CLI is in maintenance mode. This guide uses Vue CLI because it describes integration with a Vue 2 application.

## Dependencies

The following are the minimum dependencies required to use the Vue 3D Circular Chart component:

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

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue 3D Circular Chart Component

Follow these steps to add the Vue 3D Circular Chart component.

**Step 1:** Import and locally register the 3D Circular Chart component and its series directives in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the 3D Circular Chart component and its series collection in the `template` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-circularchart3d id="container">
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

At this stage, the component and directives are registered, but the chart does not display data until the series data and required feature module are configured.

## Module Registration

The 3D Circular Chart component uses feature-specific modules. Register the modules required by the application with the component's `provide` option.

This guide uses `PieSeries3D`, which renders 3D pie and doughnut series.

```javascript
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  provide: {
    circularchart3d: [PieSeries3D]
  }
};
```

Register `PieSeries3D` when the application uses a 3D pie or doughnut series.

> **Note:** The module injection key must be `circularchart3d`. Register only the modules used by the application to keep the bundle size smaller.

## Populate the 3D Circular Chart with Data

The 3D Circular Chart series uses the following properties to bind data:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/circularchart3d/pieseries3d#datasource) specifies an array of data objects or a `DataManager` instance.
- [`xName`](https://ej2.syncfusion.com/vue/documentation/api/circularchart3d/pieseries3d#xname) maps the category field.
- [`yName`](https://ej2.syncfusion.com/vue/documentation/api/circularchart3d/pieseries3d#yname) maps the numeric value field.
- [`innerRadius`](https://ej2.syncfusion.com/vue/documentation/api/circularchart3d/pieseries3d#innerradius) controls whether the series is displayed as a pie or doughnut. Its default value is `0`.
- [`tilt`](https://ej2.syncfusion.com/vue/documentation/api/circularchart3d/index-default#tilt) defines the slope angle for the Circular 3D Chart.

A 3D pie series is rendered by default when data is assigned to the series and `PieSeries3D` is registered. Set `innerRadius` to a percentage greater than `0` to render a doughnut series.

Each data object must contain the fields assigned to `xName` and `yName`. The field assigned to `yName` must contain a numeric value.

Replace the contents of **src/App.vue** with the following complete example:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-circularchart3d
      id="container"
      title="Fruit Distribution"
      :tilt='tilt'
    >
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series
          :dataSource="seriesData"
          xName="fruit"
          yName="share"
        ></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>

<script>
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D
} from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  provide: {
    circularchart3d: [PieSeries3D]
  },
  data() {
    return {
      seriesData: [
        { fruit: 'Apple', share: 25 },
        { fruit: 'Mango', share: 20 },
        { fruit: 'Orange', share: 18 },
        { fruit: 'Banana', share: 17 },
        { fruit: 'Grapes', share: 20 }
      ],
      tilt: -45
    };
  }
};
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

Open the local URL displayed in the terminal, commonly `http://localhost:8080`, and verify that a 3D pie chart titled **Fruit Distribution** displays five fruit categories.

## Troubleshooting

- **The 3D Circular Chart is not rendered.** Verify that `CircularChart3DComponent`, `CircularChart3DSeriesCollectionDirective`, and `CircularChart3DSeriesDirective` are imported and registered. Check the browser console for component, module, data, or licensing errors.
- **The pie series is not displayed.** Import `PieSeries3D` and add it to the array provided with the exact `circularchart3d` key.
- **No data is displayed.** Verify that `dataSource` contains records, `xName` and `yName` match fields in each data object, and the field mapped by `yName` contains numeric values.
- **A package or Vue version error occurs.** Confirm that the installed `@syncfusion/ej2-vue-charts` release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue 3D Circular Chart API documentation](https://ej2.syncfusion.com/vue/documentation/api/circularchart3d).

## See Also

- [Getting Started with the Vue 3D Circular Charts Component video](https://www.youtube.com/watch?v=hGpINPEOi1E)
- [Vue 3D Circular Chart examples](https://ej2.syncfusion.com/vue/demos/#/material3/three-dimension-circular-chart/pie)
- [Vue 3D Circular Chart overview](https://www.syncfusion.com/vue-components/vue-3d-circular-chart)
- [Getting Started with the Vue 3D Circular Chart Component in Vue 3](vue-3-getting-started)
- [Getting Started with Vue 3 using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue 3 using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
