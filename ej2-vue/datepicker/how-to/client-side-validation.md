---
layout: post
title: How to add client-side validation in Vue DatePicker | Syncfusion
description: Validate the Syncfusion Vue DatePicker in client-side forms using Essential JS 2 FormValidator with custom rules and error messages.
control: Client side validation
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add client-side validation in Vue DatePicker

To achieve the client side validation in a DatePicker component by using [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In the below example, the required field validation is implemented by mapping the name attribute value to the rules property. It will validate the DatePicker component and display the validation message when the textbox value is empty during form post back or focus out.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs4" %}