---
layout: post
title: Date range in Vue Calendar component | Syncfusion
description: Learn here all about Date range in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Date range 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date range in Vue Calendar component

Calendar provides an option to select a date value within a specified range by defining the min and max properties. The min date should always be lesser than the max date. If the value of `min` or `max` properties are changed through code behind, then update the `value` property to be set within the specified range.  Or else, if the value is out of specified date range and less than min date, value property will be updated with the `min` date or, if the value is higher than max date, value property will be updated with the `max` date.

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