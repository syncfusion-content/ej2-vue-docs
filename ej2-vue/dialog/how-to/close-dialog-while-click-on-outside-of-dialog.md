---
layout: post
title: Close by clicking on outside of dialog in Vue Dialog Component | Syncfusion
description: Learn here all about close by clicking on outside of dialog in Syncfusion Essential Vue Dialog component, it's element and more.
control: Close dialog while click on outside of dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Close by clicking on outside of dialog in Vue Dialog Component

By default, dialog can be closed by pressing Esc key and clicking the close icon on the right of dialog header. It can also be closed by clicking outside of the dialog using hide method.

Set the [CloseOnEscape](https://ej2.syncfusion.com/vue/documentation/api/dialog/#closeonescape) property value to false to prevent closing of the dialog when pressing Esc key.

In the following sample, dialog is closed when clicking outside the dialog area using [hide](https://ej2.syncfusion.com/vue/documentation/api/dialog/#hide) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/outside-click-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/outside-click-cs1" %}