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

An axis can be positioned dynamically within the chart area using the `crossesAt` and `crossesInAxis` properties. The `crossesAt` property specifies the value (date-time, numeric, or logarithmic) at which the axis line intersects another axis, while the `crossesInAxis` property defines the name of the axis with which the current axis should intersect. This customization is useful for emphasizing specific reference points or thresholds in the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs2" %}

## Title

A title can be added to an axis using the [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#title) property. Axis titles provide context and help users quickly understand the data represented along the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs3" %}

## Title Rotation

The orientation of the axis title can be adjusted using the [`titleRotation`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#titlerotation) property. This property supports rotation values from 0 to 360 degrees, allowing better alignment based on the chart layout and available space.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs4" %}

## Tick Lines Customization

The appearance of both major and minor tick lines can be customized using the [`majorTickLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/majorTickLines) and [`minorTickLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/minorTickLines) properties. These properties allow customization of the `width`, `color`, and `size` of tick lines to enhance chart readability.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs5" %}

## Grid Lines Customization

Grid lines can be styled using the [`majorGridLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/majorGridLines) and [`minorGridLines`](https://ej2.syncfusion.com/vue/documentation/api/chart/minorGridLines) properties. These options support customization of `width`, `color`, and `dashArray`, helping users distinguish data points and scales more effectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs6" %}

## Multiple Axis

In addition to the primary X and Y axes, multiple additional axes can be added to a chart. Each series can be associated with a specific axis by mapping it to the axis using a unique axis name. This is useful for visualizing datasets with different units or scales within the same chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs7" %}

## Inversed Axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, the highest value is displayed closer to the origin, and the lowest value appears farther away. This behavior can be enabled by setting the [`isInversed`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#isinversed) property to `true`. Inversed axes are commonly used in scenarios such as ranking or inverted value representations.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs8" %}

## Opposed Position

<!-- markdownlint-disable MD012 -->

An axis can be placed on the opposite side of its default position by setting the [`opposedPosition`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#opposedposition) property to `true`. This option is useful when displaying multiple axes or when optimizing space usage in complex chart layouts.

<!-- markdownlint-disable MD012 -->

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs9" %}