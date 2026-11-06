---
layout: post
title: Vue DataManager - Working in Offline Mode | Syncfusion
description: Use offline mode in Syncfusion Vue DataManager to load data once and process queries client-side.
platform: ej2-vue
control: Working in offline mode in Vue DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Offline mode with Vue DataManager

In Vue applications, remote data binding with DataManager typically sends a request to the server each time the `executeQuery` method is invoked. This repeated communication can increase latency and place additional load on the server.

To improve efficiency, DataManager provides an offline property. When enabled, all data is loaded during initialization, and subsequent query processing is handled on the client side. This eliminates unnecessary server calls, resulting in faster response times and reduced server overhead.

To enable offline mode in DataManager, set the `offline` property to `true` during initialization. This is demonstrated in the below code example.

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
import { onMounted, ref } from "vue";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

const items = ref([]);

onMounted(() => {
  let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";
  let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor(),
    offline: true
  });
  dataManager.executeQuery(new Query().take(8)).then((e) => {
    items.value = e.result;
  });
})
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
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: [] 
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";
    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor(),
      offline: true
    });
    dataManager.executeQuery(new Query().take(8)).then((e) => {
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

{% previewsample "page.domainurl/code-snippet/data/how-to/offline-mode" %}

> The loaded data will be cached in the **json** property of `DataManager`.

## When to use Offline mode

Offline mode is most effective when:

- The dataset is moderately sized and can be loaded during initialization.
- Data does not change frequently, reducing the risk of stale results.
- Client-side query processing provides a performance advantage.

## When to avoid Offline mode

Offline mode should be avoided in scenarios such as:

- Large datasets: Loading all records at once may cause performance issues in the browser.
- Frequently changing data: Cached data may become outdated quickly.
- Real-time requirements: Applications that depend on live or streaming data need server-side queries.
- Sensitive data: Storing all records on the client side may expose information unnecessarily.