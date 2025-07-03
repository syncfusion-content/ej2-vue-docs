---
layout: post
title: Adding custom headers with Vue DataManager | Syncfusion
description: Learn here all about Adding custom headers with Syncfusion Vue DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Adding custom headers in Vue DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom headers with Vue DataManager

Custom headers allow you to send extra information along with your HTTP requests. This information can include authentication tokens, API keys, or any other data required by the server to process the request correctly. By adding custom headers, you can enhance the security and functionality of your application's data communication process.

The Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) provides a flexible way to include custom HTTP headers in your data requests through the `headers` property, enhancing communication between your application and the server. This feature is particularly useful when you need to include additional information or authentication tokens in your data requests.

To integrate custom headers into your `DataManager` requests, follow these steps:

1. Create a new instance of `DataManager` with the required `URL` and `adaptor`.

2. Assign the custom headers to the `headers` property of the `DataManager` instance. 

3. Trigger the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) method to send the request to the server with the custom headers.

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
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

const items = ref([]);

onMounted(() => {
  let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Orders";
  let dataManager = new DataManager({ 
      url: SERVICE_URI, 
      adaptor: new ODataAdaptor, 
      headers:[{ 'syncfusion-data-manager': 'true' }]  
  });
  dataManager.executeQuery(new Query()).then((e) => {
    this.items = e.result;
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
        adaptor: new ODataAdaptor, 
        headers:[{ 'syncfusion-data-manager': 'true' }]  
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

> * Headers can be defined as key-value pairs.
> * Adding custom headers while making cross domain request will initiate preflight request.