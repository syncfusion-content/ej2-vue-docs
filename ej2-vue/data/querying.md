---
layout: post
title: Querying in Vue DataManager | Syncfusion
description: Learn here all about Querying in Syncfusion Vue DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Querying 
documentation: ug
domainurl: ##DomainURL##
---

# Querying in Vue DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/datamanager) offers various classes to work with data. The Query class plays a vital role in data execution and manipulation. It allows you to create complex queries to fetch data from your data source. It provides a various methods to help you filter, sort, aggregate, and transform data as needed.

## Specifying resource name using from

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager's Query class provides a powerful method to set the primary resource or table name for data retrieval during query execution. This method is particularly useful when you need to fetch data from a specific table or resource in your data source.

The [from](https://ej2.syncfusion.com/documentation/api/data/query/#from) method of [query](https://ej2.syncfusion.com/documentation/api/data/query) class is used to specify the name of the resource or table from which the data will be fetched. This sets the primary source for the query execution.

Follow these steps to use `from` method with Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/datamanager):

1. Initialize a new `query` object to start building your query.

2. Use the `from` method to specify the table or resource name from which data will be fetched.

3. Execute the query to fetch data from the specified resource using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`.

The following example demonstrates how to use `from` method of `query` class in `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

const items = ref([]);

onMounted(() => {
  let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/";
  let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
  });
  dataManager.executeQuery(new Query().from('Orders').take(12)).then((e) => {
    items.value = e.result;
  });
});
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
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/";
    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    dataManager.executeQuery(new Query().from('Orders').take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs1" %}

## Projection using select

When working with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/datamanager), you may need to fetch only specific fields from your data source. The [select](https://ej2.syncfusion.com/documentation/api/data/query/#select) method from [query](https://ej2.syncfusion.com/documentation/api/data/query) class allows you to specify which fields to project onto the DataManager.

The `select` method is helpful for displaying a specific number of columns from a large dataset with multiple columns, which reduces the amount of data transferred and improves the performance of your application.

Follow these steps to use `select` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Create a new `query` object to begin constructing your query.

2. Use the `select` method to specify the columns that you want to display in the Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`.

3. Execute the query to fetch and display data with the specified columns.

The following example demonstrates how to use `select` method of `query` class in `DataManager`. In this example, **OrderID**, **CustomerID** and **ShipCountry** columns are selected using the `select` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.ShipCountry }}</td>
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
  dataManager.executeQuery(new Query().select(['OrderID', 'CustomerID', 'ShipCountry']).take(12)).then((e) => {
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
      <tr><th>Order ID</th><th>Customer ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
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
    dataManager.executeQuery(new Query().select(['OrderID', 'CustomerID', 'ShipCountry']).take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs2" %}

> Ensure that the field names specified in the select method exist in your data source.

## Eager loading navigation properties

Eager loading navigation properties in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/datamanager)r allows you to retrieve related data along with the primary data in a single query. This improves performance by reducing the frequency of trips to the server. It enhances the experience by providing comprehensive data views without additional server requests. 

The [expand](https://ej2.syncfusion.com/documentation/api/data/query/#expand) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class facilitates eager loading of navigation properties to fetch the related data.

Follow these steps to use `expand` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Initialize a new `query` object to start building your query.

2. Use the `expand` method to specify the navigation properties to be eagerly loaded.

3. Execute the query to fetch data along with eagerly loaded navigation properties.

The following example demonstrates how to use the `expand` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager` for eager loading navigation properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee Name</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.Employee.FirstName }}</td>
        <td>{{ item.ShipCountry }}</td>
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
  dataManager.executeQuery(new Query()
  .expand('Employee').take(12)).then((e) => {
    this.items = e.result;
  });
});
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
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee Name</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.Employee.FirstName }}</td>
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
    dataManager.executeQuery(new Query()
    .expand('Employee').take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs3" %}

## Sorting

Sorting in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/datamanager) allows you to organize data in a specified order, thus enhancing data readability and analysis. It allows you to arrange data either in ascending or descending order based on specified criteria. 

