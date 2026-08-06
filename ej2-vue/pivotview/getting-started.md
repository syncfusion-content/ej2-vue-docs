---
layout: post
title: Getting Started with Vue 2 Pivot Table | Syncfusion
description: Learn how to get started with the Syncfusion Vue 2 Pivot Table control. Set up a Vue-CLI project, install the package, and render your first pivot report.
control: Getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue 2 Pivot Table

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Pivot Table component.

To get started quickly with the Vue [Pivot Table](https://www.syncfusion.com/vue-components/vue-pivot-table), watch this video:

{% youtube "https://www.youtube.com/watch?v=P06XgGUwUFc" %}

## Prerequisites

Ensure your development environment meets the [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install -g @vue/cli
vue create quickstart

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn global add @vue/cli
vue create quickstart

{% endhighlight %}
{% endtabs %}

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../pivotview/images/vue2-terminal.png)

Once the project is created, move into the project folder and start the development server:

{% tabs %}
{% highlight bash tabtitle="npm" %}

cd quickstart
npm run serve

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

cd quickstart
yarn run serve

{% endhighlight %}
{% endtabs %}

The dev server starts at `http://localhost:8080` by default. Open this URL in a browser to verify the scaffold runs before adding Syncfusion<sup style="font-size:70%">&reg;</sup> components.

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

To install the Vue Pivot Table component, run the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-vue-pivotview --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-vue-pivotview

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Pivot Table can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/vue/documentation/appearance/theme).

The following example demonstrates the installation of the `Tailwind 3` theme package from npm. Each component in this theme package includes an `index.css` file that automatically loads all required dependency styles.

To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

Import the required theme styles in the `<style>` section of the `src/App.vue` file:

{% tabs %}
{% highlight css tabtitle="~/src/App.vue" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';

{% endhighlight %}
{% endtabs %}

## Adding Pivot Table component

The Pivot Table component code should be added to the **src/App.vue** file. Replace the default contents of `src/App.vue` with the following sample.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data () {
    return {
      dataSourceSettings: {
        dataSource: [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
        ],
        expandAll: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }]
      }
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run serve

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn run serve

{% endhighlight %}
{% endtabs %}

> **Troubleshooting:** If the dev server fails to start, ensure no other process is using the default port (`8080`), and that the `@vue/cli` global install completed successfully (run `vue --version` to verify). If the `vue` command is not recognized, restart your terminal so the updated PATH is picked up.

## See also

* [Data Binding](./data-binding)
* [Field List](./field-list)
* [Grouping Bar](./grouping-bar)
* [Getting Started with the Vue Pivotview Component in Vue 3](./vue-3-getting-started)