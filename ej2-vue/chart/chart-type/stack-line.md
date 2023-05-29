---
layout: post
title: Stacked Line in Vue Chart component | Syncfusion
description: Learn here all about Stacked Line in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Line Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Stacked Line in Chart Vue Chart Component

## Stacked Line

To render a Stacked Line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingLine` and
inject `StackingLineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stack-line-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stack-line-cs1" %}

## Series customization

The following properties can be used to customize the `stacked line` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://helpej2.syncfusion.com/vue/documentation/api/chart/borderModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stack-line-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stack-line-cs2" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)