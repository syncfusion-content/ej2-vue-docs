---
layout: post
title: Data Binding in Vue Dropdown Tree | Syncfusion
description: Bind the Syncfusion Vue Dropdown Tree to local hierarchical or self-referential arrays, remote services, or lazy load on demand via fields.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Vue Dropdown Tree

The Dropdown Tree component provides an option to load the data either from local data sources or from remote data services. This can be done through the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/fieldsModel/#datasource) property, which is a member of the [fields](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#fields) property. The `dataSource` property supports an array of JavaScript objects and [DataManager](https://ej2.syncfusion.com/vue/documentation/data/vue-2-getting-started). It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

The Dropdown Tree has the `load on demand` (lazy load) option. It reduces the bandwidth size when consuming huge data. By default, the `loadOnDemand` is set to false. By enabling this property, the first level items are loaded initially, and when a parent item is expanded, the child items are loaded based on the `parentValue/child` member.

## Local data

To bind local data to the Dropdown Tree, you can assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/fieldsModel/#datasource) property.

The Dropdown Tree component requires three fields (value, text, and parentValue) to render the local data source. When mapper fields are not specified, the default values are taken as the mapping fields. The local data source can also be provided as an instance of the [DataManager](https://ej2.syncfusion.com/vue/documentation/data/vue-2-getting-started). It supports two kinds of local data binding methods.

* Hierarchical data

* Self-referential data

### Hierarchical data

Dropdown Tree can be populated with the hierarchical data source that contains nested array of JSON objects. You can directly map the hierarchical data and the field members with corresponding key values from the hierarchical data to the [fields](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#fields) property.

In the following example, **code**, **name**, and **countries** columns from the hierarchical data have been mapped to **value**, **text**, and **child** fields, respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/hierarchial-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/hierarchial-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/data-binding/hierarchial-data-cs1" %}

### Self-referential data

The Dropdown Tree can be populated from the self-referential data structure that contains an array of JSON objects with [parentValue](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/fieldsModel/#parentvalue) mapping.

You can directly assign the self-referential data and map all the field members with corresponding key values from the self-referential data to the [fields](https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/index-default#fields) property.

To render the root level items, specify the parentValue as null or do not specify the parentValue in the dataSource.

In the following example, the **id**, **hasChild**, and **name** columns from the self-referential data have been mapped to **value**, **parentValue**, **hasChildren**, and **text** fields, respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/self-referential-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/self-referential-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/data-binding/self-referential-data-cs1" %}

## Remote data

Dropdown Tree can also be populated from a remote data service with the help of the [DataManager](https://ej2.syncfusion.com/vue/documentation/data/vue-2-getting-started) component and [Query](https://ej2.syncfusion.com/vue/documentation/data/querying) property.

It supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the `dataSource`. To interact with the remote data source, you must provide the endpoint `url`.

The `DataManager`, which acts as an interface between the service endpoint and the Dropdown Tree, requires the following information to interact with the service endpoint properly.

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

The adaptor is responsible for processing the request and response from/to the service endpoint. The `@syncfusion/ej2-data` package provides some predefined adaptors designed to interact with service endpoints. They are,

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is used to fetch data from the remote services. The **EmployeeID**, **FirstName**, and **Title** columns from the Employees table have been mapped to **value**, **text**, and **hasChildren** fields, respectively, for first level items.

The **OrderID**, **EmployeeID**, and **ShipName** columns from the Orders table have been mapped to **value**, **parentValue**, and **text** fields, respectively, for second level items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/remote-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/remote-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/data-binding/remote-data-cs1" %}

## Prevent node selection

You can prevent the selection of individual tree nodes by using the [selectable](https://ej2.syncfusion.com/documentation/api/drop-down-tree/fieldsModel/#selectable) property. Tree node selection is not allowed while this property is disabled.

The `selectable` property is disabled, and the selection is prevented for parent nodes in the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/prevent-node-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-tree/data-binding/prevent-node-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-tree/data-binding/prevent-node-cs1" %}
