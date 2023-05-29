---
layout: post
title: Numeric axis in Vue Chart component | Syncfusion
description: Learn here all about Numeric axis in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Numeric axis 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Numeric axis in Vue Chart component

You can use numeric axis to represent numeric values of data in chart. By default, the `valueType` of an axis is `Double`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs1" %}

## Range

Range for an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#minimum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#maximum) and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#interval) property of the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs2" %}

## Range Padding

Padding can be applied to the minimum and maximum extremes of the axis range by using the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property. Numeric axis supports following types of padding.
* Round
* Normal
* Auto

**Numeric - None**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `None`, minimum and maximum of an axis is based on the data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs3" %}

**Numeric - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `Round`, minimum and maximum will be
rounded to the nearest possible value divisible by interval. For example, when the minimum is 3.5 and the interval is 1, then the minimum will be rounded to 3.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs4" %}

**Numeric - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `Additional`, interval of an axis will
be padded to the minimum and maximum of the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs5" %}

**Numeric - Normal**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `Normal`, padding is applied to the axis
based on default range calculation.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs6" %}

**Numeric - Auto**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `Auto`,horizontal numeric axis takes
None as padding calculation, while the vertical numeric axis takes Normal as padding calculation.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs7" %}

## Label Format

**Numeric Label Format**

Numeric labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#labelformat) property.
Numeric labels supports all globalize format.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs8" %}

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
<td>$1000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

## GroupingSeperator

To separate groups of thousands, use [`useGroupingSeparator`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel/#usegroupingseparator)
property in chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs9" %}

## Custom Label Format

Axis also supports custom label format using placeholder like {value}°C, in which the value represent the axis
label e.g 20°C.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/double-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs10" %}