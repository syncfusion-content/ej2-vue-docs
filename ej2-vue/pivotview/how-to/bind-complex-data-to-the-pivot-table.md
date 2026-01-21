---
layout: post
title: Complex JSON to flat JSON in Vue | Syncfusion
description: Learn here all about how to convert complex JSON to flat JSON and assign it to the pivot table in Syncfusion Vue of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Convert complex JSON to flat JSON and assign it to the pivot table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Complex JSON to flat JSON in Vue Pivot Table component

## Overview

The Vue Pivot Table component requires data in flat JSON format for proper binding. This guide explains how to convert complex, nested JSON structures to flat JSON format and bind it to the pivot table.

## Understanding complex vs flat JSON

Complex JSON contains nested objects and arrays, making it difficult to directly bind to the pivot table. For example:

```json
{
  "CustomerID": "VINET",
  "Freight": 32.38,
  "OrderDetails": [
    {
      "OrderID": 10248,
      "OrderDate": "1996-07-04T10:10:00.000Z"
    }
  ],
  "ShipDetails": [
    {
      "ShipName": "Vins et alcools Chevalier",
      "ShipAddress": "59 rue de l'Abbaye",
      "ShipCity": "Reims",
      "ShipRegion": null,
      "ShipCountry": "France",
      "ShippedDate": "1996-07-16T12:20:00.000Z"
    }
  ]
}
```

Flat JSON has a simple key-value structure without nesting, which is suitable for pivot table binding:

```json
{
  "CustomerID": "VINET",
  "Freight": 32.38,
  "OrderID": 10248,
  "OrderDate": "1996-07-04T10:10:00.000Z",
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": null,
  "ShipCountry": "France",
  "ShippedDate": "1996-07-16T12:20:00.000Z"
}
```

## Implementation

You can convert complex JSON to flat JSON programmatically and bind it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#datasource) property in the [`load`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#load) event.

In the following example, the **complexToFlatJson()** method is used to convert complex JSON to flat JSON and bind it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#datasource) property, then modifying the field names in the [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#rows) and [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#columns) based on the converted flat JSON under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#datasourcesettings) in the [`load`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#load) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs268/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs268/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs268" %}