---
layout: post
title: Working in offline mode with Vue DataManager | Syncfusion
description: Learn here all about Working in offline mode with Syncfusion Vue DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Working in offline mode in Vue DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Working in offline mode with Vue DataManager

In Vue applications, working with remote data binding using [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) often involves sending requests to the server every time the executeQuery method is invoked. This process can result in unnecessary server calls, leading to increased latency and server load. 

`DataManager` provides an `offline` property that allows you to load all data during initialization and perform query processing on the client-side. This approach eliminates the need to send requests to the server every time [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) is called, resulting in a more responsive and efficient data interaction experience.

To enable offline mode in DataManager, set the `offline` property to **true** during initialization. This is demonstrated in the below code example.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% raw %}
<template>
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>   
  </div>
</template>

<script>
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: [] 
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Orders";
    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataAdaptor(),
      offline: true
    });
    dataManager.executeQuery(new Query()).then((e) => {
      this.items = e.result;
    });
  } 
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

> The loaded data will be cached in the **json** property of `DataManager`.