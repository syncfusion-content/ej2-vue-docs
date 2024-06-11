---
layout: post
title: Select a sequence of dates in calendar in Vue Calendar component | Syncfusion
description: Learn here all about Select a sequence of dates in calendar in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Select a sequence of dates in calendar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Select a sequence of dates in calendar in Vue Calendar component

The following example demonstrates how to select the week dates of chosen date in the Calendar using [`values`](https://ej2.syncfusion.com/vue/documentation/api/calendar#values) property, when [`isMultiSelection`](https://ej2.syncfusion.com/vue/documentation/api/calendar#ismultiselection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/multi-selection-cs1" %}