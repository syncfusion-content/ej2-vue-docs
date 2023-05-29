---
layout: post
title: Localization in Vue Inplace editor component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Inplace editor component

## Localization

Localization library allows you to localize the default text content of the In-place Editor to different cultures using the [locale](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#locale) property. In-place Editor following keys will be localize based on culture.

| Locale key | en-US (default) |
|------|------|
| save | Close |
| cancel | Cancel |
| loadingText | Loading... |
| editIcon | Click to edit |
| editAreaClick | Click to edit |
| editAreaDoubleClick | Double click to edit |

To load translation object in an application use `load` function of `L10n` class. In the following sample, `French` culture is set to In-place Editor and change the tooltip text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs19" %}

## Right to left

Specifies the direction of the In-place Editor component using the [enableRtl](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#enablertl) property. For writing systems that require it like Arabic, Hebrew, etc., the direction can be switched to right-to-left.

> It will not change based on the locale property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs20" %}

## Format

Formatting is a way of representing the value in different format. You can format the following mentioned components with its `format` property, when it passed through the In-place Editor [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#model) property.

* [DatePicker](https://ej2.syncfusion.com/vue/documentation/datepicker/date-format/)
* [DateRangePicker](https://ej2.syncfusion.com/vue/documentation/daterangepicker/globalization/#customize-the-date-format)
* [DateTimePicker](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker/#timeformat)
* [NumericTextBox](https://ej2.syncfusion.com/vue/documentation/numerictextbox/formats/)
* [Slider](https://ej2.syncfusion.com/vue/documentation/range-slider/format/)
* [TimePicker](https://ej2.syncfusion.com/vue/documentation/api/timepicker#format)

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs21" %}