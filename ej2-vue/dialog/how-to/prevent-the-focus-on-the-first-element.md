---
layout: post
title: How to prevent focus on first element in Vue Dialog | Syncfusion
description: Stop the Vue Dialog from auto-focusing the first focusable content element on open by handling the open event and enabling the preventFocus argument.
control: Prevent the focus on the first element 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to Prevent Focus on First Element in Vue Dialog

By default, the dialog focuses on the first focusable element in the content area. You can prevent this default focusing behavior using the [open](https://ej2.syncfusion.com/vue/documentation/api/dialog#open) event and by enabling the `preventFocus` argument.

Bind the open event and enable the preventFocus argument, as shown in the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-focus-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-focus-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs1" %}

## See Also

* [Prevent the focus to the previous element](./prevent-the-focus-to-the-previous-element.md)