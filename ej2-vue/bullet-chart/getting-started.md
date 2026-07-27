---
layout: post
title: Getting Started with the Vue Bullet Chart Component | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion Essential JS 2 Vue Bullet Chart component with module registration, and data binding.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Bullet Chart Component in Vue 2

This article provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Bullet Chart component.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

> **Note:** Vue CLI is in maintenance mode. This guide uses Vue CLI because it describes integration with a Vue 2 application.

## Dependencies

The following are the minimum dependencies required to use the Vue Bullet Chart component:

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

Syncfusion Vue packages are available on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the `@syncfusion/ej2-vue-charts` package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-charts --save
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-charts
```

> **Note:** npm v5 and later save installed packages to `dependencies` by default, so the `--save` option is not required.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Bullet Chart Component

Follow these steps to add the Vue Bullet Chart component.

**Step 1:** Import and locally register the Bullet Chart component in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Bullet Chart component in the `template` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-bulletchart id="bulletChart"></ejs-bulletchart>
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

Open the local URL displayed in the terminal, commonly `http://localhost:8080`, and verify that the Bullet Chart displays.

{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/initialize-cs1" %}

## Module Registration

The Bullet Chart component uses feature-specific modules. Register only the modules required by the application with the component's `provide` option.

This guide uses `BulletTooltip`, which enables tooltip support.

```javascript
import {
  BulletChartComponent,
  BulletTooltip
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent
  },
  provide: {
    bulletChart: [BulletTooltip]
  }
};
```

Register `BulletTooltip` only when the tooltip is enabled.

> **Note:** The module injection key must be `bulletChart`.

## Populate the Bullet Chart with Data

The Bullet Chart uses the following properties to bind data:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#datasource) specifies the array of data objects.
- [`valueField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#valuefield) maps the feature-measure field.
- [`targetField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#targetfield) maps the comparative-target field.
- [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#minimum) specifies the minimum value of the quantitative scale.
- [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#maximum) specifies the maximum value of the quantitative scale.
- [`interval`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart#interval) specifies the interval between scale labels.

Each data object must contain the fields assigned to `valueField` and `targetField`. Those fields must contain numeric values.

The following template binds the `value` and `target` fields and configures a scale that contains both values:

```html
<ejs-bulletchart
  :dataSource="data"
  valueField="value"
  targetField="target"
  :minimum="minimum"
  :maximum="maximum"
  :interval="interval"
></ejs-bulletchart>
```

```javascript
data() {
  return {
    data: [
      { value: 75, target: 85 }
    ],
    minimum: 0,
    maximum: 100,
    interval: 20
  };
}
```
{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/datasource-cs1" %}

## Troubleshooting

- **The Bullet Chart is not rendered.** Verify that `BulletChartComponent` is imported and registered, the chart has a valid size, and the browser console contains no component, data, or licensing errors.
- **No feature measure or target is displayed.** Verify that `dataSource` contains records, `valueField` and `targetField` match fields in every data object, and the mapped fields contain numeric values.
- **The scale does not contain the measure or target.** Set `minimum` and `maximum` so that both mapped values fall within the quantitative scale.
- **A package or Vue version error occurs.** Confirm that the installed `@syncfusion/ej2-vue-charts` release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue Bullet Chart API documentation](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart).

## See Also

- [Vue Bullet Chart overview](https://www.syncfusion.com/vue-components/vue-bullet-chart)
- [Vue Bullet Chart examples](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/bullet-chart/default.html)
- [Vue Bullet Chart customization](https://ej2.syncfusion.com/vue/documentation/bullet-chart/customization)
- [Vue Bullet Chart getting-started sample](https://github.com/SyncfusionExamples/getting-started-with-the-vue-bullet-chart-component)
- [Getting Started with the Vue 3 Bullet Chart](vue-3-getting-started)
- [Getting Started with Vue 3 using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue 3 using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)