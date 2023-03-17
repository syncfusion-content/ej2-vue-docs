---
layout: post
title: Islamic calendar in Vue Calendar component | Syncfusion
description: Learn here all about Islamic calendar in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Islamic calendar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Islamic calendar in Vue Calendar component

In addition to the Gregorian calendar, the Calendar control supports displaying the Islamic calendar (Hijri calendar). **Islamic calendar** or **Hijri calendar** is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To know more about Islamic calendar, please refer this [wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar).

Also, it consists of all Gregorian calendar functionalities as like min and max date, week number, start day of the week, multi selection enable RTL, start and depth view, localization, highlight and customize the specific dates.

By default, calendar mode is in **Gregorian**. You can enable the Islamic mode by setting the **calendarMode** as **Islamic**. Also, need to import and injecting the `Islamic` module into the `provide` section from `ej2-vue-calendars` as shown below.

> import { Islamic, CalendarPlugin } from '@syncfusion/ej2-vue-calendars';\
> Vue.use(CalendarPlugin);

The following example demonstrates how to display the Islamic Calendar (Hijri Calendar).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/calendar/islamic-calendar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/islamic-calendar-cs1" %}