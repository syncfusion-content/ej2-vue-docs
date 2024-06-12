---
layout: post
title: Date time axis in Vue Chart component | Syncfusion
description: Learn here all about Date time axis in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Date time axis 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Date time axis in Vue Chart component

## DateTime Axis

 Date time axis uses date time scale and displays the date time values as axis labels in the specified format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs2" %}

>Note: To use datetime axis, we need to inject `DateTime` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#valuetype) of axis to `DateTime`.

## DateTimeCategory Axis

Date-time category axis is used to display the date-time values with non-linear intervals. For example, the
business days alone have been depicted in a week here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs3" %}

>Note: To use datetime axis, we need to inject `DateTimeCategory` into the `provide` and

set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#valuetype) of axis to `DateTimeCategory`. Of the axis using [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#minimum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#maximum) and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#interval) property of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs4" %}

### Interval Customization

Date time intervals can be customized by using the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#interval) and[`intervalType`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#intervaltype) properties of the axis. For example, when you set interval as 2 and intervalType as years, it considers 2 years as interval.
DateTime axis supports following interval types,

* Auto
* Years
* Months
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs5" %}

**Applying Padding to the Range**

Padding can be applied to the minimum and maximum extremes of the range by using the
[`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) property. Date time axis supports the following types
* None
* Additional

**DateTime - None**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `None`, minimum and maximum of the axis is based on the data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs6" %}

**DateTime - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `Round`, minimum and maximum will be
rounded to the nearest possible value divisible by interval. For example, when the minimum is 15th Jan, interval is
1 and the interval type is ‘month’, then the axis minimum will be Jan 1st.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs7" %}

**DateTime - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rangepadding) is set to `Additional`, interval of an axis will
be padded to the minimum and maximum of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs8" %}

## Label Format

You can format and parse the date to all globalize format using [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#labelformat) property in an axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs9" %}

The following table describes the result of applying some common date time formats to the labelFormat property

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
<td>The Date is displayed in day format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format</td>
</tr>
</table>

<!-- markdownlint-disable MD033 -->