---
layout: post
title: Holidays in Vue Gantt component | Syncfusion
description: Learn here all about Holidays in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Holidays 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Holidays in Vue Gantt component

Non-working days in a project can be displayed in the Gantt component using the [`holidays`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#holidays) property. Each holiday can be defined with the following properties:

* [`from`](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday/#from): Defines start date of the holiday(s).
* [`to`](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday/#to): Defines end date of the holiday(s).
* [`label`](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday/#label): Defines the description or label for the holiday.
* [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/gantt/holiday/#cssclass): Formats the holidays label in the Gantt chart.

To highlight the days, inject the [`DayMarkers`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#daymarkersmodule) module in the `provide` section.

The following code example shows how to display the non-working days in the Gantt component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/holidays-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/holidays-cs1" %}