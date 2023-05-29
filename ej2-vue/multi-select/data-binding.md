---
layout: post
title: Data binding in Vue Multi select component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Multi select component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Multi select component

The MultiSelect loads the data either from local data sources or remote data services using the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#datasource) property. It supports the data type of `array` or `DataManager`.

The MultiSelect also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| text |  `string` | Specifies the display text of each list item. |
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item. |

> When binding complex data to the MultiSelect, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

Local data can be represented in two ways as described below.

### 1. Array of string

The MultiSelect has support to load array of primitive data such as strings and numbers. Here, both value and text field act the same.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/data-binding/simple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/data-binding/simple-cs1" %}

### 2. Array of object

The MultiSelect can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#fields) property.

In the following example, `id` column and `sports` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/data-binding/json-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/data-binding/json-cs1" %}

### 3. Array of complex object

The MultiSelect can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#fields) property.

In the following example, `Code.Id` column and `Country.Name` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/data-binding/complex-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/data-binding/complex-cs1" %}

## Binding remote data

The MultiSelect supports retrieval of data from remote data services with the help of `DataManager` component. The [Query](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#query) property is used to fetch data from the database and bind it to the MultiSelect.

The following sample displays the first 6 contacts from “Customers” table of the `Northwind` Data Service.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/data-binding/remote-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/data-binding/remote-cs1" %}

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping/)
* [How to filter the bound data](./filtering/)