---
layout: post
title: Cache in Vue DataManager | Syncfusion
description: Learn here all about Cache in Syncfusion Vue Data component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Cache 
documentation: ug
domainurl: ##DomainURL##
---

# Enable Cache in Vue Data component

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides the `enableCache` property, which enhances performance by reducing redundant HTTP requests for previously visited pages. When caching is enabled, the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) retrieves data from the cache instead of sending a new request, minimizing server load and improving user experience.

**How it works**

* When `enableCache` is set to true, the DataManager generates a unique ID at initialization and uses it to store previously loaded page data in cache memory. This enables efficient data retrieval without redundant server requests.
* The cache is automatically cleared when data actions such as sorting, filtering, grouping, searching, or CRUD operations (Create, Read, Update, Delete) are performed.
* This feature is supported by all adaptors in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager, ensuring consistent caching behavior across different data sources.

The following example demonstrates how to enable caching using the `enableCache` property in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue DataManager:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <ejs-grid :dataSource="data">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='100' textAlign='Right'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='100'></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' width='100' textAlign='Right'></e-column>
        <e-column field="OrderDate" headerText="Order Date" format="yMd" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';

const data = new DataManager({ 
  url: "https://services.syncfusion.com/vue/production/api/Orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true,
  enableCache: true // Enables caching to prevent repeated HTTP requests.
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <ejs-grid :dataSource="data">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='100' textAlign='Right'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='100'></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' width='100' textAlign='Right'></e-column>
        <e-column field="OrderDate" headerText="Order Date" format="yMd" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: new DataManager({
        url: "https://services.syncfusion.com/vue/production/api/Orders",
        adaptor: new WebApiAdaptor(),
        crossDomain: true,
        enableCache: true // Enables caching to prevent repeated HTTP requests.
      })
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>

{% endraw %}
{% endhighlight %}
{% endtabs %}