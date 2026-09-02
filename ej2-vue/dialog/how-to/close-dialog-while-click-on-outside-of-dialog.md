---
layout: post
title: How to close on outside click in Vue Dialog | Syncfusion
description: Close the Vue Dialog when clicking outside its area using the hide method, and optionally disable closing on the Esc key via the closeOnEscape property.
control: Close dialog while click on outside of dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to close on outside click in Vue Dialog

By default, the Dialog can be closed by pressing the Esc key and clicking the close icon on the right of the dialog header. It can also be closed by clicking outside of the dialog using the hide method.

Set the [closeOnEscape](https://ej2.syncfusion.com/vue/documentation/api/dialog#closeonescape) property value to false to prevent closing of the dialog when pressing the Esc key.

In the following sample, the Dialog is closed when clicking outside the dialog area using [hide](https://ej2.syncfusion.com/vue/documentation/api/dialog#hide) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/outside-click-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/outside-click-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/outside-click-cs1" %}