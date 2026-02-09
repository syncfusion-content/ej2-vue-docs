---
layout: post
title: Getting started with Vue Range navigator component | Syncfusion
description: Step-by-step guide to create a Vue 2 project, install Syncfusion Essential JS 2 Range Navigator, register modules via Vue provide, and run the sample.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Range Navigator Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Range navigator component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Below is the list of minimum dependencies required to use the range navigator component.

```javascript
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

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Range navigator component](https://www.syncfusion.com/vue-components/vue-range-selector) as an example. Install the `@syncfusion/ej2-vue-charts` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-charts --save
```
or

```bash
yarn add @syncfusion/ej2-vue-charts
```

> The **--save** will instruct NPM to include the range navigator package inside of the `dependencies` section of the `package.json`.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Range navigator component:

1\. First, import and register the Range navigator component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { RangeNavigatorComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-rangenavigator': RangeNavigatorComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define Range navigator component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-rangenavigator></ejs-rangenavigator>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs9" %}

## Module Injection

To add features to the range navigator, inject the required modules. The following modules extend the range navigator's basic functionality.

- `AreaSeries` — Inject to use the area series.
- `DateTime` — Inject to use the date/time axis.
- `RangeTooltip` — Inject to enable the tooltip.

Inject these modules in the `provide` section as shown below.

 ```javascript
import { RangeNavigatorComponent, AreaSeries, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";

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

## Populate Range Navigator with Data

Now provide data to the range navigator. Add a `series` object using the [`series`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries) property. Map the JSON fields for x and y to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeries#yname) properties, and set the JSON array to the `dataSource` property. If the JSON contains date/time values, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorModel#valuetype) of the range navigator to `DateTime`. By default, the axis `valueType` is `Numeric`.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs10" %}

## Enable Tooltip

The tooltip is useful to show the selected data. You can enable tooltip by setting the `enable` property as true in tooltip object and by injecting `RangeTooltip` module using `provide` method.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs11" %}