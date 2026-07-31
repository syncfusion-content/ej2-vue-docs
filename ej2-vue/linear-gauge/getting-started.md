---
layout: post
title: Getting Started with the Vue Linear Gauge in Vue 2 | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion Vue Linear Gauge component with a working example.
control: Getting started
platform: ej2-vue
documentation: ug
framework-version: 2
domainurl: ##DomainURL##
---

# Getting Started with the Vue Linear Gauge Component in Vue 2

This article provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup>®</sup> Vue Linear Gauge component.

> **Note:** This guide covers Vue 2. Vue CLI is in maintenance mode, so use package and Node.js versions that remain compatible with the Vue 2 project.

The Linear Gauge visualizes numeric values along a linear scale. It can be configured as a thermometer, pressure gauge, ruler, or other horizontal or vertical indicator by customizing axes, pointers, ranges, labels, annotations, and tooltips.

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following packages are used by the Vue Linear Gauge package:

```
|-- @syncfusion/ej2-vue-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-pdf-export
```

Use a package release that supports Vue 2. Before upgrading, check the [Vue system requirements](https://ej2.syncfusion.com/vue/documentation/system-requirements) and package release notes.

## Set Up the Vue 2 Project

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

When creating the project, select `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project terminal showing default project setup](images/vue2-terminal.png)

After the project is created, navigate to its directory:

```bash
cd quickstart
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Linear Gauge Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-lineargauge
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-lineargauge
```

> **Note:** npm v5 and later save installed packages to `dependencies` by default, so the `--save` option is not required.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Linear Gauge Component

Follow these steps to add the Vue Linear Gauge component.

**Step 1:** Import and Register the Component

Import and locally register the Linear Gauge component in **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import {
  LinearGaugeComponent
} from '@syncfusion/ej2-vue-lineargauge';

export default {
  name: 'App',
  components: {
    'ejs-lineargauge': LinearGaugeComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Linear Gauge in the Template

Add the Linear Gauge to the `template` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-lineargauge></ejs-lineargauge>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps. Replace the contents of **src/App.vue** with the following Vue 2 example:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/linear-gauge/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the Project

Save **src/App.vue**, and then start the development server.

**npm**

```bash
npm run serve
```

**yarn**

```bash
yarn run serve
```

Open the URL displayed in the terminal, commonly `http://localhost:8080`, and verify that the Linear Gauge is displayed correctly.

{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs34" %}

## Module Injection

The Linear Gauge uses optional feature modules for functionality such as annotations and tooltips. If a required module is not provided, the related feature is not rendered.

The following modules are commonly used:

- `Annotations` enables annotations.
- `GaugeTooltip` enables tooltips.

Register the modules inside the component's `export default` object:

```html
<script>
import {
  LinearGaugeComponent,
  Annotations,
  GaugeTooltip
} from '@syncfusion/ej2-vue-lineargauge';

export default {
  components: {
    'ejs-lineargauge': LinearGaugeComponent
  },
  provide: {
    lineargauge: [Annotations, GaugeTooltip]
  }
};
</script>
```

Register only the modules required by the application. Refer to the [Linear Gauge annotations documentation](https://ej2.syncfusion.com/vue/documentation/linear-gauge/annotations) and [Linear Gauge API documentation](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge) for the configuration and directives used by additional features.

## Troubleshooting

- **The Linear Gauge is not rendered.** Verify that the component and all child directives are imported and registered correctly, and check the browser console for component, package, or licensing errors.
- **A module-not-found error occurs.** Ensure that the required Linear Gauge package is installed, and then restart the development server.
- **A package or Vue version error occurs.** Confirm that the installed package release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue Linear Gauge API documentation](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge).

## See Also

- [Vue Linear Gauge overview](https://www.syncfusion.com/vue-components/vue-linear-gauge)
- [Vue Linear Gauge annotations](https://ej2.syncfusion.com/vue/documentation/linear-gauge/annotations)
- [Vue Linear Gauge Demos](https://ej2.syncfusion.com/vue/demos/#/material3/linear-gauge/default-functionalities.html)
- [Vue Linear Gauge getting-started sample](https://github.com/SyncfusionExamples/getting-started-with-the-vue-linear-gauge-component)