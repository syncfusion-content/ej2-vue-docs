---
layout: post
title: Gauge axes in Vue Circular gauge component | Syncfusion
description: Learn here all about Gauge axes in Syncfusion Vue Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge axes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Gauge axes in Vue Circular gauge component

By default, gauge will be displayed with an axis. Each axis contains its own ranges, pointers and annotation.


## Axis Customization

You can customize the width and color of an axis line by using [`lineStyle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/line/) property.
Background for an axis can be customized by using [`background`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#background-string)
property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs10" %}


## Angles and Direction

Circular gauge axis can sweep from 0 to 360 degrees. By default start angle of an axis is 200 degree and
end angle is 160 degree and you can customize this option by using
[`startAngle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#startangle-number) and [`endAngle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#endangle-number) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs11" %}


### AntiClockWise Direction

The [`direction`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#direction-string) property enables you to render the gauge axis either in
`ClockWise` or in `AntiClockWise` direction.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs12" %}


## Axis Radius

By default, radius of an axis is calculated based on the available size.
You can customize this, by using [`radius`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#radius-string) property.
It takes value either in `percentage` or in `pixel`.

### In Pixel

You can set the radius of the gauge in pixel as demonstrated below,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs13" %}



### In Percentage

By setting value in percentage, gauge gets its dimension with respect to its available size.
For example, when the radius is ‘50%’, gauge renders to half of the available size.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs14" %}

## Ticks

You can customize the [`height`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#color-string),
[`color`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#color-string) and
[`width`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#width-number) of major and minor ticks by
using [`majorTicks`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#majorticks-tickmodel)
and [`minorTicks`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#minorticks-tickmodel) property.
By default, [`interval`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#interval-number) for
`majorTicks` will be calculated automatically
and also you can customize the interval for major and minor ticks using
`interval` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs15" %}

### Tick Position

Both minor and major ticks can be moved by using [`offset`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#offset-number) and [`position`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#position-string) property. The [`offset`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#offset-number) defines the distance between the axis and ticks.
By default, offset value is 0. The [`position`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tickModel/#position-string) will place the ticks either inside or outside of the axis.
By default, ticks will be placed `inside` the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs16" %}

## Labels

Labels of an axis can be customized by using [`font`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#font-fontmodel) property in [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#labelstyle-labelmodel) options.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs17" %}

### Label Position

Labels can be moved by using [`offset`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#offset-number) or
[`position`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#position-string) property.
The [`offset`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#offset-number) defines the distance between the labels and ticks.
By default, offset value is 0.
The [`position`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#position-string) will place the labels either inside or outside of the axis.
By default, labels will be placed `inside` the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs18" %}

### Display the last label, even if it isn’t in the visible range**

If the last label is not in the visible range, it will be hidden by default. If you want to show the last label, set the `showLastLabel` property to `true` in the `axes` API of circular gauge.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs19" %}

### Display the last label, even if it isn’t in the visible range**

If the last label is not in the visible range, it will be hidden by default. If you want to show the last label, set the `showLastLabel` property to `true` in the `axes` API of circular gauge.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs20" %}

### Auto Angle

Labels can be swept along the axis angle by enabling [`autoAngle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#autoangle-boolean) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs21" %}

### Smart Labels

When an axis makes a complete circle, then the first and last label of the axis will get overlap with each other.
In this scenario, you can either hide 1st or last label using [`hiddenLabel`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#hiddenlabel-string) property.
When `hiddenLabel` value is `First`,
then the 1st label will be hidden and when the
`hiddenLabel` value is 'Last',
then the last label will be hidden.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs22" %}

### Label Format

Axis labels can be formatted by using [`format`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/labelModel/#format-string) property in [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/label/) and its supports all globalize format.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs23" %}

The following table describes the result of applying some commonly used label formats on numeric values.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1,000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1,000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

### Custom Label Format

Axis labels support custom label format using placeholder like {value}°C, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs24" %}

### Hide intersecting axis labels

When the axis labels overlap with each other, you can hide the intersected labels by setting the `hideIntersectingLabel` property to true in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs25" %}

## Minimum and Maximum

The [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#minimum-number) and [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/axis/#maximum-number) properties
enables you to customize the start and end values of an axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs26" %}

## Multiple Axes

In addition to the default axis, you can add n number of axis to a gauge.
Each axis will have its own ranges, pointers, annotations and customization options.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs27" %}