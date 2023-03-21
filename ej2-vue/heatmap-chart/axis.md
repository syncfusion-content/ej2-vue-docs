---
layout: post
title: Axis in Vue Heatmap chart component | Syncfusion
description: Learn here all about Axis in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Axis 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis in Vue Heatmap chart component

Heat map consists of two axes namely, X-axis and Y-axis that displays the row headers and column headers to plot the data points respectively. You can define the type, format, and other customizing options for both axes in the heat map.

## Types

There are three different axis types available in the heat map, which defines the data type of the axis labels. You can define the axis type by using the [valueType](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#valuetype) property in the heat map.

### Category axis

Category axis type is used to represent the string values in axis labels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs1" %}

### Numeric axis

Numeric axis type is used to represent the numeric values in axis labels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs2" %}

### Date-time axis

Date-time axis type is used to represent the date-time values in axis labels with a specific format. In date-time axis, you can define the start and end date/time using the [minimum](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#minimum) and [maximum](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#maximum) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs3" %}

## Inversed axis

Heat map supports inversing the axis origin for both axes, where the axis labels are placed in an inversed manner. You can enable axis inversing by enabling the [isInversed](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#isinversed) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs4" %}

## Opposed axis

In heat map, you can place the axis label in an opposite position of its default axis label position by using the [opposedPosition](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#opposedposition) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs5" %}

## Label formatting

Heat map supports formatting the axis labels by using the [labelFormat](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#labelformat) property. Using this property, you can customize the axis label by global string format ('P', 'C', etc) or customized format like '{value}°C'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs6" %}

## Axis intervals

In heat map, you can define an interval between the axis labels using the [interval](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#interval) property. In date-time axis, you can change the interval mode by using the [intervalType](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#intervaltype) property. The date-time axis supports the following interval types:

* Years
* Months
* Days
* Hours
* Minutes

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs7" %}

## Axis label increment

Axis label increment in the heat map is used to display the axis labels with regular interval values in numeric and date-time axes. The labels will be displayed with tick gaps when you set the label interval. But, to achieve the same behavior without tick gaps, use the label increment. You can set the axis label increment using the [increment](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#increment) property and the default value of this property is **1**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs8" %}

## Limiting labels in date-time axis

You can display the axis labels at specific time intervals along with the date-time axis using the [showLabelOn](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#showlabelon) property. This property supports the following types:

* None: Displays the axis labels based on the `intervalType` and `interval` property of the axis. This type is default value of the `showLabelOn` property.
* Years: Displays the axis labels on every year between given date-time range.
* Months: Displays the axis labels on every month between given date-time range.
* Days: Displays the axis labels on every day between given date-time range.
* Minutes: Displays the axis labels on every minute between given date-time range.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs9" %}

## Multi Level Labels

You can add many levels of labels using the [multiLevelLabels](https://ej2.syncfusion.com/vue/documentation/api/heatmap/axis/#multilevellabels) property.
This property can be configured using the following properties:

* Categories
* Overflow
* Alignment
* Text style
* Border

### Categories

Using this property, you can configure [start](https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelCategoriesModel/#start), [end](https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelCategoriesModel/#end), [text](https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelCategoriesModel/#text), [maximumTextWidth](https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelCategoriesModel/#maximumtextwidth) of the
multilevel labels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs10" %}

### Overflow

Using this property, you can trim and wrap the multilevel labels.

>Note: This support works in x-axis only.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs11" %}

### Alignment

This property provides an option to position the multilevel labels at far, center, and near.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs12" %}

### Text Customization

The [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelLabelsModel/#textstyle) property of multilevel labels provides options to customize the size, color, fontFamily, fontWeight, fontStyle, opacity, textAlignment, and textOverflow.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs13" %}

### Border Customization

Using the [border](https://ej2.syncfusion.com/vue/documentation/api/heatmap/multiLevelLabelsModel/#border) property, you can customize the width, color and type. The type of border are **Rectangle**, **WithoutTopBorder**, **WithoutBottomBorder**, **WithoutTopAndBottomBorder**, **Brace**, and **WithoutBorder**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/axis-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/axis-cs14" %}
