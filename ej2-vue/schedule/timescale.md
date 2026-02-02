---
layout: post
title: Timescale in Vue Schedule component | Syncfusion
description: Learn here all about Timescale in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Timescale 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Timescale in Vue Schedule component

The time slots are usually the time cells that are displayed on the Day, Week and Work Week views of both the calendar (to the left most position) and timeline views (at the top position). The [`timeScale`](../api/schedule/timeScale) property allows you to control and set the required time slot duration for the work cells displayed on Scheduler. It includes the following sub-options such as,

* [`enable`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#enable) - When set to `true`, allows the Scheduler to display the appointments accurately against the exact time duration. If set to `false`, all the appointments of a day will be displayed one below the other with no grid lines displayed. Its default value is `true`.
* [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#interval) – Defines the time duration on which the time axis to be displayed either in 1 hour or 30 minutes interval and so on. It accepts the values in minutes and defaults to 60.
* [`slotCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#slotcount) – Decides the number of slot count to be split for the specified time interval duration. It defaults to 2, thus displaying two slots to represent an hour(each slot depicting 30 minutes duration).

>Note: The upper limit for rendering slots within a single day, utilizing the **interval** and **slotCount** properties of the **timeScale**, stands at 1000. This constraint aligns with the maximum **colspan** value permissible for the **table** element, also capped at 1000. This particular restriction is relevant exclusively to the `TimelineDay`, `TimelineWeek` and `TimelineWorkWeek` views.

## Setting different time slot duration

The [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#interval) and [`slotCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#slotcount) properties can be used together on the Scheduler to set different time slot duration which is depicted in the following code example. Here, six time slots together represents an hour.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs1" %}

## Customizing time cells using template

The [`timeScale`](../api/schedule/timeScale) property also supports templates that allow complete customization of time slot appearance. These templates can be defined using either strings or HTML elements and have access to time-related details.


* [`majorSlotTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#majorslottemplate) - The template option to be applied for major time slots. Here, the template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the time cells. The time details can be accessed within this template.
* [`minorSlotTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#minorslottemplate) - The template option to be applied for minor time slots. Here, the template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the time cells. The time details can be accessed within this template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs2" %}

## Hiding the timescale grid

The visibility of the Scheduler’s time grid can be controlled using the `enable` option in the [`timeScale`](../api/schedule/timeScale) configuration. When `enable` is set to `false`, the grid lines that represent exact time durations are hidden, and appointments are displayed without time alignment.

The default value of this option is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs3" %}

## Highlighting the current date and time

By default, the Scheduler highlights the **current date** in the date header and displays a **current time indicator** in applicable views, including Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week.

To disable the current time indicator, set the [`showTimeIndicator`](../api/schedule#showtimeindicator) property to `false`. The default value of this property is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/timescale-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs4" %}

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.