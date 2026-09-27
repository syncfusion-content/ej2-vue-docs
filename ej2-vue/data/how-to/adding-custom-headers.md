---
layout: post
title: Vue DataManager - Custom headers | Syncfusion
description: Send custom HTTP headers (e.g., authentication tokens, API keys) with Syncfusion Vue DataManager using the headers property.
platform: ej2-vue
control: Adding custom headers in Vue DataManager
documentation: ug
domainurl: ##DomainURL##
---

# Custom headers for Vue DataManager

Custom headers provide a mechanism to send additional information along with HTTP requests made by the Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager). These headers can include authentication tokens, API keys, session identifiers, or any other metadata required by the server to validate and process the request correctly.

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports custom headers through its `headers` property, enabling secure and flexible communication between the client application and the server. This feature is particularly useful when requests must carry additional information for authentication, authorization, or contextual processing.

Steps to integrate custom headers into DataManager requests:

1. Create a new instance of `DataManager` with the required `URL` and `adaptor`.

2. Assign the custom headers to the `headers` property of the `DataManager` instance. 

3. Trigger the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/executequery) method to send the request to the server with the custom headers.

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
