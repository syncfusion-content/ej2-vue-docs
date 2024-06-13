---
layout: post
title: Numeric axis in Vue 3D Chart component | Syncfusion
description: Learn here all about numeric axis in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Numeric axis in Vue 3D Chart component

The [numeric axis](https://www.syncfusion.com/vue-components/vue-charts/chart-axis) can be used to represent the numeric values of data in 3D chart. By default, the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#valuetype) of an axis is **Double**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/numeric-axis/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/numeric-axis/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/numeric-axis" %}

## Range

The range of an axis will be calculated automatically based on the provided data, and it can also be customized by using the [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#maximum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#maximum) and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) properties of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/range/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/range/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/range" %}

## Range padding

Padding can be applied to the minimum and maximum extremes of an axis range by using the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) property. Numeric axis supports the following types of padding.

* None
* Round
* Additional
* Normal
* Auto

**Numeric - None**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to **None**, minimum and maximum of the axis is based on the data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/none/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/none/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/none" %}

**Numeric - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to **Round**, minimum and maximum will be rounded to the nearest possible value, which is divisible by interval. For example, when the minimum is **3.5** and the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) is **1**, then the minimum will be rounded to **3**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/round/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/round/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/round" %}

**Numeric - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to **Additional**, interval of an axis will be added to the minimum and maximum of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/additional/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/additional/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/additional" %}

**Numeric - Normal**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to **Normal**, padding is applied to the axis based on default range calculation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/normal/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/normal/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/normal" %}

**Numeric - Auto**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to **Auto**, horizontal numeric axis takes **None** as padding calculation, while the vertical numeric axis takes **Normal** as padding calculation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/auto/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/auto/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/auto" %}

## Label format

**Numeric label format**

Numeric labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#labelformat) property. Also, it supports all globalize format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/label-format/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/label-format/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/label-format" %}

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
<td>The Number is rounded to 1 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place.</td>
</tr>
</table>

## Grouping separator

To separate the y-axis labels to groups of thousands, set the [`useGroupingSeparator`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#usegroupingseparator) property to **true** in the 3D chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/group-separator/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/group-separator/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/group-separator" %}

## Custom label format

The axis supports custom label format using placeholder like **{value}°C**, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/custom-label/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/numeric/custom-label/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/numeric/custom-label" %}