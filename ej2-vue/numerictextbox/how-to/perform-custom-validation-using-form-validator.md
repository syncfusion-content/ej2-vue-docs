---
layout: post
title: Custom validation using FormValidator in Vue Numeric Textbox | Syncfusion
description: Run custom FormValidator rules against the Syncfusion Vue Numeric Textbox so it validates on value change and submit.
control: Perform custom validation using form validator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to perform custom validation using FormValidator in Vue Numeric Textbox

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