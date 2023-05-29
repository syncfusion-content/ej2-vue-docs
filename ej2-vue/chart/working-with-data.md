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

Chart can visualise data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in series. Now map the fields in JSON to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs19" %}

### Common Datasource

You can also bind a JSON data common to all series using

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs20" %}

## Common Datasource

You can also bind a JSON data common to all series using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs21" %}

## Remote Data

You can also bind remote data to the chart using `DataManager`. The DataManager requires minimal information
like webservice URL, adaptor and crossDomain to interact with service endpoint properly. Assign the instance
of DataManager to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property in series and map the fields of data to [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#query) property of the series to filter the data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs22" %}

## Empty points

The Data points that uses the `null` or `undefined` as value are considered as empty points. Empty data points are ignored and not plotted in the Chart. When the data is provided by using the points property, By using `emptyPointSettings` property in series, you can customize the empty point. Default `mode` of the empty point is `Gap`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs43" %}

* Customizing empty point

Specific color for empty point can be set by `fill` property in `emptyPointSettings`. Border for a empty point can be set by `border` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs44" %}