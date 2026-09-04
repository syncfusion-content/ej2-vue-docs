---
layout: post
title: Getting Started with Vue Query Builder UI | Syncfusion
description: Step-by-step guide to set up a Vue 2 project with Vue CLI and add the Syncfusion Vue Query Builder UI to build filter rules.
control: Getting Started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue Query Builder UI

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Query Builder component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vue 2 project

Easily set up a Vue 2 application using Vue CLI, which provides a reliable development environment, a streamlined project structure, and optimized builds compared to older setup tools. For detailed steps, refer to the Vue CLI [installation instructions](https://cli.vuejs.org/guide/installation.html).

> **Note:** To create a Vue 2 application using Vue CLI, refer to this [documentation](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-2-vue-cli) for more details.

To create a new Vue 2 application, run the following commands based on your preferred package manager:


```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **Default ([Vue 2] babel, eslint)**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Vue Query Builder packages

To install the Query Builder package, use the following command:

```bash
npm install @syncfusion/ej2-vue-querybuilder --save
```
or

```bash
yarn add @syncfusion/ej2-vue-querybuilder
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/query-builder/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Query Builder component

The Query Builder code should be added in the **src/App.vue** file.

{% tabs %}
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
        }],
      };
    }
  };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/query-builder/index.css";
</style>

{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/default-cs10" %}

## Run the application

```bash
npm run serve
```

or

```bash
yarn run serve
```

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting Started with testing Vue UI Components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)