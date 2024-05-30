---
layout: post
title: Data binding in Vue Inplace editor component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Inplace editor component

The Essential JS 2 components load the data either from local data sources or remote data services using the `dataSource` property and it supports the data type of an array or `DataManager`. Also supports different kind of data services such as OData, OData V4, Web API, and data formats such as XML, JSON, JSONP with the help of `DataManager` adaptors.

## Local

To bind local data to the Essential JS 2 components, you can assign a JavaScript array of object or string to the `dataSource` property. The local data source can also be provided as an instance of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs8" %}

## Remote

To bind remote data to the Essential JS 2 Vue components, assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, provide the endpoint URL.

### OData V4

The OData V4 is an improved version of OData protocols, and the [DataManager] can also retrieve and consume OData V4 services. To fetch data from the server by using `DataManager` with the adaptor property configure as [ODataV4Adaptor].

In the following sample, In-place Editor renders a `DropDownList` component and its `dataSource` property configured for fetching a data from the server by using `ODataV4Adaptor` with `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs9" %}

### Web API

Data can fetch from the server by using [DataManager] with the adaptor property configure as [WebApiAdaptor].

In the following sample, In-place Editor render a `DropDownList` component and its `dataSource` property configured for fetching a data from the server by using `WebApiAdaptor` with `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs10" %}