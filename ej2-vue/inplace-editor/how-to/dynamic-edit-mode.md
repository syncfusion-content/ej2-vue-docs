---
layout: post
title: Dynamic edit mode in Vue Inplace editor component | Syncfusion
description: Learn here all about Dynamic edit mode in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Dynamic edit mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic edit mode in Vue Inplace editor component

At component initial load, if you want to open editor state without interacting In-place Editor input element, it can be achieved by configuring the [enableEditMode](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#enableeditmode) property to `true`.

In the following sample, editor opened at initial load and when toggling a checkbox, it will remove or open the editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs17" %}