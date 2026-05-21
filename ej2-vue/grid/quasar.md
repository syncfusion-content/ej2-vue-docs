---
layout: post
title: Getting Started with Quasar and Vue Grid Component | Syncfusion
description: Check out and learn about getting started with the Quasar Framework and Vue Grid Component of Syncfusion Essential JS 2 and more details.
control: Quasar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Grid Component in the Quasar Framework

A step-by-step guide for setting up a [Quasar](https://quasar.dev/) project and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

The `Quasar` Framework is a Vue.js-based open-source framework that empowers developers to create high-performance and responsive applications across various platforms, such as web, mobile, and desktop.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid components](../system-requirements)

## Setup the Quasar project

To initiate the creation of a new [Quasar](https://quasar.dev/start/quick-start/) project, use the following commands:

```bash
npm init quasar
```

This command prompts additional configurations. The following steps are outlined in the images below:

![quasar-setup1](./images/quasar-setup1.png)

This generates the necessary files and prompts for project dependency installation. Responding with "yes" proceeds with npm install, as shown in the image below:

![quasar-setup2](./images/quasar-setup2.png)

Navigate to the project directory:

```bash
cd quasar-project
```

The `quasar-project` is now ready to run with default settings. Next, the Vue Grid component is added to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid packages

To install the Grid component, use the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```

## Adding CSS reference

The following CSS files are available in the ../node_modules/@syncfusion package folder. Add these as references in **src/App.vue**.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Grid component

The grid code should be added in the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/app.vue" %}

<template>
  <ejs-grid :dataSource='data' :width="1000">
    <e-columns>
      <e-column field='OrderID' textAlign="Center"></e-column>
      <e-column field='CustomerID' textAlign="Center"></e-column>
      <e-column field='EmployeeID' textAlign="Center"></e-column>
      <e-column field='Freight' format="C2" textAlign="Center"></e-column>
      <e-column field='ShipCountry' textAlign="Center"></e-column>
    </e-columns>
  </ejs-grid>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
const data = [
  {
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38 
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61 
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83 
  }
];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the application

```bash
npm run dev
```

The output will appear as follows:

![Quasar output](./images/quasar-output.png)