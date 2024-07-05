---
layout: post
title: Custom validation in Vue Maskedtextbox component | Syncfusion
description: Learn here all about Perform custom validation using form validator in Syncfusion Vue Maskedtextbox component of Syncfusion Essential JS 2 and more.
control: Perform custom validation using form validator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom validation using form validator in Vue Maskedtextbox component

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