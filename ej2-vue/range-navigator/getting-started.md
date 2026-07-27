---
layout: post
title: Getting Started with Vue Range Navigator Component | Syncfusion
description: Set up a Vue 2 app and integrate the Syncfusion EJ2 Vue Range Navigator with setup steps, module registration, data binding and a full working example.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Range Navigator Component in Vue 2

This section provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Range Navigator component. It helps users quickly configure a project and render a Range Navigator.

## Prerequisites

Ensure that the development environment meets the requirements listed in [System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following are the minimum dependencies required to use the Vue Range Navigator component:

```
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
```

Only the `@syncfusion/ej2-vue-charts` package must be installed directly. Its required dependencies are installed automatically.

## Setting Up the Vue 2 Project

Install Vue CLI globally using either npm or yarn, and create a project with the [`vue create`](https://cli.vuejs.org/) command.

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

When creating the project, select `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

After the project is created, navigate to its directory:

```bash
cd quickstart
```

## Add the Syncfusion Vue Package

Syncfusion Vue packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue).

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

## Add the Syncfusion Vue Range Navigator Component

Follow these steps to add the Vue Range Navigator component.

**Step 1:** Import and register the Range Navigator component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { RangeNavigatorComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-rangenavigator': RangeNavigatorComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Range Navigator component in the `template` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-rangenavigator></ejs-rangenavigator>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

The following is the complete code for the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs9/app.vue %}
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

Open the local URL displayed in the terminal (for example, `http://localhost:8080`), in a browser. At this stage, the application renders an empty Range Navigator because no series or data has been configured.

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs9" %}

## Module Injection

The Range Navigator component is divided into feature-specific modules. Register the modules required by the application using the component's `provide` option.

The following modules are used in this guide:

- `AreaSeries` enables the area series type.
- `DateTime` enables date-time values on the horizontal axis.
- `RangeTooltip` enables tooltip support.

Register the modules in the component's `provide` option:

```html
<script>
import {
  RangeNavigatorComponent,
  AreaSeries,
  DateTime,
  RangeTooltip
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-rangenavigator': RangeNavigatorComponent
  },
  provide: {
    rangeNavigator: [AreaSeries, DateTime, RangeTooltip]
  }
};
</script>
```

Register `AreaSeries` only when an area series is used. Register `DateTime` when the Range Navigator's `valueType` is set to `DateTime`. Register `RangeTooltip` when the tooltip is enabled.

> **Note:** Register only the modules used by the application to keep the bundle size smaller.

## Populate the Range Navigator with Data

The Range Navigator series uses the following properties to bind data:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#datasource) specifies the array of data objects.
- [`xName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#xname) maps the horizontal-axis field.
- [`yName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#yname) maps the numeric value field.
- [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#type) specifies the series type.
- [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorModel#valuetype) specifies the type of values used on the horizontal axis.

When the data contains JavaScript `Date` values, set `valueType` to `DateTime` and register the `DateTime` module.

Import and register `RangenavigatorSeriesCollectionDirective` and `RangenavigatorSeriesDirective` to declare the series in the Vue template.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs10" %}

Each data object must contain the fields assigned to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#yname). For a date-time axis, the field assigned to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#xname) must contain a valid JavaScript `Date` value. The field assigned to [`yName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#yname) must contain a numeric value.

## Troubleshooting

- **The Range Navigator is not rendered.** Verify that `RangeNavigatorComponent`, the series collection, and the series directives are imported and registered. Also, ensure that the component has a valid width and height, and check the browser console for component or data errors.

- **The series type is not registered.** Import the module required by the configured series type and add it to the `rangeNavigator` array in the `provide` option. When `type` is set to `Area`, register the `AreaSeries` module.

- **No data is displayed.** Verify that [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#datasource) contains data, [`xName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#xname) match the fields in each data object, and the field assigned to `yName` contains numeric values. When [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorModel#valuetype) is set to `DateTime`, provide valid JavaScript `Date` objects.

- **Date-time values are not displayed correctly.** Set the Range Navigator's `valueType` property to `DateTime`, import and register the `DateTime` module, and ensure that the data contains valid JavaScript `Date` objects.

- **The tooltip is not displayed.** Import and register the `RangeTooltip` module, bind the tooltip object using `:tooltip="tooltip"`, and set `tooltip.enable` to `true`.

## See Also

* [Getting Started with Vue 3 Range Navigator](vue-3-getting-started)
* [Getting Started with Vue 3 using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue 3 using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)