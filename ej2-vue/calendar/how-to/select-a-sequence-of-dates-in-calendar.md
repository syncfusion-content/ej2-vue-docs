---
layout: post
title: How to select a sequence of dates in Vue Calendar | Syncfusion
description: Select a full week of dates in the Syncfusion Vue Calendar by combining isMultiSelection with Moment.js week start and end helpers.
control: Select a sequence of dates in calendar
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to select a sequence of dates in Vue Calendar

The following example demonstrates how to select the week dates of a chosen date in the Calendar using the [`values`](https://ej2.syncfusion.com/vue/documentation/api/calendar/index-default#values) property, when [`isMultiSelection`](https://ej2.syncfusion.com/vue/documentation/api/calendar/index-default#ismultiselection) property is enabled. The sample provides Week and Work Week buttons to select a full week or a work week (Monday through Friday) of dates, respectively. Moment.js methods are used in this sample for calculating the start and end of week from the selected date, so the `moment` npm package must be installed to run this sample locally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/calendar/multi-selection-cs1" %}