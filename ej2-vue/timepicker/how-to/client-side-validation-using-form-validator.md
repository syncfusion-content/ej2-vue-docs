---
layout: post
title: How to add client-side validation in Vue TimePicker | Syncfusion
description: Validate the Syncfusion Vue TimePicker in client-side forms using Essential JS 2 FormValidator with custom rules and error messages.
control: Client side validation using form validator
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add client-side validation in Vue TimePicker

To achieve client side validation in a TimePicker component, use [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator). It provides an option to customize feedback error messages to the corresponding fields for taking action and resolving the issue.

In the following example, the required field validation is implemented by mapping the name attribute value to the rules property. It validates the TimePicker component and displays the validation message when the textbox value is empty during form post back or focus out.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timepicker/validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timepicker/validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/validation-cs1" %}