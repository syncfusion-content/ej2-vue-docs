---
layout: post
title: Smithchart axis in Vue Smithchart component | Syncfusion
description: Learn here all about Smithchart axis in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart axis 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart axis in Vue Smithchart component

Like chart, Smithchart is having support for two types of axis.
* Horizontal axis - axis drawn as straight line in the horizontal direction of the chart.
* Radial axis - axis is drawn as circular path.

## Labels Customization

Axis labels are used to denote what kind of data is bound for smithchart. Using axis labels, you can easily identify in which interval chart is rendered. Using following properties we can customize the axis labels for horizontal and radial axis.

* [`labelPosition`] - used to place the labels either inside or outside the axis line.
* [`labelIntersectAction`] - used to hide the labels when intersect with other one.
* [`labelStyle`] - used to customize the properties such as font size, family, weight, opacity.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs7" %}

## Gridlines

To make the data in a chart that displays axes easier to read, you can display horizontal and radial axis gridlines. Gridlines extend from any horizontal and radial axes across the plot area of the smithchart.
Both horizontal and radial axis are having support for major as well as minor gridlines. Major gridlines are drawn from the position in which labels are rendered. Minor gridlines are drawn between two major gridlines as per the count we set in settings.

We can customize following things, in major as well as minor gridlines.

* [`width`] - used to customize the width of gridlines.
* [`dashArray`] - used to customize whether gridline have to render as normal line or dashed line.
* [`visible`] - used to enable or disable the visibility of the gridlines.
* [`opacity`] - used to customize the opacity of the major gridlines.
* [`count`] - used to customize the count of the minor gridlines.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs8" %}

## Axisline

As name suggests that, it is a line in smithchart that can be configured to denotes the axis. By default, visibility of the axis line is true. You can customize its visibility by using visible property in axis Line. Other than visibility of the axis line, you can customize the  following properties of the axis line.

* [`width`] - used to customize the width of the axis line.
* [`dashArray`] - used to render the axis line as dashed line.
* [`visible`] - used to enable or disable the visibility of the axis line.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/smithchart/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs9" %}