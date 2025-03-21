---
layout: post
title: Data binding in Vue Grid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Grid component

Data binding is a fundamental technique that empowers the Grid component to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely. 

The Syncfusion Grid utilizes the **DataManager**, which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

It supports two kinds of data binding methods:

* Local data
* Remote data

To learn about how to bind local, remote or observables data to Vue Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Vos7RCR6-uw" %}

## Loading indicator

The Syncfusion Vue Grid offers a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, you can utilize the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/vue/documentation/api/grid/loadingIndicatorModel/) property of the grid, which supports two types of indicators:

* Spinner (default indicator)
* Shimmer

The following example demonstrates how to set the `loadingIndicator.indicatorType` property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method is used to apply the changes and display the updated loading indicator type. 
W
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/local-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/local-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/local-data-cs1" %}

## Refresh the datasource using property

Refreshing the data source in a Syncfusion Grid involves updating the data that the grid displays dynamically. This operation is essential when you need to reflect changes in the underlying data without reloading the entire page or component.

To achieve this, you can make use of the [datasource](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property in conjunction with the [setProperties](https://ej2.syncfusion.com/vue/documentation/api/grid/#refresh) method. This ensures that the grid reflects the changes in the data source without requiring a complete page or component reload.

For example, if you add or delete data source records, follow these steps:

**Step 1**: Add/delete the datasource record by using the following code.

```typescript
this.$refs.grid.ej2Instances.dataSource.unshift(data); // Add a new record.
this.$refs.grid.ej2Instances.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:  Refresh the datasource after changes by invoking the `setProperties` method.

```typescript
 this.$refs.grid.ej2Instances.setProperties({ dataSource:  this.$refs.grid.ej2Instances..dataSource});

```
The following example demonstrates adding a new record to the data source through an external button:


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/local-data-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/local-data-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/local-data-cs2" %}

## Dynamically change the datasource or columns or both

The Grid component in Syncfusion allows dynamic modification of the data source, columns, or both . This feature is particularly valuable when you need to refresh the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, you can utilize the [changeDataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/#changedatasource) method. This method enables you to update the data source, columns, or both, based on your application's requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset.The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

**1. Change both data source and columns:**

To modify both the existing columns and the data source, you need to pass the both arguments to the `changeDataSource` method. The following example demonstrates how to change both the data source and columns.

You can assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property to bind local data to the grid. The code below provides an example of how to create a data source for the grid.

```typescript
    export let data= [
    {
        OrderID: 10248, CustomerID: 'VINET', Freight: 32.38,
        ShipCity: 'Reims'
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61,
        ShipCity: 'Münster'
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', Freight: 61.34,
        ShipCity: 'Rio de Janeiro'
    }];
```

The following code demonstrates how to create the [columns](https://ej2.syncfusion.com/vue/documentation/grid/columns/columns) for the grid, which are based on the provided grid data source.

```typescript
    newColumn= [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 125 },
    ];
```

The following code demonstrates updating the data source and columns defined above using the `changeDataSource` method.

```typescript
    this.$refs.grid.ej2Instances.changeDataSource(data, newColumn);
```

**2. Modify only the existing columns:**

To modify the existing columns in a grid, you can either add or remove columns or change the entire set of columns using the [changeDataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/#changedatasource) method. To use this method, you should set the first parameter to null and provide the new columns as the second parameter. However, please note that if a column field is not specified in the data source, its corresponding column values will be empty. The following example illustrates how to modify existing columns.

The following code demonstrates how to add new columns with existing grid columns ('newColumn') by using `changeDataSource` method.

```typescript
    newColumn1= [
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
    ];
    let column: any = this.newColumn.push(...this.newColumn1);
    this.$refs.grid.ej2Instances..changeDataSource(null, column);
```

**3. Modify only the data source:**

You can change the entire data source in the grid using the `changeDataSource` method. To use this method, you should provide the data source as the first argument, and  the second argument which is optional can be used to specify new columns for the grid. If you are not specifying the columns, the grid will generate the columns automatically based on the data source. The following example demonstrates how to modify the data source.

You can assign a JavaScript object array to the `dataSource` property to bind local data to the grid. The code below provides an example of how to create a new data source for the grid.

```typescript
     export let employeeData = [
    {
        FirstName: 'Nancy', City: 'Seattle', Region: 'WA',
        Country: 'USA'
    },
    {
        FirstName: 'Andrew', City: 'London', Region: null,
        Country: 'UK',
    },
    {
        FirstName: 'Janet', City: 'Kirkland', Region: 'WA',
        Country: 'USA'
    }];
```

The following code demonstrates, how to use the `changeDataSource` method to bind the new **employeeData** to the grid.

```typescript
    this.$refs.gridInstance.ej2Instances.changeDataSource(employeeData);
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/local-data-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/local-data-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/local-data-cs3" %}

>* The Grid state persistence feature does not support the  `changeDataSource` method.
>* In this document, the above sample uses the local data for `changeDataSource` method. For those using a remote data source, refer to the [FlexibleData](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/grid/flexible-data) resource.

## See also

* [Binding a firebase data source to Grid using vueFire2](https://www.syncfusion.com/blogs/post/binding-a-firebase-data-source-to-grid-using-vuefire2.aspx)
* [How to bind SQL Server data in vue DataGrid using SqlClient data provider](https://www.syncfusion.com/kb/11453/how-to-bind-sql-server-data-in-vue-datagrid-using-sqlclient-data-provider)

## Prevent to convert local time zone format for date column

By default, Syncfusion Vue Grid automatically converts date values to the local time zone of the client system. However, in some scenarios, you may need to display the original date as received from the server without any timezone conversion.

To prevent timezone conversion for a date column, use the `serverTimezoneOffset` property from `DataUtil`. Setting this property to **0** ensures that dates remain in the original format received from the server without conversion to the local timezone.

The following example demonstrates how to prevent local time zone conversion for date columns in Grid by using the `DataUtil.serverTimezoneOffset` property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/databinding-timezone/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/databinding-timezone/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/databinding-timezone" %}