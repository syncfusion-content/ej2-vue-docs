---
layout: post
title: Data Binding in Vue AutoComplete | Syncfusion
description: Bind the Syncfusion Vue AutoComplete to local arrays, OData, OData V4, Web API, XML, JSON, or JSONP via DataManager adaptors.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Vue AutoComplete

The AutoComplete loads the data either from local data sources or remote data services using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#datasource) property. It supports the data type of array or DataManager. The AutoComplete also supports different kind of data services such as OData, OData V4, Web API and data formats such as XML, JSON, JSONP with the help of DataManager Adaptors. The commonly used [`fields`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#fields) are listed below, and the full list of supported fields is available in the fields API reference.

| Fields | Type | Description |
|------|------|-------------|
| value | number or string | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy | string | Specifies the category under which the list item has to be grouped. |
| iconCss | string | Specifies the icon class of each list item. |

> While binding complex data to AutoComplete, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Bind to local data

Local data can be represented in two ways, as follows:

### Array of strings

The AutoComplete has support to load array of primitive data such as strings and numbers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs2" %}

### Array of objects

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the `fields` property.

In the following example, the Game column from complex data has been mapped to the value field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs3" %}

### Array of complex objects

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the `fields` property. In the following example, the `Country.Name` column from complex data has been mapped to the value field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs4" %}

## Bind to remote data

The AutoComplete supports retrieval of data from remote data services with the help of `DataManager` component. The [query](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#query) property is used to fetch data from the database and bind it to the AutoComplete. The following sample displays the first 6 contacts from the Customers table of the `Northwind` data service.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs5" %}

## See also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping)
* [How to filter the bound data](./filtering)