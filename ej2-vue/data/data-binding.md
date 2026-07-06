---
layout: post
title: Vue DataManger - Data Binding | Syncfusion
description: Explore local and remote data binding in Syncfusion Vue DataManager, bind JavaScript arrays or REST APIs with executeLocal and executeQuery.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Vue DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue DataManager enables efficient data management in Vue applications. It supports both RESTful JSON data services binding and local JavaScript object array binding, providing flexibility to handle and manipulate data.

Data binding is the process of connecting Syncfusion Vue components with data sources, allowing the UI to reflect changes in the data automatically. [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) simplifies this process by providing seamless integration with Vue components, enabling efficient data binding without unnecessary code.

## Local data binding

Local data binding allows to bind [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) directly to an array of JavaScript objects stored within the application. This approach is simple and efficient for small datasets or static data that does not need to be fetched from a server.

DataManager initialization enables binding local data by assigning the array of JavaScript objects to the `json` property or passing them to the constructor during instantiation. Once initialized, the array of JavaScript objects becomes the datasource for `DataManager`, enabling seamless querying and data manipulation. Follow these steps to bind local data using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Define a local array of objects.
2. Initialize DataManager with the `json` property set to that array.
3. Use the `executeLocal` method of DataManager to run queries and perform data operations directly on local datasets.

The following example demonstrates how to bind JSON data using the [executeLocal](https://ej2.syncfusion.com/documentation/api/data/dataManager#executelocal) method of `DataManager`.

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
import { DataManager, Query } from '@syncfusion/ej2-data';

const items = new DataManager(data).executeLocal(new Query().take(12));
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
import { DataManager, Query } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: new DataManager(data).executeLocal(new Query().take(12))
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
        
{% previewsample "page.domainurl/code-snippet/data/data-binding/default-cs1" %}

## Remote data binding

Remote data binding is particularly useful in scenarios where large datasets need to be fetched from a server, real-time data updates are required, or data needs to be accessed from an external API or database.

Follow these steps to bind remote data using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Start by creating an instance of `DataManager` and assign the service endpoint URL to the `url` property.

2. Use the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager#executequery) method to send a [query](https://ej2.syncfusion.com/documentation/api/data/query) to the server and fetch data in JSON format.

3. After calling `executeQuery`, the DataManager waits for the server response, converts it into a JSON format, and returns the data to the UI.

The following example demonstrates how to bind JSON data using the `executeQuery` method of `DataManager`.

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
    adaptor: new ODataV4Adaptor()
  });
  dataManager.executeQuery(new Query().take(12)).then((e) => {
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
      adaptor: new ODataV4Adaptor()
    });
    dataManager.executeQuery(new Query().take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/data-binding/default-cs2" %}

> - The queried data will not be cached locally unless offline mode is enabled.
> - DataManager is directly bound to Syncfusion components such as the Grid through the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) property rather than using `executeQuery`. Refer to the Grid data‑binding [documentation](https://ej2.syncfusion.com/vue/documentation/grid/data-binding/data-binding).

## See Also

* [Binding with ODataV4 service](./adaptors/odatav4-adaptor)
* [Binding with Web API](./adaptors/web-api-adaptor)
* [How to write custom adaptor](./adaptors/adaptors#writing-custom-adaptor)
* [How to work in offline mode](./how-to#work-in-offline-mode)
* [How to send additional parameters](./how-to#sending-additional-parameters-to-server)
* [How to add custom request headers](./how-to#adding-custom-headers)
