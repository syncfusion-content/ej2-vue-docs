---
layout: post
title: Bind data & perform CRUD with WebMethodAdaptor in Syncfusion Grid
description: Learn here all about how to bind data and perform CRUD action using WebMethodAdaptor in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: grid
keywords: Adaptors, webmethodadaptor, web method adaptor, remotedata 
documentation: ug
domainurl: ##DomainURL##
---

# WebMethodAdaptor in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid Component

The WebMethodAdaptor in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid facilitates data binding from remote services using web methods. This powerful feature enables efficient communication between the client-side application and the server. The WebMethodAdaptor, like the URL adaptor, sends query parameters encapsulated within an object named **value**. Within this **value** object, various datamanager properties such as **requiresCounts**, **skip**, **take**, **sorted**, and **where** queries are included.

![Webmethod Adaptor](../images/web-method-adaptor-value.png)

This section describes a step-by-step process for retrieving data using WebMethodAdaptor, then binding it to the Vue Grid component to facilitate data and CRUD operations.

## Creating an API service

To configure a server with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid, you need to follow the below steps:

**1. Project Creation:**

Open Visual Studio and create an Vue and ASP.NET Core project named **WebMethodAdaptor**. To create an Vue and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-vue?view=vs-2022) for detailed steps.

**2. Model Class Creation:**

Create a model class named **OrdersDetails.cs** in the server-side **Models** folder to represent the order data.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

 namespace WebMethodAdaptor.Server.Models
 {
 public class OrdersDetails
 {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
    DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
    DateTime ShippedDate, string ShipAddress)
    {
    this.OrderID = OrderID;
    this.CustomerID = CustomerId;
    this.EmployeeID = EmployeeId;
    this.Freight = Freight;
    this.ShipCity = ShipCity;
    this.Verified = Verified;
    this.OrderDate = OrderDate;
    this.ShipName = ShipName;
    this.ShipCountry = ShipCountry;
    this.ShippedDate = ShippedDate;
    this.ShipAddress = ShipAddress;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
    if (order.Count() == 0)
    {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
        order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
        order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
        order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
        order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
        order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
        code += 5;
        }
    }
    return order;
    }

    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public double? Freight { get; set; }
    public string? ShipCity { get; set; }
    public bool? Verified { get; set; }
    public DateTime OrderDate { get; set; }
    public string? ShipName { get; set; }
    public string? ShipCountry { get; set; }
    public DateTime ShippedDate { get; set; }
    public string? ShipAddress { get; set; }
 }
}

{% endhighlight %}
{% endtabs %}

**3. API Controller Creation:**

Create a file named `GridController.cs` under the **Controllers** folder. This controller will handle data communication with the Vue Grid component.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebMethodAdaptor.Server.Models;

namespace WebMethodAdaptor.Server.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GridController : ControllerBase
  {
    
    // method to retrieve data
    [HttpGet]
    [Route("api/[controller]")]
    public List<OrdersDetails> GetOrderData()
    {
        // Retrieve all records and convert to list
        var data = OrdersDetails.GetAllRecords().ToList();
        return data;
    }

     // method to handle incoming data manager requests
    [HttpPost]
    [Route("api/[controller]")]
    public object Post()
    {
        // Retrieve data source and convert to queryable
        IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

        // Initialize QueryableOperation
        QueryableOperation queryableOperation = new QueryableOperation();

        // Get total record count
        int totalRecordsCount = DataSource.Count();

        // Return result and total record count
        return new { result = DataSource, count = totalRecordsCount };
    }
  }
}

{% endhighlight %}
{% endtabs %}

> The **GetOrderData** method retrieves sample order data. You can replace it with your custom logic to fetch data from a database or any other source.

**4. Run the Application:**

Run the application in Visual Studio. It will be accessible on a URL like **https://localhost:xxxx**. 

