---
layout: post
title: Gauge annotations in Vue Circular gauge component | Syncfusion
description: Learn here all about Gauge annotations in Syncfusion Vue Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge annotations 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Gauge annotations in Vue Circular gauge component

Annotations are used to mark a specific area of interest in the gauge with texts, shapes or images.

## Content

You can place any custom element on the axis area by assigning the id of the element to
[`content`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotation/#content-string) property of [`annotation`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotation/) object.

>Note: To use annotation feature, we need to inject `Annotations` module using `CircularGauge.Inject(Annotations)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs1" %}

## Position

Annotation can be placed around the axis by using [`radius`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotation/#radius-string)
and [`angle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/annotation/#angle-number) property.
For example, if the angle is 90 degree and the radius is 110%, then the annotation, will be placed at the right side of the axis.

Radius of the annotation takes value either in pixel or percentage. By setting value in percentage, annotation gets its position with respect to its axis radius.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs2" %}

## Sub Gauge

As the annotation allows you to place any custom element, we can initialize a gauge to the element and can
be used to place that in another gauge.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs3" %}

## See also

* [Tooltip for Annotation](https://ej2.syncfusion.com/documentation/circular-gauge/gauge-user-interaction/tooltip-for-ranges-and-annotations/)
