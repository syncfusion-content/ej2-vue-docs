---
layout: post
title: Prevent opening of the dialog in Vue Dialog component | Syncfusion
description: Learn here all about Prevent opening of the dialog in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent opening of the dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent opening of the dialog in Vue Dialog component

You can prevent opening of the dialog by setting the [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/dialog/#beforeopen) event argument cancel value to true.
In the following sample, the success dialog is opened when you enter the username value with minimum 4 characters. Otherwise, it will not be opened.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/dlg-check-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-check-cs1" %}
