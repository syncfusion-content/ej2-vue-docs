---
layout: post
title: Getting Started with Vue TreeMap | Syncfusion
description: Set up a Vue 2 application and integrate the Syncfusion Vue TreeMap component with data binding, and a working example.
control: TreeMap
platform: ej2-vue
documentation: ug
framework-version: 2
domainurl: ##DomainURL##
---

# Getting Started with Vue TreeMap

This article provides a step-by-step guide to creating a Vue 2 application using [Vue CLI](https://cli.vuejs.org#) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeMap component.

You can explore some useful features of the TreeMap component in the following video.

{% youtube "https://www.youtube.com/watch?v=fFSUhC9SAoQ" %}

## Prerequisites

Ensure that the development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Dependencies

The following packages are used by the Vue TreeMap package:

```
|-- @syncfusion/ej2-vue-treemap
    |-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-vue-base
```

Only the `@syncfusion/ej2-vue-treemap` package must be installed directly. Its required dependencies are installed automatically.

Use a package release that supports Vue 2. Before upgrading, check the [Vue system requirements](https://ej2.syncfusion.com/vue/documentation/system-requirements) and package release notes.

> **Note:** The TreeMap renders its visualization with SVG. This basic example does not require a separate TreeMap theme stylesheet.

## Set Up the Vue 2 Project

Install Vue CLI globally using either npm or yarn, and create a project with the [`vue create`](https://cli.vuejs.org#getting-started) command.

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

![Vue 2 project](./images/vue2-terminal.png)

After the project is created, navigate to its directory:

```bash
cd quickstart
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeMap Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on [npm](https://www.npmjs.com/search?q=ej2-vue).

Install the `@syncfusion/ej2-vue-treemap` package using either npm or yarn.

**npm**

```bash
npm install @syncfusion/ej2-vue-treemap
```

**yarn**

```bash
yarn add @syncfusion/ej2-vue-treemap
```

> **Note:** npm v5 and later save installed packages to `dependencies` by default, so the `--save` option is not required.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeMap Component

Follow these steps to initialize an empty Vue TreeMap component. Data binding is added in the next section.

**Step 1:** Import and locally register the TreeMap component in the `script` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TreeMapComponent } from '@syncfusion/ej2-vue-treemap';

export default {
  name: 'App',
  components: {
    'ejs-treemap': TreeMapComponent
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Step 2:** Add an empty TreeMap component to the `template` section of **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-treemap id="treemap"></ejs-treemap>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

At this stage, the component contains no data and does not display TreeMap items.

**Step 3:** Bind Data to TreeMap

The example uses the following properties:

- [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treemap/index-default#datasource) specifies the array of data objects.
- [`weightValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/index-default#weightvaluepath) specifies the numeric field that determines each rectangle's size.
- [`leafItemSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/index-default#leafitemsettings) configures leaf labels and appearance.
- [`labelPath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafitemsettingsmodel#labelpath) specifies the data field displayed as the leaf label.

Replace the contents of **src/App.vue** with the below example.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs15/app.vue %}
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

Open the URL displayed in the terminal, commonly `http://localhost:8080`, and verify that the TreeMap is displayed correctly.

{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs15" %}

## Register Feature Modules

The TreeMap loads optional features through feature-specific modules. If a required module is not registered, the related feature is not rendered.

The following modules are commonly used:

- `TreeMapHighlight` enables highlighting.
- `TreeMapSelection` enables selection.
- `TreeMapLegend` enables the legend.
- `TreeMapTooltip` enables tooltips.

Register only the modules required by the application inside the component's `export default` object, using the exact `treemap` key:

```html
<script>
import { TreeMapComponent, TreeMapHighlight, TreeMapSelection, TreeMapLegend, TreeMapTooltip } from '@syncfusion/ej2-vue-treemap';

export default {
  components: {
    'ejs-treemap': TreeMapComponent
  },
  provide: {
    treemap: [TreeMapHighlight, TreeMapSelection, TreeMapLegend, TreeMapTooltip]
  }
};
</script>
```

Refer to the [TreeMap API documentation](https://ej2.syncfusion.com/vue/documentation/api/treemap) and the related feature pages for configuration details.

> **Sample:** Explore the [Vue TreeMap getting-started sample](https://github.com/SyncfusionExamples/getting-started-with-the-vue-treemap-component).

## Troubleshooting

- **The TreeMap is not rendered.** Verify that `TreeMapComponent` is imported and registered, the data source contains records, and the browser console contains no component, package, or licensing errors.
- **The TreeMap is blank.** Verify that `weightValuePath` matches a numeric field in every data object.
- **Labels are not displayed.** Verify that `leafItemSettings.labelPath` matches a field in every data object.
- **A module-not-found error occurs.** Verify that `@syncfusion/ej2-vue-treemap` is installed and restart the development server.
- **A package or Vue version error occurs.** Confirm that the installed package release supports Vue 2 and that all Syncfusion packages use compatible versions.

For additional assistance, refer to the [Vue TreeMap API documentation](https://ej2.syncfusion.com/vue/documentation/api/treemap).

## See Also

- [Vue TreeMap color mapping](https://ej2.syncfusion.com/vue/documentation/treemap/color-mapping)
- [Vue TreeMap legend](https://ej2.syncfusion.com/vue/documentation/treemap/legend)
- [Vue TreeMap Demos](https://ej2.syncfusion.com/vue/demos/#/material3/treemap/default.html)
- [Getting Started with Vue 3 using the Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
- [Getting Started with Vue 3 using the Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)
