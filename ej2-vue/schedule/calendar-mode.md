---
layout: post
title: Calendar mode in Vue Schedule component | Syncfusion
description: Learn here all about Calendar mode in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Calendar mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Calendar mode in Vue Schedule component

The Scheduler supports the following two types of calendar mode.

* Gregorian Calendar
* Islamic Calendar

## Gregorian Calendar

The Schedule component displays Gregorian calendar dates by default. The Gregorian calendar is a solar-based system with 12 months containing 28 to 31 days. Years divisible by four are considered leap years, containing 366 days, while standard years include 365 days.

## Islamic Calendar

The Islamic calendar, also known as the Hijri or Muslim calendar, is a lunar-based system consisting of 12 months with 354 or 355 days. Each month begins with the sighting of the new moon; therefore, months may contain either 29 or 30 days. Odd‑numbered months have 30 days, and even‑numbered months have 29 days.

> The current Islamic year is 1440 AH. Usually the Gregorian calendar runs from approximately 11 September 2018 to 30 August 2019 for this 1440 AH year.

The Schedule component includes a `calendarMode` property that switches between `Gregorian` and `Islamic` modes. The default value is `Gregorian`. To display Islamic calendar dates, set `calendarMode` to `Islamic`. The following example depicts, how to display the Islamic calendar dates on Scheduler.

To enable Islamic calendar functionality, import the `Calendar` and `Islamic` modules from the `ej2-calendars` package and inject them using the `Calendar.Inject` method. Additionally, the Islamic calendar requires the following CLDR data to be loaded using the `loadCldr` function:

* numberingSystems.json
* ca-gregorian.json
* numbers.json
* timeZoneNames.json
* ca-islamic.json

> For detailed guidance on installing CLDR data, refer to the  [`Internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization#installing-cldr-data) documentation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/islamic-calendar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/islamic-calendar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/islamic-calendar-cs1" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for comprehensive feature details. Explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) for practical demonstrations of data presentation and interaction.