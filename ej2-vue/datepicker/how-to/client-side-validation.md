---
layout: post
title: Client side validation in Vue Datepicker component | Syncfusion
description: Learn here all about Client side validation in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Client side validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Client side validation in Vue Datepicker component

To achieve the client side validation in a DatePicker component by using [Essential JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator/). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In the below example, the required field validation is implemented by mapping the name attribute value to the rules property. It will validate the DatePicker component and display the validation message when the textbox value is empty during form post back or focus out.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs4" %}