After running the application, you can verify that the server-side API controller is successfully returning the order data in the URL(https://localhost:xxxx/api/Grid). Here **xxxx** denotes the port number.

![WebMethodAdaptor-data](../images/url-adaptor-data.jpeg)

## Connecting Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid to an API service

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component into your Vue and ASP.NET Core project using Visual Studio, follow the steps below:

**Step 1:** Install Syncfusion<sup style="font-size:70%">&reg;</sup> Package

Open your terminal in the project’s client folder and install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages using npm:

```bash
npm install @syncfusion/ej2-vue-grids --save
npm install @syncfusion/ej2-data --save
```

**Step 2:** Clean Up App.vue and main.css

Remove unnecessary default codes in `App.vue` and `main.css`.

**Step 3:** Adding CSS Reference

Include the necessary CSS files in your `App.Vue` file to style the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css';
```

**Step 4:** Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid Component

To add the Vue Grid component using **Composition API** or **Options API**, follow these steps:

In your `App.vue`, import `DataManager` and `WebMethodAdaptor` from` @syncfusion/ej2-data`. Create a `DataManager` instance specifying the URL of your API endpoint(https:localhost:xxxx/api/Grid) using the `url` property and set the adaptor `WebMethodAdaptor`.

The following example demonstrates how to bind remote data to the grid component using `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data'>
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		adaptor: new WebMethodAdaptor(),
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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data'>
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					adaptor: new WebMethodAdaptor(),
				}),
			};
		},
	};
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
{% endhighlight %}

{% endtabs %}

> Replace https://localhost:xxxx/api/grid with the actual **URL** of your API endpoint that provides the data in a consumable format (e.g., JSON).

Run the application in Visual Studio. It will be accessible on a URL like **https://localhost:xxxx**.

> Ensure your API service is configured to handle CORS (Cross-Origin Resource Sharing) if necessary.
  ```cs
  [program.cs]
  builder.Services.AddCors(options =>
  {
    options.AddDefaultPolicy(builder =>
    {
      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
  });
  var app = builder.Build();
  app.UseCors();
  ```

> You can find the complete sample of WebMethodAdaptor in the [GitHub](https://github.com/SyncfusionExamples/Binding-data-from-remote-service-to-vue-data-grid) link.

![WebMethodAdaptor](../images/adaptor.gif)

> * The <sup style="font-size:70%">&reg;</sup> Grid component provides built-in support for handling various data operations such as searching, sorting, filtering, aggregate and paging on the server-side. These operations can be handled using methods such as [PerformSearching](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformSearching__1_System_Linq_IQueryable___0__System_Collections_Generic_List_Syncfusion_EJ2_Base_SearchFilter__), [PerformFiltering](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformFiltering__1_System_Linq_IQueryable___0__System_Collections_Generic_List_Syncfusion_EJ2_Base_WhereFilter__System_String_), [PerformSorting](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformSorting__1_System_Linq_IQueryable___0__System_Collections_Generic_List_Syncfusion_EJ2_Base_Sort__), [PerformTake](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformTake__1_System_Linq_IQueryable___0__System_Int32_) and [PerformSkip](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformSkip__1_System_Linq_IQueryable___0__System_Int32_) available in the `Syncfusion.EJ2.AspNet.Core` package. Let’s explore how to manage these data operations using the `WebMethodAdaptor`.
> * In an API service project, add `Syncfusion.EJ2.AspNet.Core` by opening the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search and install it.
> * To access [DataManagerRequest](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.DataManagerRequest.html) and [QueryableOperation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html), import `Syncfusion.EJ2.Base` in `GridController.cs` file.
> * In the WebMethodAdaptor configuration, the properties of the DataManager object are encapsulated within an object named **value**. To access the DataManager properties, a dedicated class is created, representing the **value** object.
    ```cs
    // Model for handling data manager requests
    public class DataManager
    {
        public required DataManagerRequest Value { get; set; }
    }
    ```


## Handling searching operation

To handle searching operation, ensure that your API endpoint supports custom searching criteria. Implement the searching logic on the server-side using the [PerformSearching](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformSearching__1_System_Linq_IQueryable___0__System_Collections_Generic_List_Syncfusion_EJ2_Base_SearchFilter__) method from the [QueryableOperation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html) class. This allows the custom data source to undergo searching based on the criteria specified in the incoming [DataManagerRequest](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.DataManagerRequest.html) object

![WebMethodAdaptor searching](../images/web-method-adaptor-searching.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}
    [HttpPost]
    public object Post([FromBody] DataManager DataManagerRequest)
    {
        // Retrieve data from the data source (e.g., database)
        IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

        QueryableOperation queryableOperation = new QueryableOperation(); // Initialize QueryableOperation instance

        // Retrieve data manager value
        DataManagerRequest DataManagerParams = DataManagerRequest.Value;

        // Handling Searching
        if (DataManagerParams.Search != null && DataManagerParams.Search.Count > 0)
        {
        DataSource = queryableOperation.PerformSearching(DataSource, DataManagerParams.Search);
        }
        // Get the total records count
        int totalRecordsCount = DataSource.Count();

        // Return data based on the request
        return new { result = DataSource, count = totalRecordsCount };
    }

    // Model for handling data manager requests
    public class DataManager
    {
        public required DataManagerRequest Value { get; set; }
    }
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :toolbar="toolbar">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		adaptor: new WebMethodAdaptor(),
	});
	const toolbar = ['Search'];

	provide('grid', [Toolbar]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :toolbar="toolbar">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					adaptor: new WebMethodAdaptor(),
				}),
				toolbar: ['Search'],
			};
		},
		provide: {
			grid: [Toolbar]
		}
	};
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
{% endhighlight %}

