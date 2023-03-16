---
layout: post
title: Custom aggregate in Vue Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Vue Grid component

Sometimes you can have a scenario to calculate aggregate value using your own aggregate function, we can achieve this behavior using the custom aggregate option.
To use custom aggregation, specify the [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type) as `Custom` and provide the custom aggregate function in the [`customAggregate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for Total and Group aggregations.
* **Total aggregation** - the custom aggregate function will be called with whole data and the current [`AggregateColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/)
object.
* **Group aggregation** - it will be called with current group details and the [`AggregateColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/) object.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/aggregates/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs1" %}

> To access the custom aggregate value inside template, use the key as `Custom`