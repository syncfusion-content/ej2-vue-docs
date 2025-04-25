---
layout: post
title: Getting started vue3 with Vue MultiColumn ComboBox | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue MultiColumn ComboBox component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue MultiColumn ComboBox Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue MultiColumn ComboBox component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the `Vue MultiColumn ComboBox component` as an example. To use the Vue MultiColumn ComboBox component in the project, the `@syncfusion/ej2-vue-multicolumn-combobox` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-multicolumn-combobox --save
```

or

```bash
yarn add @syncfusion/ej2-vue-multicolumn-combobox
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the MultiColumn ComboBox component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue MultiColumn ComboBox component using `Composition API` or `Options API`:

1.First, import and register the MultiColumn ComboBox component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { MultiColumnComboBoxComponent as EjsMulticolumncombobox } from "@syncfusion/ej2-vue-multicolumn-combobox";
  import { ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-multicolumn-combobox";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
//Component registeration
export default {
    name: "App",
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    }
}
</script>

{% endhighlight %}
{% endtabs %}

2.In the `template` section, define the MultiColumn ComboBox component with the `dataSource` property and `placeholder` property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div class="control_wrapper">
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select a employee'></ejs-multicolumncombobox>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-multicolumncombobox id='multicolumn' :dataSource='employeeData' :fields='fields' placeholder='Select a employee'>
            <e-columns>
                <e-column field='EmpID' header='Employee ID' width='70'></e-column>
                <e-column field='Name' header='Name' width='80'></e-column>
                <e-column field='Designation' header='Designation' width='60'></e-column>
                <e-column field='Country' header='Country' width='80'></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
</template>
<script setup>
    import { MultiColumnComboBoxComponent as EjsMulticolumncombobox } from "@syncfusion/ej2-vue-multicolumn-combobox";
    import { ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-multicolumn-combobox";
    const employeeData = [ 
        { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
        { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
        { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
        { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
        { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
        { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
        { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
        { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
        { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" }
    ];
    const fields = { text: 'Name', value: 'EmpID' };
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control_wrapper">
        <ejs-multicolumncombobox id='multicolumn' :dataSource='employeeData' :fields='fields' placeholder='Select a employee'>
            <e-columns>
                <e-column field='EmpID' header='Employee ID' width='70'></e-column>
                <e-column field='Name' header='Name' width='80'></e-column>
                <e-column field='Designation' header='Designation' width='60'></e-column>
                <e-column field='Country' header='Country' width='80'></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
</template>
<script>
    import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
    //Component registeration
    export default {
        name: "App",
        components: {
            'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
            'e-columns': ColumnsDirective,
            'e-column': ColumnDirective,
        }, 
        data () {
            return {
                employeeData: [ 
                    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
                    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
                    { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
                    { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
                    { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
                    { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
                    { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
                    { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
                    { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" }
                ],
                fields: { text: 'Name', value: 'EmpID' }
            }
        }
    }
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
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

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiColumn ComboBox input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the `popupHeight` &nbsp;and `popupWidth` properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multicolumn-combobox/getting-started/popup-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![MultiColumn ComboBox suggestion list customized height and width](./images/popup.png)