{% endtabs %}

## Handling filtering operation

To handle filtering operation, ensure that your API endpoint supports custom filtering criteria. Implement the filtering logic on the server-side using the [PerformFiltering](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformFiltering__1_System_Linq_IQueryable___0__System_Collections_Generic_List_Syncfusion_EJ2_Base_WhereFilter__System_String_) method from the [QueryableOperation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html) class. This allows the custom data source to undergo filtering based on the criteria specified in the incoming [DataManagerRequest](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.DataManagerRequest.html) object.

**Single column filtering**
![Single column filtering](../images/web-method-adaptor-filtering.png)

**Multi column filtering**
![Multi column filtering](../images/web-method-adaptor-multi-filtering.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}
[HttpPost]
public object Post([FromBody] DataManager DataManagerRequest)
{
    // Retrieve data from the data source (e.g., database)
    IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

    QueryableOperation queryableOperation = new QueryableOperation(); // Initialize QueryableOperation instance

    // Retrieve data manager value
    DataManagerRequest DataManagerParams = DataManagerRequest.Value;

    if (DataManagerParams.Where != null && DataManagerParams.Where.Count > 0)
    {
        // Handling filtering operation
        foreach (var condition in DataManagerParams.Where)
        {
            foreach (var predicate in condition.predicates)
            {
                DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerParams.Where, predicate.Operator);
            }
        }
    }
    // Get the total records count
    int totalRecordsCount = DataSource.Count();

    // Return data based on the request
    return new { result = DataSource, count = totalRecordsCount };
}

// Model for handling data manager requests
public class DataManager
{
    public required DataManagerRequest Value { get; set; }
}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :allowFiltering="true">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		adaptor: new WebMethodAdaptor(),
	});

	provide('grid', [Filter]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :allowFiltering="true">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					adaptor: new WebMethodAdaptor(),
				}),
			};
		},
		provide: {
			grid: [Filter]
		}
	};
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
{% endhighlight %}

{% endtabs %}

## Handling sorting operation

To handle sorting operation, ensure that your API endpoint supports custom sorting criteria. Implement the sorting logic on the server-side using the [PerformSorting](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformSorting__1_System_Linq_IQueryable___0__System_Collections_Generic_List_Syncfusion_EJ2_Base_Sort__) method from the [QueryableOperation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html) class. This allows the custom data source to undergo sorting based on the criteria specified in the incoming [DataManagerRequest](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.DataManagerRequest.html) object.

**Single column sorting**
![Single column sorting](../images/web-method-adaptor-sorting.png)

**Multi column sorting**
![Multi column sorting](../images/web-method-adaptor-multi-sorting.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}
[HttpPost]
public object Post([FromBody] DataManager DataManagerRequest)
{
    // Retrieve data from the data source (e.g., database)
    IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

    QueryableOperation queryableOperation = new QueryableOperation(); // Initialize QueryableOperation instance

    // Retrieve data manager value
    DataManagerRequest DataManagerParams = DataManagerRequest.Value;

    // Handling Sorting operation
    if (DataManagerParams.Sorted != null && DataManagerParams.Sorted.Count > 0)
    {
        DataSource = queryableOperation.PerformSorting(DataSource, DataManagerParams.Sorted);
    }

