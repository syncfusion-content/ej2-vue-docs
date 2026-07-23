---
layout: post
title: Getting Started with the Vue Sparkline Component | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion Essential JS 2 Vue Sparkline component with component registration, and data binding.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Sparkline Component in Vue 2

This article provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup>®</sup> Vue Sparkline component.

To get started quickly with Vue Sparkline, watch this video:

{% youtube "https://www.youtube.com/watch?v=XdDcvJ0ZJrE" %}

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

> **Note:** Vue CLI is in maintenance mode. This guide uses Vue CLI because it describes integration with a Vue 2 application.

## Dependencies

The following are the minimum dependencies required to use the Vue Sparkline component:

```
|-- @syncfusion/ej2-vue-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-sparkline
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

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Sparkline Component

Follow these steps to add the Vue Sparkline component.

**Step 1:** Import and locally register the Sparkline component in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { SparklineComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-sparkline': SparklineComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Sparkline component in the `template` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-sparkline id="sparkline"></ejs-sparkline>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

At this stage, the component is registered, but no visible Sparkline series is rendered until a data source is configured.

## Bind a Data Source to the Sparkline

The Sparkline component uses the following properties to bind object data:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index#datasource) specifies an array of data objects or a `DataManager` instance.
- [`xName`](https://ej2.syncfusion.com/vue/documentation/api/sparkline#xname) maps the horizontal-value field.
- [`yName`](https://ej2.syncfusion.com/vue/documentation/api/sparkline#yname) maps the numeric-value field.
- [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/sparkline#valuetype) specifies how x-values are interpreted.

When the x-values are category strings, set `valueType` to `Category`. Each data object must contain the fields assigned to `xName` and `yName`, and the field assigned to `yName` must contain a numeric value.

```html
<ejs-sparkline
  :dataSource="dataSource"
  xName="day"
  yName="value"
  valueType="Category"
></ejs-sparkline>
```

```javascript
data() {
  return {
    dataSource: [
      { day: 'Mon', value: 3 },
      { day: 'Tue', value: 5 },
      { day: 'Wed', value: 2 },
      { day: 'Thu', value: 4 },
      { day: 'Fri', value: 6 }
    ]
  };
}
```
The following is the complete code for the **src/App.vue** file. Replace the contents of **src/App.vue** with the following complete example:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/sparkline/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs14" %}

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

Open the local URL displayed in the terminal, commonly `http://localhost:8080`, and verify that an area Sparkline displays.

## Module Injection

The Sparkline component is split into feature modules. To enable a feature, import its module and provide it to the component using the `provide` option.

Tooltip support is provided by the optional `SparklineTooltip` module. Register it with the component's `provide` option only when tooltips are enabled.

```javascript
import {
  SparklineComponent,
  SparklineTooltip
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-sparkline': SparklineComponent
  },
  provide: {
    sparkline: [SparklineTooltip]
  }
};
```

## Troubleshooting

- **The Sparkline is not rendered.** Verify that `SparklineComponent` is imported and registered, the component has valid width and height values, and the browser console contains no component, data, or licensing errors.
- **No data is displayed.** Verify that `dataSource` contains records, `xName` and `yName` match fields in every data object, and the field mapped by `yName` contains numeric values.
- **Category values are not interpreted correctly.** Set `valueType` to `Category` when the field mapped by `xName` contains category strings.
- **The tooltip is not displayed.** Set `tooltipSettings.visible` to `true`, bind the settings object with `:tooltipSettings="tooltipSettings"`, and register `SparklineTooltip` with the exact `sparkline` key.
- **A package or Vue version error occurs.** Confirm that the installed `@syncfusion/ej2-vue-charts` release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue Sparkline API documentation](https://ej2.syncfusion.com/vue/documentation/api/sparkline/index).

## See Also

- [Getting Started with the Vue Sparkline Chart video](https://www.youtube.com/watch?v=XdDcvJ0ZJrE)
- [Vue Sparkline user interaction](https://ej2.syncfusion.com/vue/documentation/sparkline/user-interaction)
- [Vue Sparkline examples](https://ej2.syncfusion.com/vue/demos/#/material3/sparkline/default.html)
- [Vue Sparkline getting-started sample](https://github.com/SyncfusionExamples/getting-started-with-the-vue-sparkline-chart-component)
- [Getting Started with the Vue 3 Sparkline Component](vue-3-getting-started)
- [Getting Started with Vue 3 using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue 3 using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
