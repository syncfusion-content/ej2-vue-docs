---
layout: post
title: Date Range in Vue DatePicker | Syncfusion
description: Restrict date selection in the Syncfusion Vue DatePicker using min and max properties, with out-of-range values marked with an error class.
control: Date range
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date Range in Vue DatePicker

DatePicker provides an option to select a date value within a specified range by using the [`min`](https://ej2.syncfusion.com/vue/documentation/api/datepicker#min) and [`max`](https://ej2.syncfusion.com/vue/documentation/api/datepicker#max) properties. Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected date value is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with highlighted `error` class to indicates the date is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/min-max-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/min-max-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/min-max-cs2" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.