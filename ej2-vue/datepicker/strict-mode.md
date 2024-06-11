---
layout: post
title: Strict mode in Vue Datepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Strict mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in Vue Datepicker component

## Enable Strict Mode

The [`strictMode`](https://ej2.syncfusion.com/vue/documentation/api/datepicker#strictmode) is an act, that allows the user to enter only the valid date within the specified min/max
range in textbox. If the date is invalid, then the component will stay with the previous value. Else, if the date is out of range, then the component will set the date to the min/max date.

The following example demonstrates the DatePicker in `strictMode` with min/max range of 5th to 25th in a month of May. Here, it allows to enter
only the valid date within the specified range. If you are trying to enter the out-of-range value as like 28th of May, then the value will set to the max date of 25th May. Since the value 28th is greater than to `max` value of 25th. Or else if you are trying to enter the invalid date, then the value will stay with the previous value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/strict-mode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/strict-mode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/strict-mode-cs1" %}

## Disable Strict Mode

By default, the DatePicker act in strictMode `false` state, that allows to enter the invalid or out-of-range date in textbox.

If the date is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with highlighted  `error` class to indicates the date is out of range or invalid.

The following example demonstrates the `strictMode` as `false`. Here, it allows to enter the valid or invalid value in textbox. If you are entering out-of-range or invalid date value, then the model value will be set to `out of range` date value or `null` respectively with highlighted  `error` class to indicates the date is out of range or invalid.

The following example demonstrates the DatePicker with strictMode `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/strict-mode-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/strict-mode-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/strict-mode-cs2" %}