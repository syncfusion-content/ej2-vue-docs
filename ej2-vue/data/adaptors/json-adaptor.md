---
layout: post
title: Vue Data - JSON Adaptors | Syncfusion
description: Use JsonAdaptor in Syncfusion Vue DataManager for fast client-side operations on JavaScript arrays no server required.
control: Adaptors 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# JSON Adaptors in Vue DataManager

The `JsonAdaptor` is a highly efficient and versatile adaptor designed for performing data operations directly on in‑memory JavaScript objects and arrays. The `JsonAdaptor` eliminates the need for remote servers or complex data services, making the adaptor ideal for applications that rely heavily on local datasets. Whether data is sourced from static JSON files, dynamically generated collections, or client‑side state management systems, the `JsonAdaptor` offers a seamless and optimized way to manage and manipulate data.

With built‑in support for essential data operations such as filtering, sorting, grouping, searching, paging, and CRUD the `JsonAdaptor` provides a powerful abstraction layer that simplifies complex data transformations. Instead of manually writing data-handling logic, the `JsonAdaptor` leverages the `DataManager` engine to execute operations efficiently and consistently.

By combining performance with simplicity, the `JsonAdaptor` helps developers reduce boilerplate code and maintain a clean, predictable workflow. The adaptor proves particularly valuable for applications like dashboards, offline-first systems, data-heavy UI components, or any scenario where smooth local processing is critical.

## Key advantages of the JsonAdaptor

- **Seamless local data processing:** Operates entirely on JavaScript arrays without additional server calls, ensuring lightning‑fast data manipulation.

- **Built‑in support for advanced operations:** Automatically handles filtering, sorting, grouping, paging, aggregates, and other data transformations with minimal setup.

- **Ideal for client-side data handling:** Perfect for offline scenarios, demo/sample apps, static data files, or applications relying on local state stores.

- **Reduces development effort:** Removes the burden of writing repetitive data-processing logic, allowing developers to focus on UI and application behavior.

- **Consistent results across components:** Works seamlessly with Syncfusion components (`Grid`, `ListView`, `Charts`, `Dropdowns`, etc.), ensuring uniform behavior across the application.

## When to use JsonAdaptor?

Use `JsonAdaptor` when the application:

- Works primarily with client-side data.
- Requires fast, local operations without network latency.
- Uses data from JSON files, static assets, or generated datasets.
- Needs rapid prototyping or offline/low-network environments.
- Must apply complex filters, queries, or transformations on large arrays.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
      </tr>
    </table>  
  </div>
</template>

<script setup>
import { data } from './datasource.js';
import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';

const items = new DataManager({ json: data, adaptor: new JsonAdaptor }).executeLocal(new Query().take(8));

</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }
</style>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Option API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import { data } from './datasource.js';
import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: new DataManager({ json: data, adaptor: new JsonAdaptor }).executeLocal(new Query().take(8))
    };
  },   
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
  }

  .e-table td, .e-table th {
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #e0e0e0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
  }
</style>

{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/data-binding/default-cs3" %}

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to/adding-custom-headers)