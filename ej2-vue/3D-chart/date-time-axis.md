---
layout: post
title: DateTime axis in Vue 3D Chart component | Syncfusion
description: Learn here all about datetime axis in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# DateTime axis in Vue 3D Chart component

## DateTime axis

DateTime axis uses date time scale and displays the date time values as axis labels in the specified format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/dateTime/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/dateTime/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/dateTime" %}

>Note: To use datetime axis, we need to inject `DateTime3D` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#valuetype) of axis to **DateTime**.

## DateTime category axis

DateTime category axis is used to display the date time values with non-linear intervals. For example, the business days alone have been depicted in a week here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/datetime-category/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/datetime-category/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/datetime-category" %}

>Note: To use datetime category axis, we need to inject `DateTimeCategory3D` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#valuetype) of axis to **DateTimeCategory**.

### Range

Range of an axis will be calculated automatically based on the provided data. You can also customize the range of an axis using [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#minimum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#maximum) and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/range/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/range/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/range" %}

### Interval customization

Date time intervals can be customized by using the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) and [`intervalType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#intervaltype) properties of the axis. For example, when you set `interval` as **2** and `intervalType` as **Years**, it considers 2 years as interval. DateTime axis supports following interval types,

* Auto
* Years
* Months
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/interval/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/interval/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/interval" %}

**Applying padding to the range**

Padding can be applied to the minimum and maximum extremes of the range by using the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) property. DateTime axis supports the following types of padding,

* None
* Round
* Additional

**Datetime - None**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to `None`, minimum and maximum of an axis is based on the data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/none/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/none/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/none" %}

**DateTime - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to `Round`, minimum and maximum will be rounded to the nearest possible value, which is divisible by interval. For example, when the minimum is **15th Jan**, interval is **1** and interval type is **Month**, then the axis minimum will be **Jan 1st**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/round/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/round/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/round" %}

**DateTime - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#rangepadding) is set to `Additional`, interval of an axis will be padded to the minimum and maximum of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/additional/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/additional/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/additional" %}

## Label format

The date can be formatted and parsed to all globalize format using the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#labelformat) property in an axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/format/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/format/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/format" %}

The following table describes the result of applying some common date time formats to the `labelFormat` property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>The Date is displayed in day format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format.</td>
</tr>
</table>

## Custom label format

Axis also supports custom label format using placeholder like {value}°C, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/custom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/date-time/custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/date-time/custom" %}