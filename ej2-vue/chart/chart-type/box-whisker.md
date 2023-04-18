---
layout: post
title: Box and Whisker in Vue Chart component | Syncfusion
description: Learn here all about Box and Whisker Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Box and Whisker Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Box and Whisker in Vue Chart Component

## Box and whisker

To render a box and whisker chart, use series[`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `BoxAndWhisker` and inject
`BoxAndWhiskerSeries` into the `provide`. The field y requires n number of data or it should contains minimum of five values to plot a segment.
>
{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/box-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/box-cs1" %}

## Box plot

You can change the rendering mode of the Box and Whisker series using the `boxPlotMode` property. The default boxPlotMode is `exclusive`.The other boxPlotMode available are `inclusive` and `normal`.

To render a box and whisker chart, use series[`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `BoxAndWhisker` and inject `BoxAndWhiskerSeries` into the `provide`. The field y requires n number of data or it
should contains minimum of five values to plot a segment.
>
{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/box-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/box-cs2" %}

## Show mean

In Box and Whisker series `showMean` property is used to show the box and whisker average value. The default value of `showMean` is false.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/box-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/box-cs3" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)