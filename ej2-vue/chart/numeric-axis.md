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

The numeric axis is used to represent numeric values in a chart. By default, the `valueType` of an axis is set to `Double`, which is suitable for displaying continuous numerical data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs1" %}

## Range

The range of the axis is calculated automatically based on the provided data. You can also customize the visible range by using the [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#minimum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#maximum), and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#interval) properties of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs2" %}

## Range Padding

Padding can be applied to the minimum and maximum values of the axis range by using the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property. The numeric axis supports the following padding options:

* Round
* Normal
* Auto

**Numeric – None**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property is set to `None`, the minimum and maximum values of the axis are derived directly from the data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs3" %}

**Numeric – Round**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property is set to `Round`, the minimum and maximum values are rounded to the nearest values divisible by the interval. For example, if the minimum value is 3.5 and the interval is 1, the minimum value is rounded to 3.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs4" %}

**Numeric – Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property is set to `Additional`, one interval is added to both the minimum and maximum values of the axis range.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs5" %}

**Numeric – Normal**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property is set to `Normal`, padding is applied to the axis based on the default range calculation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs6" %}

**Numeric – Auto**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property is set to `Auto`, the horizontal numeric axis uses `None` as padding, while the vertical numeric axis uses `Normal` padding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs7" %}

## Label Format

**Numeric label format**

Numeric axis labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#labelformat) property. This property supports all Globalize numeric formats.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs8" %}

The following table shows examples of commonly used numeric label formats and their corresponding outputs.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>Rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>Rounded to 2 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>Rounded to 3 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>Converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>Converted to percentage with 2 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>Converted to percentage with 3 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>Currency format with 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>Currency format with 2 decimal places</td>
</tr>
</table>

## GroupingSeperator

To separate groups of thousands in numeric labels, enable the [`useGroupingSeparator`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel/#usegroupingseparator) property in the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs9" %}

## Custom Label Format

The numeric axis also supports custom label formats by using placeholders such as `{value}°C`, where `{value}` represents the numeric axis label. For example, the value `20` is displayed as `20°C`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/double-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs10" %}