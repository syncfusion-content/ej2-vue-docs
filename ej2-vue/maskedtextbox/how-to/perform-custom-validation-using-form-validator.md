---
layout: post
title: Custom validation using FormValidator | Syncfusion
description: Validate mobile numbers in the Syncfusion Vue MaskedTextBox with a custom FormValidator rule and a rules collection.
control: Perform custom validation using form validator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to perform custom validation using FormValidator

To perform custom validation on the MaskedTextBox use the FormValidator along with custom validation rules.

In the following example, the MaskedTextBox is validated for invalid mobile number by adding custom validation in the rules collection of the FormValidator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/how-to/validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/how-to/validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/how-to/validation-cs1" %}