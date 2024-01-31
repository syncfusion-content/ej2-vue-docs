---
layout: post
title: Customization in Vue Daterangepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Daterangepicker component

The DateRangePicker is available for UI customization that can be achieved by using available properties and events in the component.

## Day cell format

The DateRangePicker is available for UI customization based on your application requirements. It can be achieved by using [`renderDayCell`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/renderDayCellEventArgs/#renderdaycelleventargs) event that provides an option to customize each day cell on rendering.

The following example disables the weekends of every month by using `renderDayCell` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs2" %}

## Preset Ranges

DateRangePicker provides an option to set the predefined ranges via [`presets`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#presets) property with the corresponding label. This property will accept the values in the order of label, start date (date object), end date (date object), and append these ranges in the component for quick selection. In the following sample, you can easily choose the frequently used range options from the list of ranges.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs3" %}

## First day of week

Start day in a week will differ based on the culture, but you can also customize this based on the application needs. For this, you have to make use of [`firstDayOfWeek`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#firstdayofweek) property. By default, first day of a week in en-US is Sunday. In the following example it is customized to Monday with the help of this property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs4" %}

## See Also

* [How to customize DateRangePicker using cssClass](./how-to/customization-using-cssclass)
* [How to disable DateRangePicker component](./how-to/disable-the-daterangepicker-component)
* [How to customize the DateRangePicker day header](./how-to/customize-the-daterangepicker-day-header)