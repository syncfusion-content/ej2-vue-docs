---
layout: post
title: Date Range in Vue Calendar | Syncfusion
description: Restrict date selection in the Syncfusion Vue Calendar using min and max properties, with automatic clamping when the value is out of range.
control: Date range
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date Range in Vue Calendar

Calendar provides an option to select a date value within a specified range by defining the min and max properties. The min date should always be less than the max date. If the values of the `min` or `max` properties are changed programmatically, then update the `value` property to be set within the specified range. Otherwise, if the value is out of the specified date range and less than the min date, the value property will be updated with the `min` date. If the value is higher than the max date, the value property will be updated with the `max` date.

The following example allows you to select a date within the range of 7th to 27th days in a month.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs6" %}