    // Get the total count of records
    int totalRecordsCount = DataSource.Count();

    // Return data based on the request
    return new { result = DataSource, count = totalRecordsCount };
}

// Model for handling data manager requests
public class DataManager
{
    public required DataManagerRequest Value { get; set; }
}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :allowSorting="true">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		adaptor: new WebMethodAdaptor(),
	});
	provide('grid', [Sort]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :allowSorting="true">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Sort } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					adaptor: new WebMethodAdaptor(),
				}),
			};
		},
		provide: {
			grid: [Sort]
		}
	};
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
{% endhighlight %}

{% endtabs %}

## Handling paging operation

To handle paging operation, ensure that your API endpoint supports custom paging criteria. Implement the paging logic on the server-side using the [PerformTake](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformTake__1_System_Linq_IQueryable___0__System_Int32_) and [PerformSkip](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html#Syncfusion_EJ2_Base_QueryableOperation_PerformSkip__1_System_Linq_IQueryable___0__System_Int32_) method from the [QueryableOperation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.QueryableOperation.html) class. This allows the custom data source to undergo paging based on the criteria specified in the incoming [DataManagerRequest](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Base.DataManagerRequest.html) object.

![WebMethodAdaptor paging](../images/web-method-adaptor-paging.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}
[HttpPost]
public object Post([FromBody] DataManager DataManagerRequest)
{
    // Retrieve data from the data source (e.g., database)
    IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

    // Get the total records count
    int totalRecordsCount = DataSource.Count();

    QueryableOperation queryableOperation = new QueryableOperation(); // Initialize QueryableOperation instance

    // Retrieve data manager value
    DataManagerRequest DataManagerParams = DataManagerRequest.Value;

    // Handling paging operation.
    if (DataManagerParams.Skip != 0)
    {
        // Paging
        DataSource = queryableOperation.PerformSkip(DataSource, DataManagerParams.Skip);
    }
    if (DataManagerParams.Take != 0)
    {
        DataSource = queryableOperation.PerformTake(DataSource, DataManagerParams.Take);
    }

    // Return data based on the request
    return new { result = DataSource, count = totalRecordsCount };
}

// Model for handling data manager requests
public class DataManager
{
    public required DataManagerRequest Value { get; set; }
}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :allowPaging="true">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		adaptor: new WebMethodAdaptor(),
	});

	provide('grid', [Page]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :allowPaging="true">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Page } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					adaptor: new WebMethodAdaptor(),
				}),
			};
		},
		provide: {
			grid: [Page]
		}
	};
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
{% endhighlight %}

{% endtabs %}

## Handling CRUD operations

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid Component seamlessly integrates CRUD (Create, Read, Update, Delete) operations with server-side controller actions through specific properties: [insertUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_InsertUrl), [removeUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_RemoveUrl), [updateUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_UpdateUrl), [crudUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_CrudUrl), and [batchUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_BatchUrl). These properties enable the grid to communicate with the data service for every grid action, facilitating server-side operations.

**CRUD Operations Mapping**

CRUD operations within the grid can be mapped to server-side controller actions using specific properties:

1. **insertUrl**: Specifies the URL for inserting new data.
2. **removeUrl**: Specifies the URL for removing existing data.
3. **updateUrl**: Specifies the URL for updating existing data.
4. **crudUrl**: Specifies a single URL for all CRUD operations.
5. **batchUrl**: Specifies the URL for batch editing.

To enable editing in Vue Grid component, refer to the editing [documentation](https://ej2.syncfusion.com/vue/documentation/grid/editing/edit). In the below example, the inline edit [mode](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) is enabled and [toolbar](https://helpej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property is configured to display toolbar items for editing purposes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		insertUrl: 'https://localhost:xxxx/api/Grid/Insert',
		updateUrl: 'https://localhost:xxxx/api/Grid/Update',
		removeUrl: 'https://localhost:xxxx/api/Grid/Remove',
		adaptor: new WebMethodAdaptor(),
	});
	const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
	const toolbar = ['Add', 'Update', 'Delete', 'Cancel', 'Search'];

	provide('grid', [Edit, Toolbar]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit, Sort, Page, Filter } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					insertUrl: 'https://localhost:xxxx/api/Grid/Insert',
					updateUrl: 'https://localhost:xxxx/api/Grid/Update',
					removeUrl: 'https://localhost:xxxx/api/Grid/Remove',
					adaptor: new WebMethodAdaptor(),
				}),
				toolbar: ['Add', 'Update', 'Delete', 'Cancel', 'Search'],
				editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
			};
		},
		provide: {
			grid: [Toolbar, Edit]
		}
	};
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
{% endhighlight %}