This can be achieved using the [sortBy](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class. This method facilitates the sorting of data based on specified fields and order.

Follow these steps to use `sortBy` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Initialize a new `query` object to start building your query.

2. Use the `sortBy` method to specify the field based on which sorting should be performed. You can also specify the sorting direction as **descending** to sort the data in descending order.

3. Execute the query to retrieve the sorted data from the server.

The following example demonstrates how to sort data based on the **CustomerID** field in **descending** order using the `sortBy` method of `query` class of `DataManager`. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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
  dataManager.executeQuery(new Query().sortBy('CustomerID', 'descending').take(12)).then((e) => {
    items.value = e.result;
  });
});
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
    dataManager.executeQuery(new Query().sortBy('CustomerID', 'descending').take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs4" %}

> * Multi sorting can be performed by simply chaining the multiple `sortBy` methods.
> * You can also perform sorting in descending direction using the  [sortByDesc](https://ej2.syncfusion.com/documentation/api/data/query/#sortbydesc) method of DataManager query.

## Filtering

Filtering with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/datamanager) enables you to efficiently filter data before it is fetched from the server, reducing the amount of data transferred and enhancing performance. This fundamental operation allows you to obtain a reduced view of data based on specified filter criteria, Essential<sup style="font-size:70%">&reg;</sup> for efficiently managing and displaying large datasets.

A filter expression can be easily constructed using the [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class. This method allows you to specify filter criteria based on various conditions. 

Follow these steps to use `where` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Create a new `query` object to begin constructing your query.

2. Use the `where` method to specify the filter criteria.

3. Execute the query to fetch and filter data from the server.

The following example demonstrates how to filter data based on the **EmployeeID** field equal to **3** using the `where` method of `query` class of `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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
  dataManager.executeQuery(new Query().where('EmployeeID', 'equal', 3).take(12)).then((e) => {
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
    dataManager.executeQuery(new Query().where('EmployeeID', 'equal', 3).take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs5" %}

### Filter operators

Filter operators in Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) allow you to specify the filter type for querying data. These operators enable you to define various conditions to filter data effectively. Below is a comprehensive list of filter operators supported by Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`.

| Operator           | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| greaterthan        | Checks whether a value is greater than with specified value.            |
| greaterthanorequal | Checks whether a value is greater than or equal to the specified value. |
| lessthan           | Checks whether a value is less than the specified value.                |
| lessthanorequal    | Checks whether a value is less than or equal to the specified value.    |
| equal              | Checks whether a value equal to the specified value.                    |
| notequal           | Checks whether a value not equal to specified value.                    |
| startswith         | Checks whether a value begins with the specified value.                 |
| endswith           | Checks whether a value ends with specified value.                       |
| contains           | Checks whether a value contains with specified value.                   |

> These filter operators are used for creating filter query using
[where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method and [predicate](https://ej2.syncfusion.com/documentation/api/data/predicate/) class.

### Build complex filter criteria using predicate

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) offers extensive capabilities for handling and manipulating data from various sources. While the [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method is suitable for basic filtering requirements, there are situations where more complex filter criteria are needed.

The [predicate](https://ej2.syncfusion.com/documentation/api/data/predicate/) class of `DataManager` provides a solution for complex filter cases. It allows developers to construct composite filter criteria, enabling precise data filtering in complex scenarios. The `predicate` consists of multiple conditions chained together using logical operators (and, or).

Follow these steps to use `predicate` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Initialize a new `query` object to start building your query.

2. Next, create a `predicate` object to define your complex filter criteria. Chain multiple conditions using logical operators such as **and** and **or**.

3. Apply the created predicate to the DataManager's `query` using the `where` method to fetch the filtered data.

The following example demonstrates how to filter complex data based on the **EmployeeID** field equal to **3** and **ShipCountry** field equal to **Germany** using the `predicate` method of `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query, ODataV4Adaptor, Predicate } from '@syncfusion/ej2-data';

const items = ref([]);

onMounted(() => {
  let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";

  let predicate = new Predicate('EmployeeID', 'equal', 3);
  predicate = predicate.and('ShipCountry', 'equal', 'Germany');

  let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
  });
  dataManager.executeQuery(new Query().where(predicate).take(12)).then((e) => {
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
import { DataManager, Query, ODataV4Adaptor, Predicate } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: [] 
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";

    let predicate = new Predicate('EmployeeID', 'equal', 3);
    predicate = predicate.and('ShipCountry', 'equal', 'Germany');

    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    dataManager.executeQuery(new Query().where(predicate).take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs6" %}

> While using the `Predicate` class, ensure that the conditions and logical operators are correctly applied to avoid unexpected filtering results.

## Searching

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) provides a robust built-in search method that allows searching for specific data across all fields in the data source. This method enhances the efficiency of filtering records based on user-defined search criteria, making it easier to locate relevant information within datasets.

The [search](https://ej2.syncfusion.com/documentation/api/data/query#search) method of [query](https://ej2.syncfusion.com/documentation/api/data/query) class enables you to create search criteria that apply to all data fields within the datasource. This is particularly useful when you need to find records containing a particular keyword anywhere in the displayed data.

To use the `search` method with `DataManager`, follow these steps:

1. Create a new `query` object to begin constructing your query.

2. Use the `search` method to define your search criteria.

3. Execute the query to fetch the searched data from the server using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`.

The following example demonstrates how to search data based on the **CustomerID** field with the searchkey of **VI** using the `search` method of `query` class of `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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

<script setup>
import { data } from './datasource.js';
import { DataManager, Query } from '@syncfusion/ej2-data';

const items = new DataManager(data).executeLocal(new Query().search('VI', ['CustomerID']));

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
{% highlight html tabtitle="(~/src/App.vue)" %}
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
      items: new DataManager(data).executeLocal(new Query().search('VI', ['CustomerID']))  
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs7" %}

## Grouping

Grouping in Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) allows you to organize records by category based on specified criteria, facilitating structured data organization. This is particularly useful for organizing and analyzing large datasets by grouping related records together.

The [group](https://ej2.syncfusion.com/documentation/api/data/query#group) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class enables you to apply grouping functionality to your data source seamlessly.

To use the `group` method with `DataManager`, follow these steps:

1. Create a new `query` object to begin constructing your query.

2. Use the `group` method to define your group query.

3. Execute the query to fetch the grouped data from the server using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`.

The following example demonstrates how to group data based on the **CustomerID** field using the `group` method of `query` class of `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tbody v-for="(group, key) in items" :key="key">
        <tr>
          <td>{{ group.field }} - {{ group.key }}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="(item, index) in group.items" :key="index">
          <td>{{ item.OrderID }}</td>
          <td>{{ item.CustomerID }}</td>
          <td>{{ item.EmployeeID }}</td>
          <td>{{ item.ShipCountry }}</td>
        </tr>
      </tbody>
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
  dataManager.executeQuery(new Query().group('CustomerID').take(12)).then((e) => {
    items.value = e.result;
  });
});
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
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tbody v-for="(group, key) in items" :key="key">
        <tr>
          <td>{{ group.field }} - {{ group.key }}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="(item, index) in group.items" :key="index">
          <td>{{ item.OrderID }}</td>
          <td>{{ item.CustomerID }}</td>
          <td>{{ item.EmployeeID }}</td>
          <td>{{ item.ShipCountry }}</td>
        </tr>
      </tbody>
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
    dataManager.executeQuery(new Query().group('CustomerID').take(12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs8" %}

## Paging

Paging in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) allows you to organize and retrieve data in smaller, manageable chunks or pages. This enhances performance and experience, especially when dealing with large datasets. 

The [page](https://ej2.syncfusion.com/documentation/api/data/query#page) method of [query](https://ej2.syncfusion.com/documentation/api/data/query) class is utilized to achieve paging functionality. This method allows you to specify the page size and index, enable to query a particular subset of records from the dataset.

Follow these steps to use `page` method with Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Initialize a new `query` object to start building your query.

2. Use the `page` method to define the page query.

3. Execute the query to retrieve the data from the server.

The following example demonstrates how to apply paging to the data using the `page` method of `query` class of `DataManager`.  In this example, the page index is set to **2**, and the page size is set to **12** using the `page` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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
  dataManager.executeQuery(new Query().page(2, 12)).then((e) => {
    items.value = e.result;
  });
});
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
    dataManager.executeQuery(new Query().page(2, 12)).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs9" %}

## Aggregation

The aggregates in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) facilitate the calculation of summarized values for specific fields based on predefined types. This functionality is particularly useful when you need to analyze numerical or boolean data within your dataset. It enables you to derive valuable information by summarizing and analyzing the data based on different criteria such as total sum, average value, minimum and maximum values, and counts of specific conditions.

To utilize the aggregation, you can use the [aggregate](https://ej2.syncfusion.com/documentation/api/data/query/#aggregate) method of the Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager class. This method allows you to specify the field for aggregation and the type of aggregation to perform.

Aggregates supports the follwing built-in types:

* **Sum:** Calculate the total sum of numeric values in the column.
* **Average:** Compute the average value of numeric data in the column.
* **Minimum:** Determine the minimum value among the numeric data in the column.
* **Maximum:** Identify the maximum value among the numeric data in the column.
* **Count:** Count the total number of records in the column.
* **True Count:** Count the occurrences of 'true' boolean values in the column.
* **False Count:** Count the occurrences of 'false' boolean values in the column.

The following example demonstrates how to calculate the **sum** of **EmployeeID** data using the   `aggregate` method of `query` class of `DataManager`. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
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
      <tr>
        <td></td>
        <td></td>
        <td>Sum: {{sum}}</td>
        <td></td>
      </tr>
    </table>   
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

const items = ref([]);
const sum = ref(0);

onMounted(() => {
  let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";

  let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
  });
  dataManager.executeQuery(new Query().take(8).requiresCount()
    .aggregate('sum', 'EmployeeID')).then((e) => {
      items.value = e.result;
      sum.value = e.aggregates['EmployeeID - sum'];
    }
  );
});
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
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Sum: {{sum}}</td>
        <td></td>
      </tr>
    </table>   
  </div>
</template>

<script>
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: [],
      sum: 0 
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";

    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    dataManager.executeQuery(new Query().take(8).requiresCount()
      .aggregate('sum', 'EmployeeID')).then((e) => {
        this.items = e.result;
        this.sum = e.aggregates['EmployeeID - sum'];
      }
    );
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs10" %}

## Hierarchical query

The hierarchical query in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) allows you to fetch data in a hierarchical structure, making it easier to display and analyze such data in applications. This is Essential<sup style="font-size:70%">&reg;</sup> when dealing with data structures that have parent-child relationships, such as hierarchical data or data with foreign key bindings.

The [hierarchy](https://ej2.syncfusion.com/documentation/api/data/query#hierarchy) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class enables you to retrieve hierarchical data from a data source.

Follow these steps to perform a hierarchical query using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

* Utilize the [foreignKey](https://ej2.syncfusion.com/documentation/api/data/query/#foreignkey) method to specify the key field of the foreign table, which establishes the relationship between the primary and foreign tables.
* Call the [hierarchy](https://ej2.syncfusion.com/documentation/api/data/query/#hierarchy) method, passing a selector function as the second argument. This function selects the records from the foreign table based on the specified key field.
* Execute the `query` to retrieve the nested data structure.

The following example demonstrates how to work with hierarchical binding using `hierarchy` method of `DataManager` class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <table class='e-table'>
      <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
        <th>Ship Country</th>
      </tr>
      <tbody v-for="(item, index) in items" :key="index">
        <tr>
          <td>{{ item.OrderID }}</td>
          <td>{{ item.CustomerID }}</td>
          <td>{{ item.EmployeeID }}</td>
          <td>{{ item.ShipCountry }}</td>
        </tr>
        <tr>
          <td :colspan="4">
            <table class='e-table'>
              <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product</th>              
            </tr>
            <tbody v-for="(order, index) in item.Order_Details" :key="index">
              <tr>
                <td>{{ order.OrderID }}</td>
                <td>{{ order.UnitPrice }}</td>
                <td>{{ order.Quantity }}</td>
                <td>{{ order.ProductID }}</td>
              </tr>
            </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

const items = ref([]);

onMounted(() => {
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/";

    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    
    dataManager.executeQuery(new Query().from('Orders').take(3)
      .hierarchy(
        new Query()
          .foreignKey('OrderID')
          .from('Order_Details'),
        () => [10248, 10249, 10250] // Selective loading of child elements
      )).then((e) => {
      items.value = e.result;
    });
  });
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
      <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
        <th>Ship Country</th>
      </tr>
      <tbody v-for="(item, index) in items" :key="index">
        <tr>
          <td>{{ item.OrderID }}</td>
          <td>{{ item.CustomerID }}</td>
          <td>{{ item.EmployeeID }}</td>
          <td>{{ item.ShipCountry }}</td>
        </tr>
        <tr>
          <td :colspan="4">
            <table class='e-table'>
              <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product</th>              
            </tr>
            <tbody v-for="(order, index) in item.Order_Details" :key="index">
              <tr>
                <td>{{ order.OrderID }}</td>
                <td>{{ order.UnitPrice }}</td>
                <td>{{ order.Quantity }}</td>
                <td>{{ order.ProductID }}</td>
              </tr>
            </tbody>
            </table>
          </td>
        </tr>
      </tbody>
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
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/";

    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    
    dataManager.executeQuery(new Query().from('Orders').take(3)
      .hierarchy(
        new Query()
          .foreignKey('OrderID')
          .from('Order_Details'),
        () => [10248, 10249, 10250] // Selective loading of child elements
      )).then((e) => {
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
        
{% previewsample "page.domainurl/code-snippet/data/querying/default-cs11" %}