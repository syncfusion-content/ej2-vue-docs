---
layout: post
title: Data binding in Vue DataManager | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue DataManager

The Syncfusion Vue DataManager enables efficient data management in Vue applications. It supports both RESTful JSON data services binding and local JavaScript object array binding, providing flexibility to handle and manipulate data.

Data binding is the process of connecting UI elements with data sources, allowing the UI to reflect changes in the data automatically. [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) simplifies this process by providing seamless integration with Vue components, enabling efficient data binding without unnecessary code.

## Local data binding

Local data binding allows you to bind DataManager directly to an array of JavaScript objects stored within the application. This method is particularly useful for small-scale applications or when the data does not need to be fetched from external sources.

**Initializing DataManager with local data**

You can initialize [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) with local data by either assigning the array of JavaScript objects to the **json** property or passing them to the constructor during instantiation. Once initialized, the array of JavaScript objects becomes the datasource for `DataManager`, enabling you to query and manipulate the data seamlessly.

Follow these steps to bind local data using Syncfusion `DataManager`:

1. Define your data directly in your Vue component or import it from an external source.

2. Use the `DataManager` class to create a data source and bind it to your data.

The following example demonstrates how to bind JSON data using the [executeLocal](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executelocal) method of `DataManager`.

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

Remote data binding with [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) in Vue allows you to connect your application to a remote data source by specifying the service endpoint URL. This approach is essential for applications that require real-time or dynamic data fetching from a server, enhancing the efficiency of data interaction. `DataManager` handles all communication with the data server using queries.

Remote data binding is particularly useful in scenarios where large datasets need to be fetched from a server, real-time data updates are required, or data needs to be accessed from an external API or database.

Follow these steps to bind remote data using Syncfusion `DataManager`:

1. Start by creating an instance of `DataManager` and assign the service endpoint URL to the `url` property.

2. Use the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executequery) method to send a [query](https://ej2.syncfusion.com/documentation/api/data/query) to the server and fetch data in JSON format.

3. After calling `executeQuery`, DataManager waits for the server response, converts it into a JSON format, and return the data to the UI.

The following example demonstrates how to bind JSON data using the `executeQuery` method of `DataManager`.

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

> The queried data will not be cached locally unless offline mode is enabled.