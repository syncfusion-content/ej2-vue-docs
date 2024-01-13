---
layout: post
title: Axis customization in Vue 3D Chart component | Syncfusion
description: Learn here all about axis customization in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in Vue 3D Chart component

## Title

The title for the axis can be added by using the [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#title) property. It helps to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#titlestyle) property of the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis1" %}

## Title rotation

The title can be rotated from 0 to 360 degree by using the [`titleRotation`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#titlerotation) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis2" %}

## Tick lines customization

The [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/minorTickModel/#width), [`color`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/minorTickModel/#color) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/minorTickModel/#height) of the minor and major tick lines can be customized by using the [`majorTickLines`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#majorticklines) and [`minorTickLines`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#minorticklines) properties in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis3" %}

## Grid lines customization

The [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/minorGridModel/#width), and [`color`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/minorGridModel/#color) of the minor and major grid lines can be customized by using the [`majorGridLines`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis4" %}

## Multiple axis

In addition to primary X and Y axis, n number of axis can be added to the chart. Series can be associated with this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis5" %}

## Inversed axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner, set the [`isInversed`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#isinversed) property to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis6" %}

## Opposed position

To place an axis opposite from its original position, set the [`opposedPosition`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#opposedposition) property to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/axis7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/axis7" %}