---
layout: post
title: Tutorial with Vue Getting started component | Syncfusion
description:  Checkout and learn about Tutorial with Vue Getting started component of Syncfusion Essential JS 2 and more details.
control: Tutorial 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® Vue UI Components and Vue CLI

This section explains how to use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in Vue 2 application. To get started with Vue 3 application, refer to the [getting started with Vue 3](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli) topic.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](../system-requirements)

## Create the Vue 2 application

The best way to create a Vue 2 application is to use the [vue create](https://cli.vuejs.org/#getting-started) command.

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Once the Vue 2 application is created, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component package in the application. All the available Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are published in the [npmjs.com](https://www.npmjs.com/search?q=ej2-vue) registry. Choose the component to be installed. In this article, the Grid component is used as an example.

Check out the [installation and upgrade](../installation-and-upgrade/installation) section to learn about the different ways of installing the packages. Here, the Grid component package is installed using the following `npm` command.

```bash
npm install @syncfusion/ej2-vue-grids --save
```

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

After installing the Syncfusion<sup style="font-size:70%">&reg;</sup> component packages in the application, add the required theme based on the components used.

Check out the [themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) section to know more about built-in themes and different ways (npm packages, CDN and CRG) to refer the themes in the Vue application.

Here the themes are referred through the npm theme packages which contains the built-in themes of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component. To install the [Material 3](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/@syncfusion/ej2-material3-theme

{% endhighlight %}
{% endtabs %}

Let's import the `Material3` theme for the Grid component in the `<style>` section of the `App.vue` file as follows.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Vue has two ways to register the Vue components in the Vue 2 application. Use one of the following ways to register the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components:
* [Vue.use()](https://v2.vuejs.org/v2/api/#Vue-use) - It registers the Vue component and all its child directives globally.
* [Vue.component()](https://v2.vuejs.org/v2/guide/components-registration.html) - It registers the Vue component only. It will not register the child directives automatically. The child directives should be registered separately.

### Using Vue.use()

Import the component plugin from the Vue package and register it using `Vue.use()` with the component plugin as its argument.

Refer to the following code snippet.

{% tabs %}
{% highlight js tabtitle="~/src/App.vue" %}

import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);

{% endhighlight %}
{% endtabs %}

### Using Vue.component()

Import the component and component plugin from the Vue package and register them using `Vue.component()` with the name of the component from the component plugin and the Vue component as its arguments. 

Refer to the following the code snippet.

{% tabs %}
{% highlight js tabtitle="~/src/App.vue" %}

import { GridPlugin, GridComponent, ColumnsDirective, ColumnsPlugin, ColumnDirective, ColumnPlugin} from "@syncfusion/ej2-vue-grids";

Vue.component(GridPlugin.name, GridComponent);
Vue.component(ColumnsPlugin.name, ColumnsDirective);
Vue.component(ColumnPlugin.name, ColumnDirective);

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component to the application

Add the Vue Grid to the `<template>` section of the `App.vue` file in the `src` directory. To display the Grid with records, add the Grid component and bind the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#datasource) to it. Here, the simple data is mapped to the `dataSource` property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-grid :dataSource="data">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID"  width="80"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="90"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);
export default {
  name: 'app',
  data () {
    return {
      data: [
        {
          OrderID: 10248,
          CustomerID: "VINET",
          ShipCountry: "France",
        },
        {
          OrderID: 10249,
          CustomerID: "TOMSP",
          ShipCountry: "Germany",
        },
      ],
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command.

```bash
npm run serve
```

The output will appear as follows:

{% tabs %}

{% highlight html tabtitle="Composition" %}
{% include code-snippet/common/default-cs1/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options" %}
{% include code-snippet/common/default-cs1/app.vue %}
{% endhighlight %}

{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs1" %}

## See also

* [Getting started with Vue 3 application](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-js-composition)
* [Getting started with Vue component using direct script](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)