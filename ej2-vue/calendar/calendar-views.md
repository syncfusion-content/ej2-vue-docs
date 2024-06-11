---
layout: post
title: Calendar views in Vue Calendar component | Syncfusion
description: Learn here all about Calendar views in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Calendar views 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Calendar views in Vue Calendar component

The Calendar has the following predefined views that provide a flexible way to navigate back and forth when selecting dates.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month. |
| year | Displays the months in a year. |
| decade | Displays the years in a decade. |

When view is defined to the [`start`](https://ej2.syncfusion.com/vue/documentation/api/calendar#start) property of the Calendar, it allows you to set the initial view on rendering.

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

By defining the [`start`](https://ej2.syncfusion.com/vue/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/vue/documentation/api/calendar#depth) property with the different view, drill-down and drill-up views navigation can be limited to the user. Calendar views will be drill-down up to the view which is set in `depth` property and drill-up up to the view which is set in `start` property.

The following example displays the Calendar in `decade` view, and allows you to select a date in `month` view.

> Depth view should always be smaller than the start view. If the views are the same, then the Calendar view remains unchanged

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/calendar/min-max-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs3" %}