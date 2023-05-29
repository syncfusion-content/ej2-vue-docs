---
layout: post
title: Css customization in Vue Timepicker component | Syncfusion
description: Learn here all about Css customization in Syncfusion Vue Timepicker component of Syncfusion Essential JS 2 and more.
control: Css customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Css customization in Vue Timepicker component

TimePicker allows you to customize the textbox and popup list appearance to suit your application by using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/timepicker#cssclass) property.

The below sample demonstrates customization of text appearance in a textbox, popup button, and popup list along with hover and active
state by using `e-custom-style` class. Following is the list of available classes used to customize the entire TimePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-time-wrapper | Applied to TimePicker wrapper element. |
| e-timepicker |  Applied to input element and TimePicker popup element. |
| e-time-wrapper.e-timepicker | Applied to input element only. |
| e-input-group-icon.e-time-icon | Applied to popup button. |
| e-float-text | Applied to floating label text element. |
| e-popup | Applied to popup element. |
| e-timepicker.e-popup | Applied to TimePicker popup element only. |
| e-list-parent | Applied to popup UL element. |
| e-timepicker.e-list-parent | Applied to TimePicker popup UL element only. |
| e-list-item | Applied to LI elements. |
| e-hover | Applied to LI element hovering time. |
| e-active | Applied to active LI element. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timepicker/strict-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/strict-cs1" %}