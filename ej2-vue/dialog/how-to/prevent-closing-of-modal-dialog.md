---
layout: post
title: Prevent closing of modal dialog in Vue Dialog component | Syncfusion
description: Learn here all about Prevent closing of modal dialog in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent closing of modal dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent closing of modal dialog in Vue Dialog component

You can prevent closing of modal dialog by setting the [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/dialog/#beforeclose) event argument cancel value to true.
In the following sample, the dialog is closed when you enter the username value with minimum 4 characters. Otherwise, it will not be closed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-validation-cs1" %}