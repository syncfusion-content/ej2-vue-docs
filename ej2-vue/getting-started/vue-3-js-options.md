---
layout: post
title: Vite vue with Vue Getting started component | Syncfusion
description:  Checkout and learn about Vite vue with Vue Getting started component of Syncfusion Essential JS 2 and more details.
control: Vue3 js options 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue using JavaScript and Options API

This article provides a step-by-step guide for setting up a [Vite](https://vite.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components using the [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](../system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vite.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm create vite@latest

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn create vite

{% endhighlight %}
{% endtabs %}create vite

Using one of the above commands will lead you to set up additional configurations for the project as below:

1. **Project name** - Type: `my-project` (or any name you want)

2. **Select framework** - Choose: **Vue**

3. **Select variant** - Choose: **JavaScript**

4. **Install with npm and start now?** - Choose: No

5. **Go to your project and install packages:**

{% tabs %}
{% highlight bash tabtitle="npm" %}

cd my-project
npm install

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

cd my-project
yarn install

{% endhighlight %}
{% endtabs %}


Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue Grid component](https://www.syncfusion.com/vue-components/vue-grid) as an example. To use the Vue Grid component in the project, the `@syncfusion/ej2-vue-grids` package needs to be installed using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-vue-grids --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-vue-grids

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component themes can be applied using CSS or SASS from the [npm theme packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages). Additionally, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio).

This example uses the `Material 3` theme for the Grid component from the theme package. To install the [Material 3](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/@syncfusion/ej2-material3-theme

{% endhighlight %}
{% endtabs %}

The necessary CSS styles for the Grid component were imported into the `<style>` section of **src/App.vue** file. Vite app generates a default `styles.css` file which we do not need for this example. Before running the sample, delete the content of `src/style.css` or remove the file if it's unused.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Grid component using `Options API`:

1.First, import the Grid component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
  import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
</script>

{% endhighlight %}
{% endtabs %}
   
2.The next step is to register the Grid component and its child directives in Vue.

{% tabs %}
{% highlight js tabtitle="~/src/App.vue" %}

import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
//Component registration
export default {
  name: "App",
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  }
}

{% endhighlight %}
{% endtabs %} 

3.Define the Grid component with the dataSource property and column definitions. Declare the values for the dataSource property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-grid :dataSource='data'>
    <e-columns>
      <e-column field='OrderID' width='100' textAlign="Right"></e-column>
      <e-column field='CustomerID' width='100'></e-column>
      <e-column field='EmployeeID' width='100' textAlign="Right"></e-column>
      <e-column field='Freight' width='100' format="C2" textAlign="Right"></e-column>
      <e-column field='ShipCountry' width='100'></e-column>
    </e-columns>
  </ejs-grid>
</template>

<script>
  import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      'ejs-grid': GridComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective
    },
    // Bound properties declarations
    data() {
      return {
        data:[
          {
            OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38 
          },
          {
            OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61 
          },
          {
            OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83 
          }
        ],
      };
    }
  };
</script>

{% endhighlight %}
{% endtabs %} 


## Run the project

To run the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![vue-3-js-options](../appearance/images/vue-3-js-options.png)

## See also

* [Getting Started with Vue UI Components using Composition API and JavaScript](./vue-3-js-composition)
* [Getting Started with Vue UI Components using Composition API and TypeScript](./vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](./vue-3-ts-options)
