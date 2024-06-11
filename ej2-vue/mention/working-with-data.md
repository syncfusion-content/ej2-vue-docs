---
layout: post
title: Working with data in Vue Mention component | Syncfusion
description: Learn here all about Working with data in Syncfusion Vue Mention component of Syncfusion Essential JS 2 and more.
control: Working with data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Working with data in Vue Mention component

The Mention loads the data either from local data sources or remote data services using the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/mention/#datasource) property. It supports the data type of either `array` or `DataManager`.

The Mention also supports different kinds of data services such as OData V4 and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| text |  `string` | Specifies the display text of each list item. |
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item. |

> When binding complex data to the Mention, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

Local data can be represented in three ways as described in the following.

### Array of simple data

The Mention has provided support to load an array of primitive data such as strings and numbers. Here, both the value and text fields act the same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs1" %}

### Array of JSON data

The Mention can generate its list items through an array of complex data. Therefore, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/vue/documentation/api/mention/#fields) property.

In the following example, `ID` column and `Game` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs2" %}

### Array of Complex data

The Mention can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/vue/documentation/api/mention/#fields) property.

In the following example, `Code.ID` column and `Country.Name` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs3" %}

## Binding remote data

The Mention supports retrieval of data from remote data services with the help of `DataManager` component. The [query](https://ej2.syncfusion.com/vue/documentation/api/mention/#query) property is used to fetch the data from the database and bind it to the Mention component.

### OData v4 adaptor - Binding OData v4 service

The ODataV4 is an improved version of OData protocols, and the `DataManager` can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [odata documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 service, use the `ODataV4Adaptor`.

The following sample displays the first 6 contacts from `Customers` table of the `Northwind` Data Service.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs4" %}

### Web API adaptor

You can use `WebApiAdaptor` to bind mention with Web API created using OData endpoint.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/working-with-data-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs5" %}