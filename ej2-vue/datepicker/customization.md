---
layout: post
title: Customization in Vue Datepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Datepicker component

You can customize the  entire appearance of the input element and Calendar by using custom [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#cssclass) property.
and also you can use the calendar's [`renderDayCell`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/renderDayCellEventArgs/#renderdaycelleventargs) event to customize the appearance of the each day cell.

Below is the list of classes that provides flexible way to customize the DatePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-wrapper | Applied to DatePicker wrapper |
| e-datepicker | Applied to the DatePicker element.|
| e-float-text | Applied to the floating label.  |
| e-date-icon | Applied to the DatePicker icon. |
| e-popup-wrapper | Applied to DatePicker popup wrapper.|
| e-calendar | Applied to Calendar element. |
| e-header | Applied to Calendar header.|
| e-title |Applied to Calendar title. |
| e-icon-container | Applied to Calendar previous and next icon container.|
| e-prev |  Applied to Calendar previous icon.|
| e-next | Applied to Calendar next icon.|
| e-weekend | Applied to Calendar weekend dates.|
| e-other-month |  Applied to Calendar other month dates.|
| e-day | Applied to each day cell of the Calendar.|
| e-selected | Applied to Calendar selected dates.|
| e-disabled | Applied to Calendar disabled dates.|

The following example disables the weekends of every month using `renderDayCell` event. Here we have used the `e-disabled` class to highlight the disabled date.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/min-max-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/min-max-cs1" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs1" %}

## See Also

* [How to disable the DatePicker component](./how-to/disabled-the-datepicker-component)
* [How to set read-only for DatePicker](./how-to/set-the-readonly)
* [How to customize the DatePicker day header](./how-to/customize-the-datepicker-day-header)