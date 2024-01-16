---
layout: post
title: Range restriction in Vue Daterangepicker component | Syncfusion
description: Learn here all about Range restriction in Syncfusion Vue Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Range restriction 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Range restriction in Vue Daterangepicker component

Range selection in a DateRangePicker can be made-to-order with desire restrictions based on the application needs.

## Restrict the range within a range

You can restrict the minimum and maximum date that can be allowed as start and end date in a range selection with the help of [`min`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#min), [`max`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#max) properties.
* `min` – sets the minimum date that can be selected as startDate.
* `max` – sets the maximum date that can be selected as endDate.

In the following sample, you can select a range from 15th day of this month to 15th day of next month.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs10" %}

> If the value of `min` or `max` property is changed through code behind, update the `start date` and `end date` properties to set within the range. Or else , if the `start` and `end` date is out of specified date range, a validation error class will be appended to the input element.
> If `strictMode` is enabled, and both the start, end date is lesser than the min date then start and end date will be updated with `min` date. If both the start and end date is higher than the max date then start and end date will be updated with `max` date. Or else, if startDate is less than `min` date, startDate will be updated with `min` date or if endDate is greater than `max` date, endDate will be updated with the `max` date.

## Range span

Span between ranges can be limited to avoid excess or less days selection towards the required days in a range.
In this, minimum and maximum span allowed within the date range can be customized by [`minDays`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#mindays) and [`maxDays`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#maxdays) properties.
* minDays- Sets the minimum number of days between start and end date.
* maxDays- Sets the maximum number of days between start and end date.
In the following sample, the range selection should be greater than 3 days and less than 8 days else it will not set.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs11" %}

## Strict mode

DateRangePicker provides an option to limit the user towards entering the valid date.  With strict mode, you can set only the valid date.
If any invalid range is specified, the date range value resets to previous value. This restriction can be availed by enabling [`strictMode`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker/#strictmode) property as true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs12" %}
