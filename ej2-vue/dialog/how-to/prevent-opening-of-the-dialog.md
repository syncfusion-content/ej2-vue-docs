---
layout: post
title: How to prevent opening of the dialog in Vue Dialog | Syncfusion
description: Prevent the Vue Dialog from opening by setting the beforeOpen event argument cancel to true, useful for conditional display based on input validation.
control: Prevent opening of the dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent opening of the dialog in Vue Dialog

You can prevent opening of the dialog by setting the [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/dialog#beforeopen) event argument cancel value to true.
In the following sample, the success dialog is opened when you enter the username value with minimum 4 characters. Otherwise, it will not be opened.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-check-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-check-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-check-cs1" %}