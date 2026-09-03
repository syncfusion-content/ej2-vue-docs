---
layout: post
title: How to prevent closing of modal in Vue Dialog | Syncfusion
description: Prevent the Vue Dialog from closing by setting the beforeClose event argument cancel to true, useful for validation before dismissing the modal dialog.
control: Prevent closing of modal dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent closing of modal in Vue Dialog

You can prevent closing of the modal dialog by setting the [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/dialog#beforeclose) event argument `cancel` to `true`.
In the following sample, the dialog is closed when you enter the username value with a minimum of 4 characters. Otherwise, it will not close.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-validation-cs1" %}