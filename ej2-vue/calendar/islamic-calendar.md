---
layout: post
title: Islamic Calendar in Vue Calendar | Syncfusion
description: Display the Islamic (Hijri) calendar in the Syncfusion Vue Calendar alongside the default Gregorian mode by injecting the Islamic module.
control: Islamic calendar
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Islamic Calendar in Vue Calendar

In addition to the Gregorian calendar, the Calendar component supports displaying the Islamic calendar (Hijri calendar). **Islamic calendar** or **Hijri calendar** is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To know more about Islamic calendar, please refer this [wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar).

Also, it consists of all Gregorian calendar functionalities such as min and max date, week number, start day of the week, multi selection enable RTL, start and depth view, localization, highlight and customize the specific dates.

By default, the calendar mode is **Gregorian**. You can enable the Islamic mode by setting the **calendarMode** as **Islamic**. Also, need to import and inject the `Islamic` module into the `provide` section from `@syncfusion/ej2-vue-calendars` as shown below.

> import { Islamic, CalendarPlugin } from '@syncfusion/ej2-vue-calendars';\
> Vue.use(CalendarPlugin);

The following example demonstrates how to display the Islamic Calendar (Hijri Calendar).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/islamic-calendar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/islamic-calendar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/islamic-calendar-cs1" %}