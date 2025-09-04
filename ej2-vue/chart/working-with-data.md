---
layout: post
title: Working with data in Vue Chart component | Syncfusion
description: Learn here all about Working with data in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Working with data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Working with data in Vue Chart component

Chart can visualize data bound from local or remote data.

## Local data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in series. Now map the fields in JSON to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs19" %}

## Common datasource

You can also bind a JSON data common to all series using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs21" %}

## Remote data

You can also bind remote data to the chart using `DataManager`. The DataManager requires minimal information
like web service URL, adaptor and crossDomain to interact with service endpoint properly. Assign the instance
of DataManager to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in series and map the fields of data to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#query) property of the series to filter the data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs22" %}

## Binding data using ODataAdaptor

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from an OData service using the DataManager. Refer to the following code example for remote data binding using an OData service.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs27" %}

## Binding data using ODataV4Adaptor

ODataV4 is an improved version of the OData protocols, and the `DataManager` can also retrieve and consume ODataV4 services. For more details on ODataV4 services, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind an ODataV4 service, use the **ODataV4Adaptor**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs28" %}

## Web API adaptor

You can use the **WebApiAdaptor** to bind the chart with a Web API created using an OData endpoint.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs29" %}

The response object should contain the properties **Items** and **Count**, where **Items** represents a collection of entities, and **Count** represents the total number of entities.

The sample response object should appear as follows:

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates the custom adaptor approach and how to add a serial number to the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs30" %}

## Offline mode

When using remote data binding, all chart actions will be processed on the server-side. To avoid postback for every action, configure the chart to load all data upon initialization and handle actions on the client-side. To enable this behavior, utilize the **offline** property of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs31" %}

## Empty points

The Data points that uses the `null` or `undefined` as value are considered as empty points. Empty data points are ignored and not plotted in the Chart. When the data is provided by using the points property, By using `emptyPointSettings` property in series, you can customize the empty point. Default `mode` of the empty point is `Gap`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs43/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs43" %}

**Customizing empty point**

Specific color for empty point can be set by `fill` property in `emptyPointSettings`. Border for a empty point can be set by `border` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs44/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs44" %}

## Handling when no data is available

When no data is available to render in the chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs46/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs46" %}