{% endtabs %}

> Normal/Inline editing is the default edit [mode](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) for the Grid component. To enable CRUD operations, ensure that the [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#isprimarykey) property is set to **true** for a specific Grid column, ensuring that its value is unique.

The below class is used to structure data sent during CRUD operations.

```cs
public class CRUDModel<T> where T : class
{
  public string? action { get; set; }
  public string? keyColumn { get; set; }
  public object? key { get; set; }
  public T? value { get; set; }
  public List<T>? added { get; set; }
  public List<T>? changed { get; set; }
  public List<T>? deleted { get; set; }
  public IDictionary<string, object>? @params { get; set; }
}
```

**Insert operation:**

To insert a new record, utilize the [insertUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_InsertUrl) property to specify the controller action mapping URL for the insert operation. The newly added record details are bound to the **newRecord** parameter.

![Insert record](../images/web-method-adaptor-insert-record.png)

```cs

/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="newRecord">It contains the new record detail which is need to be inserted.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("api/[controller]/Insert")]
public void Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
{
    // Check if new record is not null
    if (newRecord.value != null)
    {
        // Insert new record
        OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
    }
}
```

**Update operation:**

For updating existing records, utilize the [updateUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_UpdateUrl) property to specify the controller action mapping URL for the update operation. The updated record details are bound to the **updatedRecord** parameter.

![Update record](../images/web-method-adaptor-update-record.png)

```cs

/// <summary>
/// Update a existing data item from the data collection.
/// </summary>
/// <param name="updatedRecord">It contains the updated record detail which is need to be updated.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("api/[controller]/Update")]
public void Update([FromBody] CRUDModel<OrdersDetails> updatedRecord)
{
    // Retrieve updated order
    var updatedOrder = updatedRecord.value;
    if (updatedOrder != null)
    {
        // Find existing record
        var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
        if (data != null)
        {
            // Update existing record
            data.OrderID = updatedOrder.OrderID;
            data.CustomerID = updatedOrder.CustomerID;
            data.ShipCity = updatedOrder.ShipCity;
            data.ShipCountry = updatedOrder.ShipCountry;
            // Update other properties similarly
        }
    }
}
```

**Delete operation**

To delete existing records, use the [removeUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DataManager.html#Syncfusion_EJ2_DataManager_RemoveUrl) property to specify the controller action mapping URL for the delete operation. The primary key value of the deleted record is bound to the **deletedRecord** parameter.

![Delete Record](../images/web-method-adaptor-delete-record.png)

```cs
/// <summary>
/// Remove a specific data item from the data collection.
/// </summary>
/// <param name="deletedRecord">It contains the specific record detail which is need to be removed.</param>
/// <return>Returns void</return>
[HttpPost]
[Route("api/[controller]/Remove")]
public void Remove([FromBody] CRUDModel<OrdersDetails> deletedRecord)
{
    int orderId = int.Parse(deletedRecord.key.ToString()); // get key value from the deletedRecord
    var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
    if (data != null)
    {
        // Remove the record from the data collection
        OrdersDetails.GetAllRecords().Remove(data);
    }
}
```

![WebMethodAdaptor CRUD operations](../images/adaptor-crud-operation.gif)

**Single method for performing all CRUD operations**

Using the `crudUrl` property, the controller action mapping URL can be specified to perform all the CRUD operation at server-side using a single method instead of specifying separate controller action method for CRUD (insert, update and delete) operations.

The following code example describes the above behavior.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		crudUrl: 'https://localhost:xxxx/api/Grid/CrudUpdate',
		adaptor: new WebMethodAdaptor(),
	});
	const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
	const toolbar = ['Add', 'Update', 'Delete', 'Cancel', 'Search'];

	provide('grid', [Edit, Toolbar]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					crudUrl: 'https://localhost:xxxx/api/Grid/CrudUpdate',
					adaptor: new WebMethodAdaptor(),
				}),
				toolbar: ['Add', 'Update', 'Delete', 'Cancel', 'Search'],
				editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
			};
		},
		provide: {
			grid: [Toolbar, Edit]
		}
	};
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
{% endhighlight %}

