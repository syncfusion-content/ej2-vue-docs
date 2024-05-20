---
layout: post
title: Gauge ranges in Vue Circular gauge component | Syncfusion
description: Learn here all about Gauge ranges in Syncfusion Vue Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge ranges 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Gauge Ranges in Vue Circular Gauge Component

You can categorize specific intervals on the gauge axis by using the [`ranges`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#properties) property.

## Start and End

Start and end value of a range in an axis can be customized by using [`start`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#start-number) and [`end`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#end-number) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs51/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs51" %}

## Customization

The color and thickness of the range can be customized by using the [`color`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#color-string), [`startWidth`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#startwidth-number), and [`endWidth`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#endwidth-number) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs52/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs52" %}

## Rounded Corner Ranges

The corners of the ranges can be rounded by specifying desired values to the `roundedCornerRadius` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs53/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs53" %}


## Radius

You can place the range inside or outside of the axis by using the [`radius`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/range/#radius-string)
property. The radius of the range accepts values in percentages or in pixels. By default, ranges
take 100% of the axis radius.

### In Pixels

You can set the radius of the range in pixels as demonstrated below:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs54/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs54" %}


### In Percentages

By setting the value as a percentage, the range gets its dimension with respect to its axis radius.
For example, when the radius is ‘50%’, the range renders to half of the axis radius.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs55/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs55" %}

## Dragging Range

Ranges can be dragged on the axis line by clicking and dragging them. To enable or disable range dragging, use the [`enableRangeDrag`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/circularGaugeModel/#enablerangedrag) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs56/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs56" %}

## Multiple Ranges

You can add multiple ranges to an axis as demonstrated below:

>Note: You can set the range color to axis ticks and labels by enabling the `useRangeColor` property in the [`majorTicks`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tick/),
[`minorTicks`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tick/), and [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/label/) objects.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs57/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs57" %}

## Gradient Color

Gradient support allows you to add multiple colors in the ranges and pointers of the Circular Gauge. The following gradient types are supported:

* Linear Gradient
* Radial Gradient

### Linear Gradient

A linear gradient applies colors in a linear progression. The start value of the linear gradient is set using the [`startValue`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/linearGradient/#startvalue) property. The end value of the linear gradient is set using the [`endValue`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/linearGradient/#endvalue) property. The color stop values, such as color, opacity, and offset, are set using the [`colorStop`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/linearGradient/#colorstop) property.

To apply a linear gradient to the range, follow the code sample below:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs58/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs58" %}

### Radial Gradient

A radial gradient applies colors in a circular progression. The inner circle position of the radial gradient is set using the [`innerPosition`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient is set using the [`outerPosition`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/radialGradient/#outerposition) property. The color stop values, such as color, opacity, and offset, are set using the [`colorStop`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/radialGradient/#colorstop) property.

To apply a radial gradient to the range, follow the code sample below:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs59/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs59" %}

## See Also

* [Tooltip for Ranges](https://ej2.syncfusion.com/documentation/circular-gauge/gauge-user-interaction/tooltip-for-ranges-and-annotations/)
