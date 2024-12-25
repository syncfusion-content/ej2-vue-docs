---
layout: post
title: Data binding in Vue Listview component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Listview component

The ListView component provides an option to load data either from a local dataSource or remote data services. This can be done through the dataSource property that supports the data type of array or [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

ListView supports different kinds of data services such as OData, OData V4, and Web API, and data formats like XML, JSON, and, JSONP with the help of DataManager Adaptors.

| Fields | Type | Description |
|------|------|-------------|
| id | string | Specifies ID attribute of list item, mapped in dataSource. |
| text | string | Specifies list item display text field. |
| isChecked | string | Specifies checked status of list item. |
| isVisible | string | Specifies visibility state of list item. |
| enabled | string | Specifies enabled state of list item. |
| iconCss | string | Specifies the icon class of each list item that will be added before to the list item text. |
| child | string | Specifies the field for child dataSource items. |
| tooltip | string | Specifies tooltip title text field. |
| groupBy | string | Specifies category of each list item. |
| sortBy | string | Specifies sorting field, that is used to sort the listview data. |
| htmlAttributes | string | Specifies list item html attributes field. |

> When complex data is bound to ListView, you should map the fields properly. Otherwise, the ListView properties remain as undefined or null.

## Bind to local data

Local data can be represented in two ways, they are as follows:

* Array of simple data.
* Array of JSON data.

### Array of simple data

ListView supports loading an array of primitive data like string and numbers. Here, both `value` and [`text`](https://ej2.syncfusion.com/vue/documentation/api/list-view/fieldSettingsModel/#text) field act as same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/simple-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/simple-data-cs1" %}

### Array of JSON data

ListView can generate its list items through an array of complex data. To make it work properly, you should map the appropriate columns to the [`fields`](https://ej2.syncfusion.com/vue/documentation/api/list-view#fields) property.

In the following example, role column is mapped with the text field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/array-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/array-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/array-data-cs1" %}

## Bind to remote data

The ListView supports retrieving data from remote data services with the help of DataManager component. The Query property allows fetching data and returning it to the ListView from the database.

In the following sample, first 10 Employees from the ListView table are displayed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/data-binding/remote-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/remote-data-cs1" %}