{% endtabs %}

```cs

[HttpPost]
[Route("api/[controller]/CrudUpdate")]
public void CrudUpdate([FromBody] CRUDModel<OrdersDetails> request)
{
  // perform update operation
  if (request.action == "update")
  {
    var orderValue = request.value;
    OrdersDetails existingRecord = OrdersDetails.GetAllRecords().Where(or => or.OrderID == orderValue.OrderID).FirstOrDefault();
    existingRecord.OrderID = orderValue.OrderID;
    existingRecord.CustomerID = orderValue.CustomerID;
    existingRecord.ShipCity = orderValue.ShipCity;
  }
  // perform insert operation
  else if (request.action == "insert")
  {
    OrdersDetails.GetAllRecords().Insert(0, request.value);
  }
  // perform remove operation
  else if (request.action == "remove")
  {
    OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == int.Parse(request.key.ToString())).FirstOrDefault());
  }
}
```

**Batch operation**

To perform batch operation, define the edit [mode](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) as **Batch** and specify the `batchUrl` property in the DataManager. Use the **Add** toolbar button to insert new row in batch editing mode. To edit a cell, double-click the desired cell and update the value as required. To delete a record, simply select the record and press the **Delete** toolbar button. Now, all CRUD operations will be executed in single request. Clicking the **Update** toolbar button will update the newly added, edited, or deleted records from the OrdersDetails table using a single API POST request.

{% tabs%}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
	<div id="app">
		<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings">
			<e-columns>
				<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
				<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
				<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
				<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
			</e-columns>
		</ejs-grid>
	</div>
</template>
<script setup>
	import { provide } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Edit, Sort, Filter, Toolbar } from "@syncfusion/ej2-vue-grids";
	import { DataManager, WebMethodAdaptor } from "@syncfusion/ej2-data";

	const data = new DataManager({
		url: 'https://localhost:xxxx/api/Grid',
		batchUrl: 'https://localhost:xxxx/api/Grid/BatchUpdate',
		adaptor: new WebMethodAdaptor(),
	});
	const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
	const toolbar = ['Add', 'Update', 'Delete', 'Cancel', 'Search'];

	provide('grid', [Edit, Toolbar]);

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
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
	<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:xxxx/api/Grid',
					batchUrl: 'https://localhost:xxxx/api/Grid/BatchUpdate',
					adaptor: new WebMethodAdaptor(),
				}),
				toolbar: ['Add', 'Update', 'Delete', 'Cancel'],
				editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
			};
		},
		provide: {
			grid: [Toolbar, Edit]
		}
	};
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
{% endhighlight %}
{% endtabs %}

```cs
[HttpPost]
[Route("api/[controller]/BatchUpdate")]
public IActionResult BatchUpdate([FromBody] CRUDModel<OrdersDetails> batchOperation)
{
  if (batchOperation.added != null)
  {
    foreach (var addedOrder in batchOperation.added)
    {
      OrdersDetails.GetAllRecords().Insert(0, addedOrder);
    }
  }
 if (batchOperation.changed != null)
  {
    foreach (var changedOrder in batchOperation.changed)
    {
      var existingOrder = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == changedOrder.OrderID);
      if (existingOrder != null)
      {
        existingOrder.CustomerID = changedOrder.CustomerID;
        existingOrder.ShipCity = changedOrder.ShipCity;
        // Update other properties as needed
      }
    }
  }
if (batchOperation.deleted != null)
  {
    foreach (var deletedOrder in batchOperation.deleted)
    {
      var orderToDelete = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == deletedOrder.OrderID);
      if (orderToDelete != null)
      {
        OrdersDetails.GetAllRecords().Remove(orderToDelete);
      }
    }
  }
  return Json(batchOperation);
}
```
![WebMethodAdaptor Batch Editing](../images/url-adaptor-batch-editing.gif)

> You can find the complete sample for the WebMethodAdaptor in [GitHub](https://github.com/SyncfusionExamples/Binding-data-from-remote-service-to-vue-data-grid) link.