---
layout: post
title: Perform custom validation using form validator in Vue Numerictextbox component | Syncfusion
description: Learn here all about Perform custom validation using form validator in Syncfusion Vue Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Perform custom validation using form validator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom validation using form validator in Vue Numerictextbox component

This section explains how to perform custom validation on the NumericTextBox using FormValidator. The NumericTextBox will be validated when the value changes or the user clicks the submit button.
Validation can be performed by adding custom validation in the rules collection of the FormValidator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/how-to/validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/how-to/validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/how-to/validation-cs1" %}