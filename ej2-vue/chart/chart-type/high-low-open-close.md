---
layout: post
title: High Low Open Close in Vue Chart component | Syncfusion
description: Learn here all about High Low Open Close Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: High Low Open Close Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# High Low Open Close in Vue Chart Component

## High Low Open Close

HiloOpenClose series is used to represent the low, high, open and closing values over time.
To render a HiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `HiloOpenClose` and
inject `HiloOpenCloseSeries` into the `provide`.

HiloOpenClose series requires 5 fields (x, high, low, open and close) to show the high, low, open and close price values in the stock.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs1" %}

## Series customization

In HiloOpenClose series, [`bullFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#bearfillcolor) is used to fill the
segment when the open value is greater than the close value and [`bearFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#bearfillcolor) is used to fill the segment when the open value is less than the close value.

By default, bullFillColor is set as red and bearFillColor is set as green.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs2" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)