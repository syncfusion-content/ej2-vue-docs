---
layout: post
title: Date time range in Vue Datetimepicker component | Syncfusion
description: Learn here all about Date time range in Syncfusion Vue Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Date time range 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date time range in Vue Datetime picker component

## DateTime Restriction

DateTimePicker provides an option to select a date and time value within a specified range by using the [`min`](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker#min) and [`max`](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker#max) properties. Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected datetime value is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with highlighted `error` class to indicates the datetime is out of range or invalid. The value property depends on the min/max with respect to [`strictMode`](./strict-mode/) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datetimepicker/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datetimepicker/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs4" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.

## Time Restriction

DateTimePicker provides an option to select a time value within a specified range by using the [`minTime`](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker#minTime) and [`maxTime`](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker#maxTime) properties. Always the minTime value has to be lesser than the maxTime value.

When minTime and maxTime are set, the component will prioritize min if minTime is less than the current min time, and max if maxTime is greater than the current max time. Conversely, it will prioritize minTime if it is greater than the current min time, and maxTime if it is less than the current max time. These behaviors apply only when min and max Dates are selected or pre-bounded, with minTime and maxTime values set for all other dates apart from min and max dates.

The value property depends on the minTime/maxTime with respect to [`strictMode`](./strict-mode/) property.

The below example allows selecting a time within the range from 10:00 AM to 8:30 PM of each day.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datetimepicker/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datetimepicker/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs4" %}
