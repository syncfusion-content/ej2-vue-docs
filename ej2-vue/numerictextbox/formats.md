---
layout: post
title: Formats in Vue Numerictextbox component | Syncfusion
description: Learn here all about Formats in Syncfusion Vue Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Formats 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Formats in Vue Numerictextbox component

You can format the value of NumericTextBox using [`format`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#format) property. The value will be displayed in the specified format when the component is in focused out state. The format string supports both the [standard numeric format](../common/internationalization#supported-format-string/) and [custom numeric format](../common/internationalization#custom-number-formatting-and-parsing/).

## Standard formats

From the [standard numeric formats](../common/internationalization#supported-format-string/), you can use the numeric related format specifiers such as `n`,`p` and `c` in the NumericTextBox component. By using these format specifiers, you can achieve the percentage and currency textbox behavior also.

The below example demonstrates percentage and currency formats.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/number-formats/standard-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/number-formats/standard-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/number-formats/standard-cs1" %}

## Custom formats

From the [custom numeric format](../common/internationalization#custom-number-formatting-and-parsing/), you can provide any custom format by combining one or more custom specifiers.

The below examples demonstrate format the value by using currency format string `#` and `0`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/number-formats/custom-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/number-formats/custom-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/number-formats/custom-cs1" %}