---
layout: post
title: Data markers in Vue Chart component | Syncfusion
description: Learn here all about Data markers in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Data markers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in Vue Chart component

Data markers are used to provide information about the data points in the series. You can add a shape to adorn
each data point.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Markers can be added to the points by enabling the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#visible)
option of the marker property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs2" %}

## Shape

Markers can be assigned with different shapes such as Rectangle, Circle, Diamond etc using the `shape` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs3" %}

>Note : To know more about the marker shape type refer the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#shape).

## Images

Apart from the shapes, you can also add custom images to mark the data point using the
[`imageUrl`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#imageurl) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs4" %}

## Customization

Marker's color and border can be customized using `fill` and `border` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs5" %}

## Customizing specific point

You can also customize the specific marker and label using [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#pointrender-emittypeipointrendereventargs) event. The `pointRender` event allows you to change the shape, color and border for a point.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs6" %}

## Fill marker with series color

Marker can be filled with the series color by setting the [`isFilled`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettingsModel/#isFilled-boolean) property to <b>true</b>.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs7" %}
