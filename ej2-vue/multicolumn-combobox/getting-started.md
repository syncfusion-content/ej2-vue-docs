---
layout: post
title: Getting started with Vue MultiColumn ComboBox component | Syncfusion
description:  Checkout and learn about Getting started with Vue MultiColumn ComboBox component of Syncfusion Essential JS 2 and more details.
control: MultiColumn ComboBox
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue MultiColumn ComboBox Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue MultiColumn ComboBox component.

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

## Adding Vue MultiColumn ComboBox package

To install the Vue MultiColumn ComboBox package, use the following command:

```bash
npm install @syncfusion/ej2-vue-multicolumn-combobox 
```
or

```bash
yarn add @syncfusion/ej2-vue-multicolumn-combobox
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> MultiColumn ComboBox component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) documentation.
 
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
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/multicolumn-combobox/index.css";
</style>

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding MultiColumn ComboBox component

Now, you can add the Vue MultiColumn ComboBox  component to your **src/App.vue** file by importing and defining it within your application. After initializing, populate the MultiColumn ComboBox with data by using the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/multicolumn-combobox/index-default#datasource) property, to map the data for each specified columns use the `<e-column>` selector and the [fields](https://ej2.syncfusion.com/vue/documentation/api/multicolumn-combobox/index-default#fields) property to map the data fields from the dataSource.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <div id='container' style="margin:50px auto 0; width:250px;">
            <br>
            <ejs-multicolumncombobox id='multicolumn' :dataSource='employeeData' :fields='fields'
                placeholder='Select a employee'>
                <e-columns>
                    <e-column field='EmpID' header='Employee ID' width='70'></e-column>
                    <e-column field='Name' header='Name' width='80'></e-column>
                    <e-column field='Designation' header='Designation' width='60'></e-column>
                    <e-column field='Country' header='Country' width='80'></e-column>
                </e-columns>
            </ejs-multicolumncombobox>
        </div>
    </div>
</template>

<script>
    import {MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-vue-multicolumn-combobox";

    export default {
        components: {
            'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
            'e-columns': ColumnsDirective,
            'e-column': ColumnDirective,
        },
        data() {
            return {
                employeeData: [
                    {"EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England"},
                    {"EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA"},
                    {"EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany"},
                    {"EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India"},
                    {"EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy"},
                    {"EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe"},
                    {"EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia"},
                    {"EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa"},
                    {"EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia"}
                ],
                fields: {text: 'Name', value: 'EmpID'};
            }
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/multicolumn-combobox/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

```bash
npm run dev
```

or

```bash
yarn run serve
```

The output will appear as follows:

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/getting-started/getting-started-cs1" %}

> You can refer to our [Vue MultiColumn ComboBox](https://www.syncfusion.com/vue-components/vue-multicolumn-combobox) feature tour page for its groundbreaking feature representations. You can also explore our [Vue MultiColumn ComboBox example](https://ej2.syncfusion.com/vue/demos/#/material/multicolumn-combobox/default.html) that shows how to render the MultiColumn ComboBox in Vue.

## See also

* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)