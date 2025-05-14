---
layout: post
title: Applying Middleware logic in Vue DataManager | Syncfusion
description: Learn here all about applying Middleware logic in Syncfusion Vue Data component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Applying Middleware logic
documentation: ug
domainurl: ##DomainURL##
---

# Applying Middleware logic in Vue Data control

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager allows you to implement middleware logic in your application. It enables you to modify requests and responses before they are sent to the server or processed by the client. This is useful for tasks such as authentication, validation, logging, and response transformation. You can apply middleware using two methods: `applyPreRequestMiddlewares` and `applyPostRequestMiddlewares`. The following sections provide a detailed explanation of these methods.

**Pre-Request Middleware**

The `applyPreRequestMiddlewares` method runs before a request is sent to the back end. It allows you to modify request headers, query parameters, or payloads. This is commonly used for adding authentication tokens, restructuring requests, or validating data before it is sent. The following code snippet demonstrates how to add an authorization token:

```ts

dataManager.applyPreRequestMiddlewares([
    async (context) => {
      context.request.headers['Authorization'] = 'Bearer your-access-token';
    }
]);

```

**Post-Request Middleware**

The `applyPostRequestMiddlewares` method runs after a response is received from the server but before binding the data to a component. It allows you to modify, filter, or restructure response data as needed. The following code snippet demonstrates how to format response data:

```ts

dataManager.applyPostRequestMiddlewares([
    async (context) => {
        context.response.result = context.response.result.map(item => ({
            id: item.Id,
            name: item.Name.toUpperCase(),
            date: new Date(item.Timestamp).toLocaleDateString()
        }));
    }
]);

```

**Supported Data Adaptors**

Middleware functions work with various DataManager adaptors, including [WebApiAdaptor](https://ej2.syncfusion.com/vue/documentation/grid/connecting-to-adaptors/web-api-adaptor), [ODataAdaptor](https://ej2.syncfusion.com/vue/documentation/grid/connecting-to-adaptors/odatav4-adaptor), and `CustomAdaptor`. They can be used for both local and remote data processing. By using middleware, you can enhance the flexibility, security, and efficiency of data handling in your applications.

The following code example demonstrates how to use Syncfusion's<sup style="font-size:70%">&reg;</sup> [UrlAdaptor](https://ej2.syncfusion.com/vue/documentation/grid/connecting-to-adaptors/url-adaptor) while applying middleware logic to modify requests and responses. Before sending a request to the back end, the `applyPreRequestMiddlewares` method retrieves an authentication token from an external middleware server and adds it to the request headers. If the middleware server fails to return a valid token, the DataManager failure event is triggered to handle the error.

Similarly, the `applyPostRequestMiddlewares` method processes the response before updating the component. This ensures that any necessary modifications, such as data transformation or filtering, are applied before binding the response to the UI. These middleware methods enhance request handling, improve security, and provide better control over data processing in the applications.

{% tabs %}
{% highlight ts tabtitle="App.Vue" %}
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
import { DataManager, Query, UrlAdaptor} from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: [] 
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/UrlDataSource";
    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new UrlAdaptor()
    }).executeQuery(new Query().take(12)).then((e) => {
      this.items = e.result;
    });

      // Method to apply middleware before sending a request to the server.
      dataManager.applyPreRequestMiddlewares = async (request) => {
        const response = await fetch("https://example.com/api/token", { // Replace with your actual endpoint. This URL is just for example purposes.
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return { token: "your_token_value" };
      };
  
      dataManager.dataManagerFailure = (e) => {
        //Handle DataManager failure event.
      };

    // Method to apply middleware after receiving a response from the server
    dataManager.executeQuery(new Query().take(8)).then((e) => {
      this.setState({ items: e.result });
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