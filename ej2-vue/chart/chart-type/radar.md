---
layout: post
title: Radar in Vue Chart component | Syncfusion
description: Learn here all about Radar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Radar Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Radar in Vue Chart Component

## Radar Chart

To render a radar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Radar` and to render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Line` and inject
`LineSeries` inject `LineSeries`  into the `provide`. [`isClosed`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#isclosed) property specifies whether to join start and end point of a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs11" %}

## Series customization

### Start Angle

You can customize the start angle of the radar series using [`startAngle`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#startangle-number) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs12" %}

### Coefficient in axis

You can customize the radius of the radar series using [`coefficient`](https://ej2.syncfusion.com/vue/documentation/api/chart/axisModel/#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs13" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
