---
layout: post
title: Getting started with Vue TreeMap component | Syncfusion
description:  Checkout and learn about Getting started with Vue TreeMap component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TreeMap Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue TreeMap component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of minimum dependencies are required to use the TreeMap:

```javascript
|-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Treemap component](https://www.syncfusion.com/vue-components/vue-treemap) as an example. Install the `@syncfusion/ej2-vue-treemap` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-treemap --save
```
or

```bash
yarn add @syncfusion/ej2-vue-treemap
```

## Adding Syncfusion Vue TreeMap component

Follow the below steps to add the Vue TreeMap component:

1\. First, import and register the TreeMap component in the `script` section of the **src/App.vue** file. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
import { TreeMapComponent as EjsTreemap } from "@syncfusion/ej2-vue-treemap";

const dataSource = [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
];
const weightValuePath = 'Count';
const leafItemSettings: {
  labelPath: 'State',
};

</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<script>
import { TreeMapComponent } from "@syncfusion/ej2-vue-treemap";

export default {
name: "App",
  components: {
    'ejs-treemap': TreeMapComponent
  },
  data: function() {
    return {
        dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        weightValuePath: 'Count',
        leafItemSettings: {
            labelPath: 'State',
        }
     }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the TreeMap component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-treemap :dataSource='dataSource' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs60/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs60/app.vue %}
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
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs60" %}

## Module Injection

The tree map control is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `provide` option on component creation. Find the modules available in tree map and their descriptions as follows.

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

In the current application, the above basic tree map is modified to visualize international airport count in South America.

In this demo, the tree map is just rendered with labels. For this, you need not to import any modules.

## Render tree map

This section explains how to render the tree map with data source.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs15" %}

Here, the tree map is created with data source and set with the [`weightValuePath`] as count. You can customize the leaf level tree map items using the [`leafItemSettings`]. The properties such as [`fill`], [`border`], and [`labelPosition`] can be changed using the [`leafItemSettings`].

## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from the values that have to be compared for the item in the [`equalColorValuePath`] or [`rangeColorValuePath`] property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs16" %}

## Enable legend

You can show legend for the tree map by setting the [`visible`] property to true in [`legendSettings`] object and injecting the `TreeMapLegend` module using the `provide` option.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treemap/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs17" %}