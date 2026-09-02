---
layout: post
title: How to change the first day of week in Vue Calendar | Syncfusion
description: Change the first day of the week in the Syncfusion Vue Calendar using the firstDayOfWeek property, overriding the culture default.
control: Change the first day of week
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change the first day of week in Vue Calendar

The Calendar provides an option to change the first day of the week by using the [`firstDayOfWeek`](https://ej2.syncfusion.com/vue/documentation/api/calendar/index-default#firstdayofweek) property. Generally, the day of the week starts from 0 (Sunday) and ends with 6 (Saturday).

> By default, the first day of the week is culture specific.

The following example shows the Calendar with `Tuesday` as the first day of the week.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs2" %}