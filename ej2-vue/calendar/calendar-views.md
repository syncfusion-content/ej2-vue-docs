---
layout: post
title: Calendar Views in Vue Calendar | Syncfusion
description: Switch between month, year, and decade views in the Syncfusion Vue Calendar using the start and depth properties to control drill-down navigation.
control: Calendar views
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Calendar Views in Vue Calendar

The Calendar has the following predefined views that provide a flexible way to navigate back and forth when selecting dates.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month. |
| year | Displays the months in a year. |
| decade | Displays the years in a decade. |

When a view is assigned to the [`start`](https://ej2.syncfusion.com/vue/documentation/api/calendar#start) property of the Calendar, it sets the initial view on rendering.

The following example demonstrates how to set the `year` as the start view of the Calendar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs2" %}

## View restriction

By defining the [`start`](https://ej2.syncfusion.com/vue/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/vue/documentation/api/calendar#depth) properties with different views, drill-down and drill-up navigation can be limited for the user. The Calendar will drill down only to the view set in the `depth` property and drill up only to the view set in the `start` property.

The following example displays the Calendar in `decade` view, and allows you to select a date in `month` view.

> Depth view should always be smaller than the start view. If the views are the same, then the Calendar view remains unchanged.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs3" %}