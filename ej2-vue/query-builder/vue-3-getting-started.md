---
layout: post
title: Vue 3 getting started with the Query builder component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Query builder component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue QueryBuilder Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue QueryBuilder component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

To get start quickly with Vue Query Builder, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=mCKM2AxZeWs" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion Vue components in the project, install the corresponding npm package.

This article uses the [Vue QueryBuilder component](https://www.syncfusion.com/vue-components/vue-query-builder) as an example. To use the Vue QueryBuilder component in the project, the `@syncfusion/ej2-vue-querybuilder` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-querybuilder --save
```

or

```bash
yarn add @syncfusion/ej2-vue-querybuilder
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the QueryBuilder component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.
## Add Syncfusion Vue component

Follow the below steps to add the Vue QueryBuilder component using `Composition API` or `Options API`:

  1.First, import and register the QueryBuilder component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { QueryBuilderComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-querybuilder';
//Component registration
export default {
  name: "App",
  components: {
    "ejs-querybuilder": QueryBuilderComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the QueryBuilder component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

 <template>
 <div class="control-section">
     <div class="col-lg-12 querybuilder-control">
         <ejs-querybuilder width="70%" :dataSource="dataSource">
             <e-columns>
                 <e-column field='EmployeeID' label='Employee ID' type='number' />
                 <e-column field='FirstName' label='First Name' type='string' />
                 <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values" />
                 <e-column field='Title' label='Title' type='string' />
                 <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                 <e-column field='Country' label='Country' type='string' />
                 <e-column field='City' label='City' type='string' />
             </e-columns>
         </ejs-querybuilder>
     </div>
 </div>
 </template>

{% endhighlight %}
{% endtabs %}

3.Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
const dataSource = [{
      'EmployeeID': 1,
      'FirstName': 'Nancy',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Seattle',
      'Country': 'USA'
    },
    {
      'EmployeeID': 2,
      'FirstName': 'Andrew',
      'Title': 'Vice President',
      'TitleOfCourtesy': 'Dr.',
      'HireDate': '21/04/2003',
      'City': 'Tacoma',
      'Country': 'USA'
    },
    {
      'EmployeeID': 3,
      'FirstName': 'Janet',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Kirkland',
      'Country': 'USA'
    }];
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
data() {
  return {
    dataSource:[
      {
        'EmployeeID': 1,
        'FirstName': 'Nancy',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'HireDate': '22/07/2001',
        'City': 'Seattle',
        'Country': 'USA'
      },
      {
        'EmployeeID': 2,
        'FirstName': 'Andrew',
        'Title': 'Vice President',
        'TitleOfCourtesy': 'Dr.',
        'HireDate': '21/04/2003',
        'City': 'Tacoma',
        'Country': 'USA'
      },
      {
        'EmployeeID': 3,
        'FirstName': 'Janet',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'HireDate': '22/07/2001',
        'City': 'Kirkland',
        'Country': 'USA'
      }
    ],
  };
}
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

 <template>
 <div class="control-section">
     <div class="col-lg-12 querybuilder-control">
         <ejs-querybuilder width="70%" :dataSource="dataSource">
             <e-columns>
                 <e-column field='EmployeeID' label='Employee ID' type='number' />
                 <e-column field='FirstName' label='First Name' type='string' />
                 <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values" />
                 <e-column field='Title' label='Title' type='string' />
                 <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                 <e-column field='Country' label='Country' type='string' />
                 <e-column field='City' label='City' type='string' />
             </e-columns>
         </ejs-querybuilder>
     </div>
 </div>
 </template>

<script setup>
import { QueryBuilderComponent as EjsQuerybuilder, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-querybuilder';
const dataSource = [{
      'EmployeeID': 1,
      'FirstName': 'Nancy',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Seattle',
      'Country': 'USA'
    },
    {
      'EmployeeID': 2,
      'FirstName': 'Andrew',
      'Title': 'Vice President',
      'TitleOfCourtesy': 'Dr.',
      'HireDate': '21/04/2003',
      'City': 'Tacoma',
      'Country': 'USA'
    },
    {
      'EmployeeID': 3,
      'FirstName': 'Janet',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Kirkland',
      'Country': 'USA'
    }];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

 <template>
 <div class="control-section">
     <div class="col-lg-12 querybuilder-control">
         <ejs-querybuilder width="70%" :dataSource="dataSource">
             <e-columns>
                 <e-column field='EmployeeID' label='Employee ID' type='number' />
                 <e-column field='FirstName' label='First Name' type='string' />
                 <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values" />
                 <e-column field='Title' label='Title' type='string' />
                 <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                 <e-column field='Country' label='Country' type='string' />
                 <e-column field='City' label='City' type='string' />
             </e-columns>
         </ejs-querybuilder>
     </div>
 </div>
 </template>

<script>
  import { QueryBuilderComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-querybuilder';
  // Component registration
  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      "ejs-querybuilder": QueryBuilderComponent,
      "e-columns": ColumnsDirective,
      "e-column": ColumnDirective
    },
    // Bound properties declarations
    data() {
      return {
        dataSource:[{
          'EmployeeID': 1,
          'FirstName': 'Nancy',
          'Title': 'Sales Representative',
          'TitleOfCourtesy': 'Ms.',
          'HireDate': '22/07/2001',
          'City': 'Seattle',
          'Country': 'USA'
        },
        {
          'EmployeeID': 2,
          'FirstName': 'Andrew',
          'Title': 'Vice President',
          'TitleOfCourtesy': 'Dr.',
          'HireDate': '21/04/2003',
          'City': 'Tacoma',
          'Country': 'USA'
        },
        {
          'EmployeeID': 3,
          'FirstName': 'Janet',
          'Title': 'Sales Representative',
          'TitleOfCourtesy': 'Ms.',
          'HireDate': '22/07/2001',
          'City': 'Kirkland',
          'Country': 'USA'
        }],
      };
    }
  };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue-3-js-querybuilder](images/vue-3-js-query-builder.PNG)

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue3-tutorial/#migration-from-vue-2-to-vue-3) documentation.

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)