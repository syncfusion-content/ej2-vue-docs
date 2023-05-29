---
layout: post
title: Axis customization in Vue Chart component | Syncfusion
description: Learn here all about Axis customization in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Axis customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in Vue Chart component

## Axis Crossing

An axis can be positioned in the chart area using `crossesAt` and `crossesInAxis` properties. The `crossesAt`
property specifies the values (datetime, numeric, or logarithmic) at which the axis line has to be intersected
with the vertical axis or vice-versa, and the `crossesInAxis` property specifies the axis name with which the
axis line has to be crossed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs2" %}

## Title

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#title) property to provide quick information to the user about the data plotted in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs3" %}

## Title Rotation

By using the [`titleRotation`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#titlerotation) property, you can rotate the axis title from 0 to 360 degree.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs4" %}

## Tick Lines Customization

You can customize the  `width`, `color` and `size` of the minor and major tick lines, using [`majorTickLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/majorTickLines/) and [`minorTickLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/minorTickLines/) properties in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs5" %}

## Grid Lines Customization

You can customize the `width`, `color` and `dashArray` of the minor and major grid lines, using [`majorGridLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/minorGridLines/) and [`minorGridLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/minorGridLines/) properties in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs6" %}

## Multiple Axis

In addition to primary X and Y axis, we can add n number of axis to the chart. Series can be associated with
this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs7" %}

## Inversed Axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property [`isInversed`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#isinversed) to true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs8" %}

## Opposed Position

<!-- markdownlint-disable MD012 -->
To place an axis opposite from its original position, set [`opposedPosition`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#opposedposition)
property of the axis to true.
<!-- markdownlint-disable MD012 -->

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs9" %}


