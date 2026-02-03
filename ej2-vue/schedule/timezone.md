---
layout: post
title: Timezone in Vue Schedule component | Syncfusion
description: Learn here all about Timezone in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Timezone 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Timezone in Vue Schedule component

The Scheduler makes use of the current system time zone by default. If it needs to follow some other user-specific time zone, then the [`timezone`](../api/schedule#timezone) property needs to be used. Apart from the default action of applying specific timezone to the Scheduler, it is also possible to set different time zone values for each appointments through the properties [`startTimezone`](https://helpej2.syncfusion.com/vue/documentation/api/schedule/field#starttimezone) and [`endTimezone`](https://helpej2.syncfusion.com/vue/documentation/api/schedule/field#endtimezone) which can be defined as separate fields within the event fields collection.

>Note: **timezone** property only applicable for the appointment processing and current time indication.

## Understanding date manipulation in JavaScript

The `new Date()` in JavaScript returns the exact current date object with complete time and timezone information. For example, it may return value such as `Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)` which indicates that the current date is December 12, 2018 and the current time is 5.23 AM on browsers following the IST timezone.

## Scheduler with no timezone

When no timezone is explicitly set, the Scheduler uses the **client browser’s timezone**. As a result:

- Events are displayed based on the viewer’s local timezone.
- The same event may appear at different times for users in different regions.

In the following example, an appointment is displayed from **9:00 AM to 10:00 AM** regardless of the viewer’s timezone because the start and end times are provided using `new Date()` and interpreted locally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/time-zone-cs1" %}

## Scheduler set to a specific timezone

A fixed timezone can be applied to the Scheduler using the  [`timezone`](../api/schedule#timezone) property. When this property is set, all appointments are rendered based on the specified timezone, regardless of the user’s local system timezone.

In the following example, the Scheduler is configured to use **Eastern Time (UTC −05:00)**:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/time-zone-cs2" %}

## Display events on same time everywhere with no time difference

To display events **at the same time across all timezones**, set the Scheduler’s [`timezone`](../api/schedule#timezone) property to `UTC`. This ensures that event times stored in the database are displayed consistently for every user, without conversion.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/time-zone-cs3" %}

## Set specific timezone for events

It is possible to set different timezone for Scheduler events by setting [`startTimezone`](https://helpej2.syncfusion.com/vue/documentation/api/schedule/field#starttimezone) and [`endTimezone`](https://helpej2.syncfusion.com/vue/documentation/api/schedule/field#endtimezone) properties within the [`eventSettings`](../api/schedule/eventSettings) option. It allows each appointment to maintain different timezone and displays on Scheduler with appropriate time differences.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/time-zone-cs4" %}

## Add or remove timezone names to/from the timezone collection

Instead of displaying all the timezone names within the timezone collection (more than 200 are displayed on the editor window timezone fields by default), you can customize the timezone collection at application end as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/time-zone-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/time-zone-cs5" %}

## Timezone methods

### offset

Calculates the offset (in minutes) between a UTC date and a specific timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
| Timezone | String | Timezone.|

Returns `number`

```
    // Assume your local timezone as IST/UTC+05:30
    let timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let timeZoneOffset = timezone.offset(date,"Europe/Paris");
    console.log(timeZoneOffset); //-60
```

### convert

This method is used to convert the passed date from one timezone to another timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
| fromOffset | number/string | Timezone from which date need to be converted.|
| toOffset | number/string | Timezone to which date need to be converted.|

Returns `Date`

```
    // Assume your local timezone as IST/UTC+05:30
    let timezone = new Timezone();
    let date = new Date(2018,11,5,15,25,11);
    let convertedDate = timezone.convert(date, "Europe/Paris", "Asia/Tokya");
    let convertedDate1 = timezone.convert(date, 60, -360);
    console.log(convertedDate); //2018-12-05T08:55:11.000Z
    console.log(convertedDate1); //2018-12-05T16:55:11.000Z
```

### add

This method is used to add the time difference between passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
| Timezone | String | Timezone.|

Returns `Date`

```
    // Assume your local timezone as IST/UTC+05:30
    let timezone = new Timezone();
    let date = new Date(2018,11,5,15,25,11);
    let convertedDate = timezone.add(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T05:25:11.000Z
```

### remove

This method is used to remove the time difference between passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as date object.|
| Timezone | String | Timezone.|

Returns `Date`

```
    // Assume your local timezone as IST/UTC+05:30
    let timezone = new Timezone();
    let date = new Date(2018,11,5,15,25,11);
    let convertedDate = timezone.remove(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T14:25:11.000Z
```

### removeLocalOffset

This method is used to remove the local offset time from the date passed.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as date object.|

Returns `Date`

```
    // Assume your local timezone as IST/UTC+05:30
    let timezone = new Timezone();
    let date = new Date(2018,11,5,15,25,11);
    let convertedDate = timezone.removeLocalOffset(date);
    console.log(convertedDate); //2018-12-05T15:25:11.000Z
```

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.