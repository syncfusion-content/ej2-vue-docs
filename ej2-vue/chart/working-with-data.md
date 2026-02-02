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

The Vue Chart component supports multiple data binding approaches to suit different application scenarios. Data can be bound from local JSON arrays, dynamically loaded on demand with lazy loading, or fetched from remote services using various adaptor patterns. This guide covers all available data binding methods, helping you choose the right approach for your use case based on data size, performance requirements, and backend architecture.
## Choosing a data binding approach
| Method | Best For | Advantages | Considerations |
|--------|----------|------------|-----------------|
| **Local data** | Small to medium datasets | Simple setup, no network latency, instant rendering | All data must be in memory |
| **Common datasource** | Multiple series sharing data | Reduces redundancy, single update point | Limited to data common across series |
| **Lazy loading** | Large datasets with scrolling | Loads only visible data, better performance | Requires server-side pagination |
| **Remote data (OData/WebAPI)** | Backend-driven data | Scalable, centralized data management, real-time updates | Network latency, requires service setup |
| **Offline mode** | Data caching with client-side actions | Eliminates repeated requests, faster interactions | Initial load time, memory constraints |

## Local data

Bind simple JSON data to the chart using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in the series configuration. Map the JSON fields to the [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties to specify which data fields represent the x and y axis values.

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

Bind the same JSON data to all series by setting the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property at the chart level instead of the series level. This approach is useful when multiple series share the same dataset and you want to update data from a single source. Each series independently maps its own properties to the common data fields.

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

Bind remote data from a web service by using the `DataManager` class. The DataManager simplifies communication with REST APIs, OData services, and custom web endpoints. It requires minimal configuration—typically just the service URL and an appropriate adaptor—then handles all request/response processing. Assign the DataManager instance to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in the series, and map the response fields to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#query) property to filter, sort, or paginate data on the server.

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

[OData](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data via REST APIs. Use the ODataAdaptor with DataManager to retrieve data from OData services. The adaptor automatically constructs the correct query syntax and handles standard OData conventions.
**Example use case:** Querying a product sales service that implements OData v3.0 filtering, sorting, and pagination.

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

ODataV4 is an improved and more standardized version of the OData protocol, with enhanced query capabilities and better JSON support. Use the ODataV4Adaptor to consume ODataV4 services. For more information on ODataV4 specifications, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).

**When to use ODataV4Adaptor:** If your backend service implements OData v4.0, prefer this adaptor over the older ODataAdaptor for better compliance and features.

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

Use the WebApiAdaptor to consume custom REST APIs that follow a standard response format. This adaptor is ideal for backends that do not implement OData but provide REST endpoints returning JSON data.
**Expected response format:**
The Web API must return a JSON object with two properties:
- `Items`: Array of data objects for the chart
- `Count`: Total number of records (useful for pagination)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs29" %}

**Example response:**

The Web API should structure its response as shown below. The `Items` array contains the actual data records, and `Count` indicates the total available records (supporting server-side pagination).

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Custom adaptor

Create a custom adaptor by extending one of the built-in adaptors (typically ODataAdaptor) to add custom logic for request/response handling. Override the `processResponse` method to transform or enrich the response data. Common use cases include adding serial numbers, reformatting dates, or adding computed fields before the chart renders the data.

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

When using remote data binding, all filtering, sorting, and pagination normally happen on the server. To improve responsiveness and reduce server load, enable offline mode: the chart loads all data once during initialization, then handles all interactions client-side. Set the `offline` property of DataManager to `true` to activate this behavior.

**Use offline mode when:**
- Your dataset is relatively small (fits comfortably in browser memory)
- You want instant filtering and sorting without server round-trips
- Network latency is a significant usability concern
- You prefer to minimize server requests during user interactions

**Caution:** Offline mode loads the entire dataset at once, which may impact initial load time and memory usage for large datasets.

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

Data points with `null` or `undefined` values are treated as empty points. Empty data points are skipped and not rendered in the chart. When using the `points` property to define individual data items, customize empty points with the `emptyPointSettings` property in the series configuration. By default, empty points create a gap in the series line or bar.

**Default behavior:** Empty points use the `Gap` mode, which leaves a blank space in the chart visualization.

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

Assign a specific color to empty points by setting the `fill` property in the `emptyPointSettings` object. This allows you to visually distinguish empty data points from regular data in your chart. Border for a empty point can be set by `border` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs44/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs44" %}

## Handling no data

When the chart has no data available to render, use the `noDataTemplate` property to display a custom layout within the chart area. This template can include messages, images, icons, or interactive elements (such as a load button) to guide the user. The template maintains design consistency and improves user experience when data is unavailable. Once data becomes available, the chart automatically updates and replaces the template with the visualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs46/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs46" %}