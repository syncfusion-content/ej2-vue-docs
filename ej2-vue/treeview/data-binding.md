---
layout: post
title: Data binding in Vue TreeView component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue TreeView component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue TreeView component

The TreeView component provides the option to load data either from local data sources or from remote data services. This can be done through the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource) property, which is a member of the [fields](https://ej2.syncfusion.com/vue/documentation/api/treeview/#fields) property. The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource) property supports array of JavaScript objects and [**DataManager**](https://ej2.syncfusion.com/vue/documentation/data/vue-2-getting-started). It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

TreeView has `load on demand` (Lazy load) by default. It reduces the bandwidth size when consuming huge data. It loads first level nodes initially, and when a parent node is expanded, it loads the child nodes based on the `parentID/child` member.

By default, the [`loadOnDemand`](https://helpej2.syncfusion.com/vue/documentation/api/treeview#loadondemand) is set to true. By disabling this property, all the tree nodes are rendered at the beginning itself.

You can use the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#databound) event to perform actions. This event will be triggered once the data source is populated in the TreeView.

## Local data

To bind local data to the TreeView, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource) property. The TreeView component requires three fields (**ID**, **text**, and **parentID**) to render a local data source. When mapper fields are not specified, it takes the default values as the mapping fields. Local data source can also be provided as an instance of the `DataManager`. It supports two kinds of local data binding methods.

* Hierarchical data

* Self-referential data

### Hierarchical data

TreeView can be populated with a hierarchical data source that contains a nested array of JSON objects. You can directly assign hierarchical data to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource) property, and map all the field members with corresponding keys from the hierarchical data to [`fields`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#fields) property.

In the following example, **code**, **name**, and **countries** columns from hierarchical data have been mapped to **id**, **child** and **text** fields respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/data-binding/hierarchical-data-cs1" %}

### Self-referential data

TreeView can be populated from self-referential data structure that contains array of JSON objects with [`parentID`](https://helpej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#parentid) mapping.

You can directly assign self-referential data to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource) property, and map all the field members with corresponding keys from self-referential data to [`fields`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#fields) property.

To render the root level nodes, specify the parentID as null or no need to specify the parentID in [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treeview/fieldsSettingsModel/#datasource).

In the following example, **ID**, **hasChild**, and **name** columns from self-referential data have been mapped to **ID** **parentID**, **hasChildren**, and **text** fields, respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/data-binding/self-referential-data-cs1" %}

## Remote data

TreeView can also be populated from a remote data service with the help of the [`DataManager`](https://ej2.syncfusion.com/vue/documentation/data/vue-2-getting-started) component and [`Query`](https://ej2.syncfusion.com/vue/documentation/data/querying) property.

It supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, you have to provide the endpoint `url`.

The `DataManager` that acts as an interface between the service endpoint and the TreeView requires the following information to interact with service endpoint properly.

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides some predefined adaptors  designed to interact with service endpoints. They are,

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is  used to fetch data from remote services. The **EmployeeID**, **FirstName**, and **Title** columns from Employees table have been mapped to **ID**, **text**, and **hasChildren** fields respectively for first level nodes.

The **OrderID**, **EmployeeID**, and **ShipName** columns from orders table have been mapped to **ID**, **parentID**, and **text** fields respectively for second level nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/data-binding/remote-data-cs1" %}